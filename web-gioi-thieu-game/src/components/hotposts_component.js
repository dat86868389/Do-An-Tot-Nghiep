import demoimage from '../../public/demo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import hotPostsComponent from '../styles/hotposts.module.css';

import {
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HotPostsComponent() {
    return (
        <>
            <div className='col-md-12 col-lg-6'>
                <div className={hotPostsComponent.top1_post}>

                    <Image
                        rel="preload"
                        priority={true}
                        src={demoimage}
                        alt="123123"
                    />

                    <div className={hotPostsComponent.content}>
                        <Link href="#top1Post">
                            WO LONG: FALLEN DYNASTY – NGOẠ LONG: VƯƠNG TRIỀU SUY TÀN
                        </Link>

                        <p>Giới thiệu game Wo Long: Fallen Dynasty - wqe qwe wqewq ewqe wqe wqe qwe wq q  wqewq ewq ewq ewq e qwewqewqe qư wq ewq ewqe wq ewqe wq eqwe  qư ewq ewq eư ew qe qwewq eeeeewqe wq wq ewqe wqe wqe q eqwe wqe qwe wqe ưqe qư ewqe ưq
                        </p>

                        <div className={hotPostsComponent.athor_time_post}>
                            <p>Bởi: Dat Nguyen</p>
                            <p><FontAwesomeIcon icon={faCalendarDays} /> 03/03/2022</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='col-md-12 col-lg-6'>
                <div className={hotPostsComponent.top2to7_container}>
                    <ul>
                        <li>
                            <Link href="#">
                                <Image
                                    rel="preload"
                                    priority={true}
                                    src={demoimage}
                                    alt="123"
                                />
                                <div className={hotPostsComponent.contenttop2to7}>
                                    <p className={hotPostsComponent.posttitle}> SONS OF THE qFOREST1</p>
                                    <div className={hotPostsComponent.description}>
                                        <p>Giới thiệu game Hogwarts Legacy Tải game Hogwarts Legacy 123  213 21 213 1221 321 321 321 21 3</p>
                                        <p><FontAwesomeIcon icon={faCalendarDays} /> 03/03/2022</p>

                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    rel="preload"
                                    priority={true}
                                    src={demoimage}
                                    alt="123"
                                />
                                <div className={hotPostsComponent.contenttop2to7}>
                                    <p className={hotPostsComponent.posttitle}> SONS OF THE qFOREST1</p>
                                    <div className={hotPostsComponent.description}>
                                        <p>Giới thiệu game Hogwarts Legacy Tải game Hogwarts Legacy 123  213 21 213 1221 321 321 321 21 3</p>
                                        <p><FontAwesomeIcon icon={faCalendarDays} /> 03/03/2022</p>

                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    priority={true}
                                    rel="preload"
                                    src={demoimage}
                                    alt="123"
                                />
                                <div className={hotPostsComponent.contenttop2to7}>
                                    <p className={hotPostsComponent.posttitle}> SONS OF THE qFOREST1</p>
                                    <div className={hotPostsComponent.description}>
                                        <p>Giới thiệu game Hogwarts Legacy Tải game Hogwarts Legacy 123  213 21 213 1221 321 321 321 21 3</p>
                                        <p><FontAwesomeIcon icon={faCalendarDays} /> 03/03/2022</p>

                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    rel="preload"
                                    priority={true}
                                    src={demoimage}
                                    alt="213"
                                />
                                <div className={hotPostsComponent.contenttop2to7}>
                                    <p className={hotPostsComponent.posttitle}> SONS OF THE qFOREST1</p>
                                    <div className={hotPostsComponent.description}>
                                        <p>Giới thiệu game Hogwarts Legacy Tải game Hogwarts Legacy 123  213 21 213 1221 321 321 321 21 3</p>
                                        <p><FontAwesomeIcon icon={faCalendarDays} /> 03/03/2022</p>

                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    rel="preload"
                                    priority={true}
                                    src={demoimage}
                                    alt="123"
                                />
                                <div className={hotPostsComponent.contenttop2to7}>
                                    <p className={hotPostsComponent.posttitle}> SONS OF THE qFOREST1</p>
                                    <div className={hotPostsComponent.description}>
                                        <p>Giới thiệu game Hogwarts Legacy Tải game Hogwarts Legacy 123  213 21 213 1221 321 321 321 21 3</p>
                                        <p><FontAwesomeIcon icon={faCalendarDays} /> 03/03/2022</p>

                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image
                                    rel="preload"
                                    src={demoimage}
                                    alt="123"
                                    priority={true}
                                />
                                <div className={hotPostsComponent.contenttop2to7}>
                                    <p className={hotPostsComponent.posttitle}> SONS OF THE qFOREST1</p>
                                    <div className={hotPostsComponent.description}>
                                        <p>Giới thiệu game Hogwarts Legacy Tải game Hogwarts Legacy 123  213 21 213 1221 321 321 321 21 3</p>
                                        <p><FontAwesomeIcon icon={faCalendarDays} /> 03/03/2022</p>

                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>



                </div>
            </div>
        </>
    );
}