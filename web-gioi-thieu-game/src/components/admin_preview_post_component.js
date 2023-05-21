import LayoutAdmin from "@/layouts/layout_admin";
import { useEffect, useRef, useState } from "react";
import AdminPreviewPostStyle from "../styles/admin_preview_post.module.css";
import { useRouter } from "next/router";

import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import NestedList from '@editorjs/nested-list';
import useUser from "@/lib/useUser";
import Table from '@editorjs/table';
import Link from "next/link";



export default function AdminPreviewPost({ postID }) {
    const router = useRouter();
    const [data, setData] = useState();
    const editorRef = useRef();
    const LinkTool = require('@editorjs/link');
    useEffect(() => {
        fetch(`http://localhost:3001/post/getinfo/${postID}`)
            .then(res => res.json())
            .then(e => {
                setData(e);
                console.log(e);
            })
    }, [postID != undefined])



    useEffect(() => {
        if (!editorRef.current) {
            let content = JSON.parse(data?.result[0]?.Content);
            const editor = new EditorJS({

                holder: 'editorjs',

                placeholder: 'Ấn vào đây để tạo nội dung',
                data: {
                    blocks: content.blocks
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
        }
        return () => {
            if (editorRef.current && editorRef.current.destroy) {
                editorRef.current.destroy();
            }
        }
    }, [])


    return (
        <div className={`${AdminPreviewPostStyle.container}`}>
            <div className="row">
                <div className="col-6">
                    <h2>Tiêu đề bài viết</h2>
                    <input value={data?.result[0]?.Title} readOnly />
                </div>

                <div className="col-6">
                    <h2>Ảnh bài viết</h2>
                    <img src={`${data?.result[0]?.Thumnail}`} height={`150px`} width={`180px`} />
                </div>

                <div className="col-12">
                    <h2>Mô tả bài viết</h2>
                    <textarea value={`${data?.result[0]?.description}`} />
                </div>

                <div className="col-12 write-content">
                    <p>Nội dung</p>
                    <div id="editorjs" />
                </div>
            </div>
        </div>
    )


}