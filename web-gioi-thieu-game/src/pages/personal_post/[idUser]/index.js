import PesonalPostsComponent from "@/components/pesonal_posts_component";
import Layout from "@/layouts/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "@/lib/useUser";



export default function PesonalPost() {
    const router = useRouter();
    const { idUser } = router.query;
    const { user } = useUser();


    useEffect(() => {
        if (user?.isLoggedIn === false) {
            router.push('/login');
        }

    }, [router.isReady])
    

    if (router.isReady && user?.isLoggedIn) {
        if (user.userId != idUser) {
            router.push('/');
        }
        else {
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

}