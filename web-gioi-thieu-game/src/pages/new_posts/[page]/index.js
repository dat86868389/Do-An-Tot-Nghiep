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

            <div className='row head-top'>
                <div className='col-12 col-lg-6 col-xl-6 col-6'>
                    <form>
                        <input type="text" placeholder='Tìm kiếm...' />
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                </div>

                <div className='col-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <div className='head-top_links'>
                        <Link href='/login'>Đăng nhập</Link>
                        <Link href='/register'>Đăng ký</Link>
                    </div>
                </div>
            </div>

            <div className='row navbar-container'>
                <div className='col col-lg-12 col-xl-12 col-xxl-12'>
                    <NavBarComponent />
                </div>
            </div>

            <NewPostsComponent />

            <div className='row footer-container'>
                <Footer />
            </div>

            <h1>Bạn đang ở page: {page}</h1>
        </div>  

    );
}