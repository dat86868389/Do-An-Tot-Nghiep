import Layout from "@/layouts/layout_non_header";
import dynamic from "next/dynamic";
import Head from "next/head";

const UpdatePostComponent = dynamic(() => import("@/components/update_post_component"), {
    ssr: false,
})


export default function UpdatePost() {

    return (
        <Layout>
            <Head>
                <title>Chỉnh sửa bài viết</title>
            </Head>
            
            <UpdatePostComponent />
        </Layout>
    );
}