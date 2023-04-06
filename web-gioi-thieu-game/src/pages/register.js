import Link from 'next/link';
import Head from 'next/head';

// import components
import NavBarComponent from '@/components/navbar_component';
import Footer from '@/components/footer.js';

export default function Register() {
  return (
    <div className='container-lg'>
      <Head>
        <title>Đăng ký</title>
        <link rel="icon" type="image/png" izes="192x192" href="/favicon-220x220.png" />
        <link rel="icon" type="image/png" izes="32x32" href="/favicon-220x220.png" />
      </Head>

      <NavBarComponent />

      <div className='row login-register-container'>
        <h2>Đăng ký</h2>

        <div className='col-10 offset-1 col-md-4 offset-md-4'>
          <form>
            <label>
              Tên tài khoản:
              <br /><input type="text" name="name" /><br />
            </label>

            <label>
              Tên bạn:
              <br /><input type="text" name="name" /><br />
            </label>

            <label>
              Email:
              <br /><input type="text" name="name" /><br />
            </label>

            <label>
              Mật khẩu:
              <br /><input type="password" name="name" /><br />
            </label>

            <input type="submit" value="Đăng ký" />
          </form>

          <div className='other'>
            <Link href="/login">Đăng nhập</Link>
          </div>
        </div>
      </div>

      <div className='row footer-container'>
        <Footer />
      </div>
    </div>
  );
}