import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

// import components
import NavBarComponent from '@/components/navbar_component';
import Footer from '@/components/footer.js';
import useUser from '@/lib/useUser';


export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });
  const router = useRouter();

  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    try {
      mutateUser(
        await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formJson)
        })
      )

    } catch (err) {
      alert('Hệ thống đã xảy ra lỗi!!!');
      console.log('Login -> Error', err);
    }
  }


  return (
    <div className='container-lg'>
      <Head>
        <title>Đăng nhập</title>
      </Head>

      <NavBarComponent />

      <div className='row login-register-container'>
        <h2>Đăng nhập</h2>

        <div className='col-10 offset-1 col-md-4 offset-md-4'>
          <form onSubmit={handleSubmit}>
            <label>
              Tên tài khoản:
              <br /><input type="text" name="account" /><br />
            </label>

            <label>
              Mật khẩu:
              <br /><input type="password" name="password" /><br />
            </label>

            <input type="submit" value="Đăng nhập" />
          </form>

          <div className='other'>
            <Link href="/register">Đăng ký</Link>
            <Link href="#">Lấy lại mật khẩu</Link>
          </div>
        </div>
      </div>


      <Footer />

    </div>
  );
}


function proFile() {

}