import Lastest_post from '../styles/postpre.module.css';
import demoimage from '../../public/demo.jpg';
import {
    faCalendarDays, faEye, faTags
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CategoriesLinksComponent from './categories_links_component';

export default function NewPosts({ data }) {

    return (
        <ul className='row latest-posts'>
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


function paging(curentPage, perPage, totalPages) {

}
