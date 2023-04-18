import { useRouter } from "next/router";
import Layout_Post from "../../../layouts/layout";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PostIndex() {
    const router = useRouter();
    const { id } = router.query;

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${id}`)
            .then(res => res.json())
            .then((e) => {
                const content = JSON.parse(e.result[0].Content);
                const title = e.result[0].Title;

                const data = { title, ...content };
                console.log(data);
                setPostData(data);
            })
    }, []);

    return (
        <Layout_Post>

            <div className="row post-container">

                {
                    postData?.blocks.map(block => (
                        <div className="col-12 block-content">
                            {handleRenderPostData(block)}
                        </div>
                    ))
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
            block.data.items.map((item, index) =>(
                list += `<p classname='content-list'>${index}: ${item}</p>`
            ))
            return (list)
        }

        default:
            break;
    }
}