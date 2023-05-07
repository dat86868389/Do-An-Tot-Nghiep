import PesonalPostsComponent from "@/components/pesonal_posts_component";
import Layout from "@/layouts/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";



export default function PesonalPost() {
    const router = useRouter();
    const { idUser } = router.query;

    useEffect(() => {

    }, [router.isReady])

    if (router.isReady) {
        return (
            <Layout>
                <Head>
                    <title>Bài viết cá nhân</title>
                </Head>
                <PesonalPostsComponent id={idUser} />
            </Layout>

        );
    }

}