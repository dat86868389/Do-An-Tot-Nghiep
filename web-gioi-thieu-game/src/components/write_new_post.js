import React, { memo, useEffect, useRef } from "react"
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import NestedList from '@editorjs/nested-list';



export default function Editor() {


    function saveData() {
        editorRef.current.save().then((outputData) => {
            console.log('Article data: ', outputData)
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }

    const editorRef = useRef();

    useEffect(() => {
        if (!editorRef.current) {

            const editor = new EditorJS({

                holder: 'editorjs',

                placeholder: 'Tạo bài viết của bạn...',


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
            <div className="col-12">
                <div id="editorjs" />
            </div>

            <div className="col-12">
                <button onClick={saveData}>Lưu bài viết</button>
            </div>
        </div>
    );
}


