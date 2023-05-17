import demoimage from '../../public/demo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Lastest_post from '../styles/postpre.module.css';

import {
    faCalendarDays, faEye, faTags
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import CategoriesLinksComponent from './categories_links_component';

export default function navBarComponent() {

    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let posts = [];
        let categoriesData = [];
        fetch('http://localhost:3001/posts/top_8_Latest')
            .then(res => res.json())
            .then(async e => {
                posts = e.result;
                await posts.map(async (e, index) => {
                    const categoriesJson = await fetch(`http://localhost:3001/categories/get_by_post_id/${e.PostId}`);
                    const categories = await categoriesJson.json();
                    setCategories()
                    posts[index] = { ...posts[index], categories };
                })
                setPosts(posts);
            })
    }, []);

    console.log(posts);
    if (posts.length != 0) {
        return (

            <ul className='row latest-posts'>
                {
                    posts?.map((e, index) => (
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
                                    <CategoriesLinksComponent postID={e.PostId} />
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

}