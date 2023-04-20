import { useRouter } from "next/router";
import Layout_Post from "../../../layouts/layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function PostIndex() {
    const router = useRouter();


    const [postData, setPostData] = useState(null);


    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;
            fetch(`http://localhost:3001/posts/${id}`)
            .then(res => res.json())
            .then((e) => {
                const content = JSON.parse(e.result[0].Content);
                const title = e.result[0].Title;
                const username = e.result[0].UserName;

                const data = { title, username, ...content };
                console.log(data);
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
                        <div className="col-12 block-content">
                            {handleRenderPostData(block)}
                        </div>
                    ))
                }
                <h2>Tác giả: {postData?.username}</h2>


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
                />
            )

        case 'paragraph':
            return (
                <p>{block.data.text}</p>
            )

        case 'linkTool':
            return (
                <Link href={block.data.link}>{block.data.link}</Link>
            )
        case 'list': {
            let list = ``;
            block.data.items.map((item, index) => (
                list += `<p classname='content-list'>${index + 1}: ${item.content}</p>`
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
                console.log(table);
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