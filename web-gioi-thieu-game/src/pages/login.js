import Link from 'next/link';
import Head from 'next/head';

// import components
import NavBarComponent from '@/components/navbar_component';
import Footer from '@/components/footer.js';


export default function Login() {
  return (
    <div className='container-lg'>
      <Head>
        <title>Đăng nhập</title>
      </Head>

      <NavBarComponent />

      <div className='row login-register-container'>
        <h2>Đăng nhập</h2>

        <div className='col-10 offset-1 col-md-4 offset-md-4'>
          <form>
            <label>
              Tên tài khoản:
              <br /><input type="text" name="name" /><br />
            </label>

            <label>
              Mật khẩu:
              <br /><input type="password" name="name" /><br />
            </label>

            <input type="submit" value="Đăng nhập" />
          </form>

          <div className='other'>
            <Link href="/register">Đăng ký</Link>
            <Link href="#">Lấy lại mật khẩu</Link>
          </div>
        </div>
      </div>

      <div className='row footer-container'>
        <Footer />
      </div>
    </div>
  );
}