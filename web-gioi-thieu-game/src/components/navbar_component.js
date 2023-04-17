import logo from '../../public/logonew.png';
import Image from 'next/image';
import Link from 'next/link';
import navbarStyle from '../styles/navbar_component.module.css';
import { useEffect, useState } from 'react';


export default function navBarComponent() {

    const [categoriesData, setcategoriesData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/categories/get')
            .then(res => res.json())
            .then((data) => {

                setcategoriesData(data);
            })
    }, []);


    return (
        <div className='row navbar-container'>
            <div className='col col-lg-12 col-xl-12 col-xxl-12'>
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
                                {
                                    categoriesData?.result.map(e => (
                                        <li>
                                            <Link href={`http://localhost:3000/categorie/${e.CategoryId}?page=1`}>{e.CategoryName}</Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </li>

                        <li>
                            <Link href="/post_article">Đăng bài viết</Link>
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
            </div>
        </div>



    );
}