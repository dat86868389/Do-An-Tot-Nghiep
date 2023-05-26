import CommentsComponent from "@/components/comments_component";
import CommentStyle from '../styles/comments.module.css';
import { useEffect, useState } from "react";
import Link from "next/link";


export default function ReadPostComponent({ idPost }) {

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        console.log(123);
        fetch(`http://localhost:3001/posts/${idPost}`)
            .then(res => res.json())
            .then((e) => {
                const content = JSON.parse(e.result[0].Content);
                const title = e.result[0].Title;
                const username = e.result[0].UserName;

                const data = { title, username, ...content, idPost };
                setPostData(data);
            })

        fetch(`http://localhost:3001/post/${idPost}/update/view`, {
            method: 'PUT',
        })

    }, []);
    return (
        <>
            <div className="row post-container">
                <h1>{postData?.title}</h1>

                {
                    postData?.blocks.map(block => (
                        <div className="col-12 block-content" key={block.id}>
                            {handleRenderPostData(block)}
                        </div>
                    ))
                }
                <h2>Tác giả: {postData?.username}</h2>

            </div>

            <div className="row comments">
                <div className={CommentStyle.border}>
                    <h3 className={CommentStyle.title}>Bình Luận</h3>
                </div>
                {
                    postData?.idPost != undefined && (
                        <CommentsComponent postId={postData?.idPost} />
                    )
                }
            </div>
        </>
    )
}


function handleRenderPostData(block) {
    switch (block.type) {
        case 'image':
            return (
                <img
                    src={block.data.file.url}
                    height='80%'
                    key={block.id}
                />
            )

        case 'paragraph':
            return (
                <p key={block.id}>{block.data.text}</p>
            )

        case 'linkTool':
            return (
                <Link href={block.data.link} key={block.id} >{block.data.link}</Link>
            )
        case 'list': {
            let list = ``;
            block.data.items.map((item, index) => (
                list += `<p classname='content-list' key=${`${block.id}${index}`}>${index + 1}: ${item.content}</p>`
            ))
            return (
                <div className="content-list-container" dangerouslySetInnerHTML={{ __html: list }} />
            );
        }

        case 'table': {
            let table = ``;
            block.data.content.map((e) => {
                table += `<tr>`;
                e.map((tr) => {
                    table += `<td>`;
                    table += `${tr}`;
                    table += `</td>`;
                })
                table += `</tr>`;
            })

            return (
                <table className="content-table" dangerouslySetInnerHTML={{ __html: table }} />
            )
        }

        case 'embed': {
            return (

                <iframe src={`${block.data.embed}`} width="75%" height="500px" />

            )
        }

        default:
            break;
    }
}