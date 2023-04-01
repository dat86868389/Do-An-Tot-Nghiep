import demoimage from '../../public/demo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Lastest_post from '../styles/postpre.module.css';

import {
    faCalendarDays, faEye, faTags
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function navBarComponent() {

    return (

        <ul className='row latest-posts'>
            <li className='col-md-4 col-lg-3'>

                <div className={Lastest_post.postpre}>
                    <Link href="#">
                        <Image
                            rel="preload"
                            src={demoimage}
                            alt="123"
                            priority={true}
                        />
                    </Link>
                    <Link href="#" className={Lastest_post.title}>
                        FARMING SIMULATOR 19
                    </Link>

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
                        <Link href='#'>
                            Xem bài viết
                        </Link>

                        <p><FontAwesomeIcon icon={faEye} /> 120</p>
                    </div>
                </div>

            </li>

            <li className='col-md-4 col-lg-3'>

                <div className={Lastest_post.postpre}>
                    <Link href="#">
                        <Image
                            rel="preload"
                            src={demoimage}
                            alt="123"
                            priority={true}
                        />
                    </Link>
                    <Link href="#" className={Lastest_post.title}>
                        FARMING SIMULATOR 19
                    </Link>

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
                    </p>

                    <div className={Lastest_post.views_and_watchpost}>
                        <Link href='#'>
                            Xem bài viết
                        </Link>

                        <p><FontAwesomeIcon icon={faEye} /> 120</p>
                    </div>
                </div>

            </li>

            <li className='col-md-4 col-lg-3'>

                <div className={Lastest_post.postpre}>
                    <Link href="#">
                        <Image
                            rel="preload"
                            src={demoimage}
                            alt="123"
                            priority={true}
                        />
                    </Link>
                    <Link href="#" className={Lastest_post.title}>
                        FARMING SIMULATOR 19
                    </Link>

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
                    </p>

                    <div className={Lastest_post.views_and_watchpost}>
                        <Link href='#'>
                            Xem bài viết
                        </Link>

                        <p><FontAwesomeIcon icon={faEye} /> 120</p>
                    </div>
                </div>

            </li>

            <li className='col-md-4 col-lg-3'>

                <div className={Lastest_post.postpre}>
                    <Link href="#">
                        <Image
                            rel="preload"
                            src={demoimage}
                            alt="123"
                            priority={true}
                        />
                    </Link>
                    <Link href="#" className={Lastest_post.title}>
                        FARMING SIMULATOR 19
                    </Link>

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
                    </p>

                    <div className={Lastest_post.views_and_watchpost}>
                        <Link href='#'>
                            Xem bài viết
                        </Link>

                        <p><FontAwesomeIcon icon={faEye} /> 120</p>
                    </div>
                </div>

            </li>

            <li className='col-md-4 col-lg-3'>

                <div className={Lastest_post.postpre}>
                    <Link href="#">
                        <Image
                            rel="preload"
                            src={demoimage}
                            alt="123"
                            priority={true}
                        />
                    </Link>
                    <Link href="#" className={Lastest_post.title}>
                        FARMING SIMULATOR 19
                    </Link>

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
                    </p>

                    <div className={Lastest_post.views_and_watchpost}>
                        <Link href='#'>
                            Xem bài viết
                        </Link>

                        <p><FontAwesomeIcon icon={faEye} /> 120</p>
                    </div>
                </div>

            </li>

            <li className='col-md-4 col-lg-3'>

                <div className={Lastest_post.postpre}>
                    <Link href="#">
                        <Image
                            rel="preload"
                            src={demoimage}
                            alt="123"
                            priority={true}
                        />
                    </Link>
                    <Link href="#" className={Lastest_post.title}>
                        FARMING SIMULATOR 19
                    </Link>

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
                    </p>

                    <div className={Lastest_post.views_and_watchpost}>
                        <Link href='#'>
                            Xem bài viết
                        </Link>

                        <p><FontAwesomeIcon icon={faEye} /> 120</p>
                    </div>
                </div>

            </li>

            <li className='col-md-4 col-lg-3'>

                <div className={Lastest_post.postpre}>
                    <Link href="#">
                        <Image
                            rel="preload"
                            src={demoimage}
                            alt="123"
                            priority={true}
                        />
                    </Link>
                    <Link href="#" className={Lastest_post.title}>
                        FARMING SIMULATOR 19
                    </Link>

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
                    </p>

                    <div className={Lastest_post.views_and_watchpost}>
                        <Link href='#'>
                            Xem bài viết
                        </Link>

                        <p><FontAwesomeIcon icon={faEye} /> 120</p>
                    </div>
                </div>

            </li>

            <li className='col-md-4 col-lg-3'>

                <div className={Lastest_post.postpre}>
                    <Link href="#">
                        <Image
                            rel="preload"
                            src={demoimage}
                            alt="123"
                            priority={true}
                        />
                    </Link>
                    <Link href="#" className={Lastest_post.title}>
                        FARMING SIMULATOR 19
                    </Link>

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
                    </p>

                    <div className={Lastest_post.views_and_watchpost}>
                        <Link href='#'>
                            Xem bài viết
                        </Link>

                        <p><FontAwesomeIcon icon={faEye} /> 120</p>
                    </div>
                </div>

            </li>

       
        </ul>

    );
}