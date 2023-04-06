import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Header() {

    return (
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
    );
}