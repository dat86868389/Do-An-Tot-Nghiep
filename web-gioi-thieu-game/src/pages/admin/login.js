import useUser from '@/lib/useUser';
import LoginPage from '../../styles/admin_login_page.module.css'
import { useRouter } from 'next/router';


export default function AdminLogin() {
    const router = useRouter();
    const { mutateUser } = useUser({
        redirectTo: '/admin',
        redirectIfFound: true,
    });


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
                    .then(res => res.json())
                    .then(e => {
                        if (e.result == -1) {
                            alert('Tài khoản hoặc mật khẩu không đúng!');
                        }

                        if (e.roleID != 0) {
                            alert('Bạn không có quyền vào trang này');
                            return;
                        }
                    })
            )

        } catch (err) {
            alert('Hệ thống đã xảy ra lỗi!!!');
            console.log('Login -> Error', err);
        }
    }


    return (
        <div className="container-fluid login-page">
            <div className={`${LoginPage.container} container`}>
                <div className='row'>
                    <div className='col-6 offset-3'>
                        <form className={`${LoginPage.form}`} onSubmit={handleSubmit}>
                            <h2>Đăng nhập</h2>
                            <input name="account" placeholder='Tài Khoản' /><br />
                            <input type='password' name="password" placeholder='Mật Khẩu' /><br />
                            <center>
                                <button>Đăng nhập</button>
                            </center>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}