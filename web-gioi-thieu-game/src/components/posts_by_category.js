import { useEffect, useState } from "react";
import Lastest_post from '../styles/postpre.module.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTags } from "@fortawesome/free-solid-svg-icons";
import CategoriesLinksComponent from "./categories_links_component";


export default function PostByCategory({ id, page }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(page);
        fetch(`http://localhost:3001/posts/category/${id}/page/${page}`)
            .then(res => res.json())
            .then((data) => {
                setData(data.result);
            })
    }, [id, page]);

    return (
        <ul className="row post-container">
            {
                data?.length == 0 && (
                    <>
                        <h1>KHÔNG CÓ BÀI VIẾT NÀO</h1>
                        <Link href={`/`}>Bấm vào đây để về trang chủ</Link>
                    </>
                )
            }
            {
                data?.map((post) => (
                    <li className='col-md-4 col-lg-3' key={post.PostId}>

                        <div className={Lastest_post.postpre}>
                            <Link href={`/posts/${post.PostId}`}>
                                <img
                                    src={post.Thumnail}
                                />
                            </Link>
                            <div className='title_post_new'>
                                <Link href="#" className={Lastest_post.title}>
                                    {post.Title}
                                </Link>
                            </div>


                            <p className={Lastest_post.markscategory}>
                                <FontAwesomeIcon icon={faTags} />
                                <CategoriesLinksComponent postID={post.PostId} />
                            </p>

                            <div className={Lastest_post.views_and_watchpost}>
                                <Link href={`/posts/${post.PostId}`}>
                                    Xem bài viết
                                </Link>

                                <p><FontAwesomeIcon icon={faEye} /> {post.View}</p>
                            </div>
                        </div>

                    </li>
                ))
            }

        </ul>
    );
}