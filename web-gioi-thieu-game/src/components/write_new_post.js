import React, { memo, useEffect, useRef, useState } from "react"
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import NestedList from '@editorjs/nested-list';
import useUser from "@/lib/useUser";
import { useRouter } from "next/router";
import Table from '@editorjs/table';
import CategoriesList from "@/components/categories_component";


export default function Editor() {
    const { user } = useUser();
    const router = useRouter();
    const editorRef = useRef();
    const LinkTool = require('@editorjs/link');

    const [categories, setCategories] = useState();

    // handle categoriesChekedList
    const [categoriesChekedList, setCategoriesChekedList] = useState([]);
    function handleAddCategories(id) {
        setCategoriesChekedList([
            ...categoriesChekedList,
            id
        ])
    }

    function handleDeleteCategory(id) {
        setCategoriesChekedList(categoriesChekedList.filter(e => e != id));
    }

    // handle save post data
    async function saveData(e) {
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        const fileThumnail = document.querySelector('demo1');
        formData.append("image_thumnail", fileThumnail);
        let thumnailLink = '';
        // upload_image thumnail
        try {
            const response = await fetch("http://localhost:3001/upload_image", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            thumnailLink += result.file.url;
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }


        let content = {};
        await editorRef.current.save().then((outputData) => {
            content = { ...outputData }
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });

        const postdata = { ...data, thumnailLink, ...user, ...content }
        console.log(postdata);
        var myJsonString = JSON.stringify(postdata);
        console.log(myJsonString);

        let idPost;
        await fetch('http://localhost:3001/post/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postdata)
        })
            .then((response) => response.json())
            .then((e) => {
                if (e.result == 0) {
                    alert("Đăng bài thất bại do trong bài viết bạn có thể có ký tự đặc biệt, biểu cảm. Hoặc do bạn coppy link ( Hãy dùng thẻ link )");
                    router.push('/');
                }
                else {
                    idPost = e.result;
                }
            }).catch(() => {
                alert("Đăng bài thất bại do lỗi hệ thống!");
            });

        let categoriesData = { id: idPost, cateList: categoriesChekedList }
        fetch(`http://localhost:3001/categories/post/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoriesData)
        })
            .then(res => res.json())
            .then(e => {
                if (e.result == 0) {
                    alert('Đăng bài viết không thành công');
                    router.push('/');
                }
                else {
                    router.push('/');
                }
            })
            .catch(() => {
                alert('Lỗi Hệ Thống');
            })

    }

    //check user logged
    useEffect(() => {
        if (user?.isLoggedIn == false) {
            alert('bạn chưa đăng nhập');
            router.push('/login');
        }
        else {
            if (!editorRef.current) {

                const editor = new EditorJS({

                    holder: 'editorjs',

                    placeholder: 'Ấn vào đây để tạo nội dung',

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
            }
            return () => {
                if (editorRef.current && editorRef.current.destroy) {
                    editorRef.current.destroy();
                }
            }
        }



    }, []);

    // get categories from api 
    useEffect(() => {
        fetch('http://localhost:3001/categories/get')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data.result);
            })
            .catch(() => {
                alert('Hệ thống đang xảy ra lỗi vui lòng thử lại sau')
            })
    }, []);


    return (

        <div className="row write_post">

            <form onSubmit={saveData}>
                <div className="row">
                    <div className="col-6 title">
                        <label>
                            Tiêu đề bài viết ---- <b>(Tối thiểu 5 ký tự)</b> và <b>(Tối đa 200 ký tự)</b>.
                            <br /><input type="text" name="Title" placeholder="Tiêu đề bài viết" maxLength={200} required minLength={5} />
                        </label>
                    </div>

                    <div className="col-6 title">
                        <label>
                            Ảnh xem trước của bài viết --- <b>Ảnh png, jpg, jpeg</b>
                            <br /><input type="file" name="image_thumnail" accept="image/png, image/jpeg" required className="demo1" />
                        </label>
                    </div>
                </div>


                <div className="col-12 title">
                    <label>
                        Mô tả bài viết ---- <b>(Tối thiểu 5 ký tự)</b> và <b>(Tối đa 200 ký tự)</b>.
                        <br /><textarea name="description" placeholder="Mô tả bài viết" maxLength={200} required minLength={5} />
                    </label>
                </div>


                <div className="col-12 write-content">
                    <p>Nội dung</p>
                    <div id="editorjs" />
                </div>

                <div className="col-12 categories_title">
                    <p>Chọn thể loại của bài viết</p>
                    {
                        categories?.length > 0 && (
                            <CategoriesList
                                categoriesList={categories}
                                onChooseCategory={handleAddCategories}
                                onUnChooseCategory={handleDeleteCategory}
                            />
                        )
                    }

                </div>


                <div className="col-12">
                    <button >Lưu bài viết</button>
                </div>
            </form>
        </div>
    );
}


