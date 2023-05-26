import { useRouter } from "next/router";
import Layout_Post from "../../../layouts/layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import CommentsComponent from "@/components/comments_component";
import CommentStyle from '../../../styles/comments.module.css';

export default function PostIndex() {
    const router = useRouter();
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        console.log(4);
        const { id } = router.query;
        fetch(`http://localhost:3001/post/${id}/update/view`, {
            method: 'PUT',
        })

    }, [router.isReady == true])

    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;
            fetch(`http://localhost:3001/posts/${id}`)
                .then(res => res.json())
                .then((e) => {
                    const content = JSON.parse(e.result[0].Content);
                    const title = e.result[0].Title;
                    const username = e.result[0].UserName;

                    const data = { title, username, ...content, id };
                    setPostData(data);
                })

        }
    }, [router.isReady]);

   

    return (
        <Layout_Post>
            <Head>
                <title>{postData?.title}</title>
            </Head>
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
                    postData?.id != undefined && (
                        <CommentsComponent postId={postData?.id} />
                    )
                }
            </div>



        </Layout_Post>
    );
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