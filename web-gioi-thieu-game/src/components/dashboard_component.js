import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DasboardStyle from "../styles/dashboard.module.css";
import { faBook, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";

export default function Dasboard() {

    return (
        <>
            <div className={`${DasboardStyle.container}`}>
                <Head>
                    <title>Trang quản trị</title>
                </Head>
                {/* Thong ke */}
                <div className={`row ${DasboardStyle.statistical}`}>
                    <div className={`col-3`}>
                        <div className={`${DasboardStyle.statistical_user_background}`}>
                            <p className={`${DasboardStyle.statistical_title}`}>
                                Người Dùng
                            </p>
                            <p className={`${DasboardStyle.statistical_title}`}>
                                <FontAwesomeIcon icon={faUser} />
                            </p>
                            <p className={`${DasboardStyle.statistical_quantity}`}>500</p>
                        </div>
                    </div>

                    <div className={`col-3`}>
                        <div className={`${DasboardStyle.statistical_posts_background}`}>
                            <p className={`${DasboardStyle.statistical_title}`}>
                                Bài Viết
                            </p>
                            <p className={`${DasboardStyle.statistical_title}`}>
                                <FontAwesomeIcon icon={faBook} />
                            </p>
                            <p className={`${DasboardStyle.statistical_quantity}`}>500</p>
                        </div>
                    </div>

                    <div className={`col-3`}>
                        <div className={`${DasboardStyle.statistical_cate_background}`}>
                            <p className={`${DasboardStyle.statistical_title}`}>
                                Thể Loại
                            </p>
                            <p className={`${DasboardStyle.statistical_title}`}>
                                <FontAwesomeIcon icon={faTag} />
                            </p>
                            <p className={`${DasboardStyle.statistical_quantity}`}>500</p>
                        </div>
                    </div>

                    <div className={`col-3`}>
                        <div className={`${DasboardStyle.statistical_post_not_approved_yet_background}`}>
                            <p className={`${DasboardStyle.statistical_title}`}>
                                Bài Viết Chưa Duyệt
                            </p>
                            <p className={`${DasboardStyle.statistical_title}`}>
                                <FontAwesomeIcon icon={faBook} />
                            </p>
                            <p className={`${DasboardStyle.statistical_quantity}`}>500</p>
                        </div>
                    </div>
                </div>

                {/* nguoi dang ky moi nhat */}
                <div className="row">
                    <div className="col-12">
                        <h2>Các bài viết chưa duyệt - <span><Link href={`#`}>xem tất cả</Link></span></h2>
                        <table className={`${DasboardStyle.table}`}>
                            <thead>
                                <tr className={`${DasboardStyle.tr}`}>
                                    <th className={`${DasboardStyle.th}`}>Tài Khoản</th>
                                    <th className={`${DasboardStyle.th}`}>Tên Người Dùng</th>
                                    <th className={`${DasboardStyle.th}`}>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Maria Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany21321321@gmail.com</td>
                                </tr>

                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Maria Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany</td>
                                </tr>

                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Maria Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany</td>
                                </tr>

                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Maria Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany</td>
                                </tr>

                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds123213 Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Mariasad Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

                {/* nguoi dang ky moi nhat */}
                <div className="row">
                    <div className="col-12">
                        <h2>Những người đăng ký mới nhất - <span><Link href={`#`}>xem tất cả</Link></span></h2>
                        <table className={`${DasboardStyle.table}`}>
                            <thead>
                                <tr className={`${DasboardStyle.tr}`}>
                                    <th className={`${DasboardStyle.th}`}>Tài Khoản</th>
                                    <th className={`${DasboardStyle.th}`}>Tên Người Dùng</th>
                                    <th className={`${DasboardStyle.th}`}>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Maria Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany21321321@gmail.com</td>
                                </tr>

                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Maria Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany</td>
                                </tr>

                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Maria Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany</td>
                                </tr>

                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Maria Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany</td>
                                </tr>

                                <tr className={`${DasboardStyle.tr}`}>
                                    <td className={`${DasboardStyle.td}`}>Alfreds123213 Futterkiste</td>
                                    <td className={`${DasboardStyle.td}`}>Mariasad Anders</td>
                                    <td className={`${DasboardStyle.td}`}>Germany</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}