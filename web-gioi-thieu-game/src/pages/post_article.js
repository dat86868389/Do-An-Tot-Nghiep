import Layout from "@/layouts/layout_non_header";
import Head from "next/head";
import dynamic from "next/dynamic";

const EditorBlock = dynamic(() => import("@/components/write_new_post"), {
    ssr: false,
})

export default function PostArticle() {

    return (
        <Layout>
            <Head>
                <title>Bài viết mới</title>
                <link rel="icon" href="favicon.ico" />
            </Head>

          
            <EditorBlock />


        </Layout>
    );


}

