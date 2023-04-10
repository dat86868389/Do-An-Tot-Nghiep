import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'

// import components
import NavBarComponent from '@/components/navbar_component';
import Footer from '@/components/footer.js';

export default function Register() {
  const router = useRouter();



  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // You can pass formData as a fetch body directly:
    fetch('http://localhost:3001/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJson)
    })
      .then((response) => response.json())
      .then((e) => {
        if (e.result == 0) {
          alert("Đăng ký thất bại!");
        }
        else {
          alert("Đăng ký thành công!");
          router.push('/login');
        }
      }).catch(() => {
        alert("Đăng ký thất bại!");
      });
  }


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
          <form onSubmit={handleSubmit}>

            <label>
              Tên của bạn:
              <br /><input type="text" name="userName" /><br />
            </label>

            <label>
              Tên tài khoản:
              <br /><input type="text" name="account" /><br />
            </label>

            <label>
              Mật khẩu:
              <br /><input type="password" name="password" /><br />
            </label>

            <label>
              Email:
              <br /><input type="text" name="email" /><br />
            </label>

            <input type="submit" value="Đăng ký" />
          </form>

          <div className='other'>
            <Link href="/login">Đăng nhập</Link>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}


