import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import Components
import NavBarComponent from '@/components/navbar_component';
import HotpostComponent from '@/components/hotposts_component';
import LatestPosts8Component from '@/components/latest_posts_8';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='container-lg'>
      <Head>
        <title>Trang chủ</title>
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

      <div className='row hotposts-container'>
        <h2 style={{ marginBottom: 20 + 'px' }}>Bài Viết <span className='txt-mark'>Nổi Bật</span></h2>
        <HotpostComponent />
      </div>

      <div className='row'>
        <div className='bg-container d-flex justify-content-between align-items-center see_all'>
          <h2>Bài Viết <span className='txt-mark'>Mới Nhất</span></h2>
          <Link href="/new_posts/1">
            Xem Tất Cả <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>

      <LatestPosts8Component />

      <div className='row footer-container'>
        <Footer />
      </div>

    </div>
  );
}
