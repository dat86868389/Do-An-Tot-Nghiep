import React, { memo, useEffect, useRef } from "react"
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';



export default function Editor() {
    const editorRef = useRef();

    useEffect(() => {
        if (!editorRef.current) {

            const editor = new EditorJS({

                holder: 'editorjs',

                placeholder: 'Tạo bài viết của bạn...',
                autofocus: true,


                tools: {
                    header: Header,
                    embed: {
                        class: Embed,
                        config: {
                            services: {
                                youtube: true,
                                coub: true,
                                facebook: true,
                                
                            }
                        }
                    },

                    image: {
                        class: ImageTool,
                        config: {
                          endpoints: {
                            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                          }
                        }
                      }






                }
            })

            editorRef.current = editor;
        }


        return () => {
            if (editorRef.current && editorRef.current.destroy) {
                editorRef.current.destroy();
            }
        }
    }, []);


    return (
        <div className="row write_post">
            <div className="col">
                <div id="editorjs" />
            </div>
        </div>
    );
}