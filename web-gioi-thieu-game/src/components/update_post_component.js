import React, { memo, useEffect, useRef, useState } from "react"
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import NestedList from '@editorjs/nested-list';
import useUser from "@/lib/useUser";
import { useRouter } from "next/router";
import Table from '@editorjs/table';
import Link from "next/link";

export default function UpdatePostComponent() {
    const { user } = useUser();
    const router = useRouter();
    const editorRef = useRef();
    const LinkTool = require('@editorjs/link');
    var content = {};

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailLink, setThumbnailLink] = useState('');

    // state of preview thumbnail
    const [preview, setPreview] = useState('')

    // handle choose thumbnail
    function changeThumnail(e) {
        if (e.length != 0) {
            const url = URL.createObjectURL(e[0]);
            setPreview(url)
        }
        else {
            setPreview('');
        }

    }

    // handle save changes
    async function saveData(e) {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        //handle change update thumbnail
        let thumbnail = '';
        if (preview == '') {
            thumbnail = thumbnailLink;
        }
        else {
            const fileThumnail = document.querySelector('demo1');
            formData.append("image_thumnail", fileThumnail);

            // upload_image thumnail
            try {
                const response = await fetch("http://localhost:3001/upload_image", {
                    method: "POST",
                    body: formData
                });
                const result = await response.json();
                thumbnail += result.file.url;
                console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }
        }



        let content = {};
        await editorRef.current.save().then((outputData) => {
            content = { ...outputData }
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });

        const postdata = { ...data, thumbnail, ...user, idPost: router.query.idPost, ...content }
        console.log("du lieu la : ",postdata);
        var myJsonString = JSON.stringify(postdata);
        console.log(myJsonString);

        fetch('http://localhost:3001/post/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postdata)
        })
            .then((response) => response.json())
            .then((e) => {
                if (e.result == 1) {
                    alert("Cập nhật bài viết thành công");
                    router.push(`/personal_post/${user.userId}`);
                }
            }).catch(() => {
                alert("Cập nhật bài viết thất bại do lỗi hệ thống!");
            });
    }

    useEffect(() => {
        if (router.isReady) {
            const { idPost, userId } = router.query;
            fetch(`http://localhost:3001/posts/postId/${idPost}/userId/${userId}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    content = { ...JSON.parse(data.result[0].Content) };
                    console.log('content la', content.blocks);
                    if (!editorRef.current) {
                        const editor = new EditorJS({

                            holder: 'editorjs',

                            placeholder: 'Ấn vào đây để tạo nội dung',
                            data: {
                                blocks: content.blocks,
                            },
                            tools: {
                                table: Table,
                                embed: {
                                    class: Embed,
                                    config: {
                                        services: {
                                            youtube: true,
                                            coub: true,
                                            facebook: true,
                                            instagram: true,
                                            twitter: true,

                                        }
                                    }
                                },

                                image: {
                                    class: ImageTool,
                                    config: {
                                        endpoints: {
                                            byFile: 'http://localhost:3001/upload_image_editorjs',
                                            byUrl: 'http://localhost:3001/upload_image_editorjs',
                                        },

                                        field: 'image',
                                        types: 'image/*'
                                    }
                                },

                                list: {
                                    class: NestedList,
                                    inlineToolbar: true,
                                    config: {
                                        defaultStyle: 'ordered'
                                    },
                                },

                                linkTool: {
                                    class: LinkTool,
                                    config: {
                                        endpoint: 'http://localhost:3001/fetchUrl', // Your backend endpoint for url data fetching,
                                    }
                                },

                            }
                        })

                        editorRef.current = editor;
                        setTitle(data.result[0].Title);
                        setDescription(data.result[0].description);
                        setThumbnailLink(data.result[0].Thumnail);
                    }
                })
        }
        return () => {
            if (editorRef.current && editorRef.current.destroy) {
                editorRef.current.destroy();
            }
        }
    }, [router.isReady])


    return (
        <div className="row write_post">
            <div className="col-12">
                <form onSubmit={saveData}>
                    <div className="row">
                        <div className="col-6 title">
                            <label>
                                Tiêu đề bài viết ---- <b>(Tối thiểu 5 ký tự)</b> và <b>(Tối đa 200 ký tự)</b>.
                                <br />
                                {
                                    <input
                                        type="text"
                                        name="Title"
                                        placeholder="Tiêu đề bài viết"
                                        maxLength={200}
                                        minLength={5}
                                        value={title}
                                        onChange={e => setTitle(e.target.value)} />
                                }
                            </label>
                        </div>

                        <div className="col-6 title">
                            <label>
                                Ảnh xem trước của bài viết --- <b>Ảnh png, jpg, jpeg</b>
                                <br />
                                <input
                                    type="file"
                                    name="image_thumnail"
                                    accept="image/png, image/jpeg"
                                    className="demo1"
                                    onChange={e => changeThumnail(e.target.files)}
                                />
                            </label>

                            {
                                preview && (
                                    <>
                                        <Link href={`#`} onClick={handelThumnail}>Bấm vào đây để xem ảnh</Link>
                                        <div className="thumnail">
                                            <div className="image">
                                                <img src={preview} />
                                            </div>

                                            <span className="close" onClick={handelThumnail}>X</span>
                                        </div>

                                    </>

                                )
                            }

                            {
                                preview == '' && (
                                    <>
                                        <Link href={thumbnailLink} onClick={handelThumnail}>Bấm vào đây để xem ảnh</Link>
                                        <div className="thumnail">
                                            <div className="image">
                                                <img src={thumbnailLink} />
                                            </div>

                                            <span className="close" onClick={handelThumnail}>X</span>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>


                    <div className="col-12 title">
                        <label>
                            Mô tả bài viết ---- <b>(Tối thiểu 5 ký tự)</b> và <b>(Tối đa 200 ký tự)</b>.
                            <br />
                            {
                                <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Mô tả bài viết" maxLength={200} required minLength={5} />
                            }
                        </label>
                    </div>


                    <div className="col-12 write-content">
                        <p>Nội dung</p>
                        <div id="editorjs" />
                    </div>


                    <div className="col-12">
                        <button >Lưu bài viết</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function handelThumnail(e) {
    e.preventDefault();
    const thumnail = document.querySelector('.thumnail');
    thumnail.classList.toggle('active');
}