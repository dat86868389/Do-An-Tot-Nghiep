import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import components
import NavBarComponent from '@/components/navbar_component';
import Footer from '@/components/footer.js';
import NewPostsComponent from '@/components/new_posts_component';
import Header from '@/components/header';


export default function NewsPosts() {

    const router = useRouter();
    const { page } = router.query;
    return (
        <div className='container-lg'>
            <Head>
                <title>Bài viết mới</title>
                <link rel="icon" type="image/png" izes="192x192" href="/favicon-220x220.png" />
                <link rel="icon" type="image/png" izes="32x32" href="/favicon-220x220.png" />
            </Head>

            <Header />

            <NavBarComponent />

            <NewPostsComponent />

            <div className='row footer-container'>
                <Footer />
            </div>

            <h1>Bạn đang ở page: {page}</h1>
        </div>

    );
}