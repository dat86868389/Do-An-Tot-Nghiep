import demoimage from '../../public/demo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Lastest_post from '../styles/postpre.module.css';

import {
    faCalendarDays, faEye, faTags
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

export default function navBarComponent() {

    const [data, setData] = useState([]);

    useEffect(() => {
        let posts = []
        fetch('http://localhost:3001/posts/top_8_Latest')
            .then(res => res.json())
            .then((data) => {
                posts = data.result;
                posts.map((e, index) => {
                    fetch(`http://localhost:3001/categories/get_by_post_id/${e.PostId}`)
                        .then(res => res.json())
                        .then(r => {
                            posts[index] = { ...posts[index], categories: r.result }
                        })
                        .finally(() => {
                            setData(posts);
                        })
                })
                
            })

    }, []);

    return (

        <ul className='row latest-posts'>
            {
                data?.map((e, index) => (
                    <li className='col-md-4 col-lg-3' key={e.PostId}>

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

                                {
                                    data[index]?.categories?.map(category => (
                                        <Link href={`/categorie/${category.CategoryId}?page=1`}>
                                            {category.CategoryName}
                                        </Link>
                                    ))
                                }



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

    );
}