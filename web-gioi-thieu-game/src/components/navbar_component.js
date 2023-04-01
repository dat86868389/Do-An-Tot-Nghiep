import logo from '../../public/logonew.png';
import Image from 'next/image';
import Link from 'next/link';
import navbarStyle from '../styles/navbar_component.module.css';


export default function navBarComponent() {
    return (
        <div className={navbarStyle.navbar}>
            <Link href="/">
                <Image
                    src={logo}
                    alt="logo"
                />
            </Link>

            <ul>
                <li>
                    <Link href="#">Game+</Link>
                    <ul className={navbarStyle.submenu}>
                        <li>
                            <Link href="#">Thể loại</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link href="#">Đăng bài viết</Link>
                </li>

                <li>
                    <Link href="#">Game PC</Link>
                </li>

                <li>
                    <Link href="#">Game mobile</Link>
                </li>

                <li>
                    <Link href="#">liên hệ+</Link>
                    <ul className={navbarStyle.submenu}>
                        <li>
                            <Link href="#">Facebook</Link>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>

    );
}