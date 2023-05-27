import useUser from "@/lib/useUser";
import { faArrowRightFromBracket, faBook, faGamepad, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Header(props) {
    const { user, mutateUser } = useUser();
    const router = useRouter();

    //logout user
    async function handleLogout(e) {
        e.preventDefault();
        mutateUser(
            await fetch('/api/logout', { method: 'POST' }),
            false
        )
        router.push('/login');

    }

    function handleSearch(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        router.push(`/search/${formJson.key_word}`)
    }

    return (
        <div className='row head-top'>
            <div className='col-12 col-lg-6 col-xl-6 col-6'>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder='Tìm kiếm bài viết...' name="key_word"/>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>

            <div className='col-12 col-lg-6 col-xl-6 col-xxl-6'>
                {
                    user?.isLoggedIn === true && (
                        <>
                            <div className='head-top_links-logged'>
                                <span>Xin chào: <Link href='#'><b>{user.userName}</b></Link>
                                    <ul className="user-submenu">
                                        <li>
                                            <Link href={`/history/${user.userId}`}><FontAwesomeIcon icon={faGamepad} /> Lịch sử xem bài viết</Link>
                                        </li>
                                        <li>
                                            <Link href={`/personal_post/${user.userId}`}><FontAwesomeIcon icon={faBook} /> Bài viết của bạn</Link>
                                        </li>
                                        <li>
                                            <Link href='#' onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Đăng xuất</Link>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </>
                    )
                }

                {
                    user?.isLoggedIn === false && (
                        <>
                            <div className='head-top_links'>
                                <Link href='/login'>Đăng nhập</Link>
                                <Link href='/register'>Đăng ký</Link>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}

