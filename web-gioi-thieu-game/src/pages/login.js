import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'

// import components
import NavBarComponent from '@/components/navbar_component';
import Footer from '@/components/footer.js';


export default function Login() {

  const router = useRouter();

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // You can pass formData as a fetch body directly:
    fetch(`http://localhost:3001/account/${formJson.account}/password/${formJson.password}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((e) => {
        console.log(e);
        if(e.result.length) {
          alert('Đăng nhập thành công');
          router.push('/');
        }
        else {
          alert('Đăng nhập thất bại');
        }
      }).catch((err) => {
        alert("Đăng nhập thất bại!");
        console.log(err);
      });
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