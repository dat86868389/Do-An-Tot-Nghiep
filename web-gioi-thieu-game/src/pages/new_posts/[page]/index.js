import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'

// Import components
import NavBarComponent from '@/components/navbar_component';
import Footer from '@/components/footer.js';
import NewPostsComponent from '@/components/new_posts_component';
import Header from '@/components/header';
import Pagging from '@/components/paging_component';
import { useEffect, useState } from 'react';


export default function NewsPosts() {
    const router = useRouter();
    const { page } = router.query;  

    return (
        <div className='container-lg'>
            <Head>
                <title>Bài viết mới</title>
            </Head>

            <Header />

            <NavBarComponent />

            <NewPostsComponent />

            {
                page != '' && (
                    <Pagging
                        currentPage={page}
                    />
                )
            }

            <Footer />
        </div>

    );


}