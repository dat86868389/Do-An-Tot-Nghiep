import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'
import useSWR from 'swr';
// Import components
import NavBarComponent from '@/components/navbar_component';
import Footer from '@/components/footer.js';
import NewPostsComponent from '@/components/new_posts_component';
import Header from '@/components/header';
import Pagging from '@/components/pagging';
import { useEffect, useState } from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function NewsPosts() {
    const router = useRouter();
    const quantity = useSWR(`http://localhost:3001/posts/get/quantity`, fetcher);
    if (router.isReady) {
        const { page } = router.query;
        console.log(parseInt(quantity?.data?.result[0].quantity)/8);
        return (
            <div className='container-lg'>
                <Head>
                    <title>Bài viết mới</title>
                </Head>
    
                <Header />
    
                <NavBarComponent />
    
                <NewPostsComponent page={page} />
    
                <Pagging
                    currentPage={page}
                    totalPages={Math.ceil(parseInt(quantity?.data?.result[0].quantity)/8)}
                    subDomain={`/new_posts/`}
                />
                <Footer />
            </div>
    
        );
    }
    
}