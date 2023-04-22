import PesonalPostsComponent from "@/components/pesonal_posts_component";
import Layout from "@/layouts/layout";
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
                <PesonalPostsComponent id={idUser} />
            </Layout>

        );
    }

}