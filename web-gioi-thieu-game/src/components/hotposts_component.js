import demoimage from '../../public/demo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import hotPostsComponent from '../styles/hotposts.module.css';

import {
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';


export default function HotPostsComponent() {
    const [topPost, setTopPost] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/get_top_posts_by_view')
            .then(response => response.json())
            .then((data) => {
                setTopPost(data)
            })
            .catch(() => {
                alert('Đã có lỗi xảy ra với hệ thống');
            })
    }, [])

    if (topPost) {
        return (
            <>
                {handleRenderTop1(topPost.result[0])}
                <div className='col-md-12 col-lg-6'>
                    <div className={hotPostsComponent.top2to7_container}>
                        <ul>
                            {
                                topPost?.result.map((e, index) => (
                                    handleRender(index, e)
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

function handleRender(index, e) {
    if (index != 0) {
        return (
            <li>
                <Link href="#">
                    <img src={e.Thumnail} />
                    <div className={hotPostsComponent.contenttop2to7}>
                        <p className={hotPostsComponent.posttitle}> {e.Title}</p>
                        <div className={hotPostsComponent.description}>
                            <p>{e.description}</p>
                            <p><FontAwesomeIcon icon={faCalendarDays} /> {e.TimePost}</p>

                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

function handleRenderTop1(e) {
    return (
        <div className='col-md-12 col-lg-6'>
            <div className={hotPostsComponent.top1_post}>

                <img src={e.Thumnail} />

                <div className={hotPostsComponent.content}>
                    <Link href="#top1Post">
                        {e.Title}
                    </Link>

                    <p>{e.description}</p>

                    <div className={hotPostsComponent.athor_time_post}>
                        <p>Bởi: {e.UserName}</p>
                        <p><FontAwesomeIcon icon={faCalendarDays} /> {e.TimePost}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}