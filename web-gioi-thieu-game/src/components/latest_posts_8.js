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

    const [newwest8, setNewwes8] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/posts/top_8_Latest')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setNewwes8(data);
            })
    }, []);

    return (

        <ul className='row latest-posts'>
            {
                newwest8?.result.map(e => (
                    <li className='col-md-4 col-lg-3' key={e.PostId}>

                        <div className={Lastest_post.postpre}>
                            <Link href="/posts/1">
                                <Image
                                    rel="preload"
                                    src={demoimage}
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
                                <Link href="#">
                                    Game,
                                </Link>





                                <Link href="#">
                                    Game Chiến Thuật,
                                </Link>


                                <Link href="#">
                                    Game Chiến Thuật,
                                </Link>


                                <Link href="#">
                                    Game Chiến Thuật,
                                </Link>


                                <Link href="#">
                                    Game Chiến Thuật,
                                </Link>


                                <Link href="#">
                                    Game Chiến Thuật,
                                </Link>


                                <Link href="#">
                                    Game Chiến Thuật,
                                </Link>


                                <Link href="#">
                                    Game Chiến Thuật,
                                </Link>

                                <Link href="#">
                                    Game Chiến Thuật,
                                </Link>
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