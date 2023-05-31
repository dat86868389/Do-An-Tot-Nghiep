import { useEffect, useState } from "react";
import Lastest_post from '../styles/postpre.module.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTags } from "@fortawesome/free-solid-svg-icons";
import CategoriesLinksComponent from "./categories_links_component";


export default function SearchComponent({ keyword }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/posts/search/${keyword}`)
            .then(res => res.json())
            .then(data => {
                setData(data.result);
            })
    }, [keyword])
    return (
        <>
            <div className="search_result_container row">
                <div className="col-12">
                    <h1>Kết quả tìm kiếm với từ khóa: {keyword}</h1>
                </div>


                <ul className="row">
                    {
                        data?.map(e => (
                            <li key={e.PostId} className="col-md-4 col-lg-3">
                                <div className={Lastest_post.postpre}>
                                    <Link href={`/posts/${e.PostId}`}>
                                        <img
                                            rel="preload"
                                            src={e.Thumnail}

                                            alt="123"
                                            priority={true}
                                        />
                                    </Link>
                                    <div className={Lastest_post.title_container}>
                                        <Link href={`/posts/${e.PostId}`} className={Lastest_post.title} title={e.Title}>
                                            {e.Title}
                                        </Link>
                                    </div>


                                    <p className={Lastest_post.markscategory}>
                                        <FontAwesomeIcon icon={faTags} />
                                        <CategoriesLinksComponent postID={e.PostId}/>
                                    </p>

                                    <div className={Lastest_post.views_and_watchpost}>
                                        <Link href={`/posts/${e.PostId}`}>
                                            Xem bài viết
                                        </Link>

                                        <p><FontAwesomeIcon icon={faEye} /> {e.View}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>


            </div>
        </>
    )
}