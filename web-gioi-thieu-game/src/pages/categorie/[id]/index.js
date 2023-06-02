import { useRouter } from "next/router";
import Layout from "../../../layouts/layout";
import PostsByCategory from "@/components/posts_by_category";
import { useEffect, useState } from "react";
import ClientPagging from "@/components/pagging";
import useSWR from 'swr';
import Head from "next/head";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function PostIndex() {
    const router = useRouter();
    

    if (router.isReady) {
        const { id, page } = router.query;
        const quantity = useSWR(`http://localhost:3001/posts/get/quantity/category/${id}`, fetcher);
        console.log(Math.ceil(parseInt(quantity?.data?.result[0].count)/8));
        return (
            <Layout>
                <Head>
                    <title>Tìm bài viết theo thể loại</title>
                </Head>
                <PostsByCategory id={id} page={page}/>
                <ClientPagging 
                    currentPage={page}
                    totalPages={Math.ceil(parseInt(quantity?.data?.result[0].count)/8)}
                    subDomain={`/categorie/${id}?page=`}
                />
            </Layout>
        );
    } 
    


}