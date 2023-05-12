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
    const [data, setData] = useState();

    useEffect(() => {
        if (router.isReady) {
            const { page } = router.query;
            console.log(page);
            fetch(`http://localhost:3001/posts/get_posts_by_page/${page}/limit/8`)
                .then(res => res.json())
                .then(e => {
                    setData({
                        page,
                        listPosts: e.result,
                    });
                })
                .catch(() => {

                })
        }

    }, [router.isReady])

    return (
        <div className='container-lg'>
            <Head>
                <title>Bài viết mới</title>
            </Head>

            <Header />



            <NavBarComponent />



            <NewPostsComponent data={data?.listPosts} />



            <Pagging
                currentPage={data?.page}
                totalPages={data?.page}
            />




            <Footer />
        </div>

    );



}