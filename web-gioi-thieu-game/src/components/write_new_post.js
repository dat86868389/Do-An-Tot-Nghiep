import React, { memo, useEffect, useRef } from "react"
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import NestedList from '@editorjs/nested-list';
import useUser from "@/lib/useUser";
import { useRouter } from "next/router";
import Table from '@editorjs/table';



export default function Editor() {
    const { user } = useUser();
    const router = useRouter();
    const editorRef = useRef();
    const LinkTool = require('@editorjs/link');

    function saveData() {
        editorRef.current.save().then((outputData) => {
            console.log('Article data: ', outputData)
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }


    useEffect(() => {
        if (user?.isLoggedIn == false) {
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
                                    byFile: 'http://localhost:3001/upload',
                                    byUrl: 'http://localhost:3001/upload',
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


    return (

        <div className="row write_post">

            <form>
                <div className="col-12 title">
                    <label>
                        Tiêu đề bài viết ---- <b>(Tối thiểu 5 ký tự)</b> và <b>(Tối đa 200 ký tự)</b>.
                        <br /><input type="text" name="name" placeholder="Tiêu đề bài viết" maxLength={200} required minLength={5} />
                    </label>
                </div>


                <div className="col-12 write-content">
                    <p>Nội dung</p>
                    <div id="editorjs" />
                </div>


                <div className="col-12">
                    <button onClick={saveData}>Lưu bài viết</button>
                </div>
            </form>
        </div>
    );
}


