import { useRouter } from "next/router";
import Layout from "../../../layouts/layout";
import PostsByCategory from "@/components/posts_by_category";
import { useEffect, useState } from "react";

export default function PostIndex() {
    const router = useRouter();
    const [prams, setPrams] = useState(null);

    useEffect(() => {
        if (router.isReady) {
            const { id, page } = router.query;
            setPrams({ id, page });
        }
        
    }, [router.isReady, router.query.id]);

    console.log(prams);
    if (prams != null) {
        console.log(prams);
        return (
            <Layout>
                <PostsByCategory id={prams.id} />
            </Layout>
        );
    } 
    


}