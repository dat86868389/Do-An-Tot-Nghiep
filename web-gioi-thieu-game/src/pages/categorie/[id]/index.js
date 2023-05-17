import { useRouter } from "next/router";
import Layout from "../../../layouts/layout";
import PostsByCategory from "@/components/posts_by_category";
import { useEffect, useState } from "react";

export default function PostIndex() {
    const router = useRouter();
    const [prams, setPrams] = useState();


    useEffect(() => {
        const { id, page } = router.query;
        console.log(id);
        setPrams({ idCategory: id, page })
    }, [router.isReady, router.query.id])
    return (
        <Layout>

            <PostsByCategory id={prams.idCategory} page={prams.page} />



        </Layout>
    );
}