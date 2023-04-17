import useUser from "@/lib/useUser";
import { faArrowRightFromBracket, faGamepad, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Header(props) {
    const { user, mutateUser } = useUser()
    const router = useRouter()

    //logout user
    async function handleLogout(e) {
        e.preventDefault();
        mutateUser(
            await fetch('/api/logout', { method: 'POST' }),
            false
        )
        router.push('/login');

    }

    return (
        <div className='row head-top'>
            <div className='col-12 col-lg-6 col-xl-6 col-6'>
                <form>
                    <input type="text" placeholder='Tìm kiếm...' />
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
                                            <Link href='#'><FontAwesomeIcon icon={faUser} /> Hồ sơ cá nhân</Link>
                                        </li>
                                        <li>
                                            <Link href='#'><FontAwesomeIcon icon={faGamepad} /> Lịch sử xem bài viết</Link>
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
                    user.isLoggedIn === false && (
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

