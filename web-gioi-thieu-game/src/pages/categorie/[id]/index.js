import { useRouter } from "next/router";
import Layout from "../../../layouts/layout";
import PostsByCategory from "@/components/posts_by_category";
import { useEffect, useState } from "react";
import ClientPagging from "@/components/pagging";

export default function PostIndex() {
    const router = useRouter();
    const [prams, setPrams] = useState(null);

    // useEffect(() => {
    //     if (router.isReady) {
    //         const { id, page } = router.query;
    //         setPrams({ id, page });
    //     }
        
    // }, [router.isReady, router.query.id]);

    if (router.isReady) {
        const { id, page } = router.query;
        return (
            <Layout>
                <PostsByCategory id={id} page={page}/>
                <ClientPagging 
                    currentPage={page}
                    cateId={id}
                    subDomain={`/categorie/${id}?page=`}
                />
            </Layout>
        );
    } 
    


}