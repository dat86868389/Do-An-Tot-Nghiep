import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DasboardStyle from "../styles/dashboard.module.css";
import { faBook, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";
import useSWR from 'swr';

export default function Dasboard() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const user_quantity = useSWR('http://localhost:3001/users/quantity', fetcher);
    const posts_quantity = useSWR('http://localhost:3001/posts/get/quantity', fetcher);
    const categories_quantity = useSWR('http://localhost:3001/categories/quantity', fetcher);
    const posts_waitting_quantity = useSWR('http://localhost:3001/posts/status/code/0/quantity', fetcher);


    const posts_waitting = useSWR('http://localhost:3001/posts/status/code/0', fetcher);
    const users = useSWR('http://localhost:3001/users/latest15', fetcher);


    function handleAcept(postID) {
        fetch(`http://localhost:3001/posts/set/status/code/1/postId/${postID}`, {
            method: 'PUT'
        })
            .then((res) => res.json())
            .then((e) => {
                console.log(e);
            });
    }
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
                            <p className={`${DasboardStyle.statistical_quantity}`}>
                                {user_quantity?.data?.result[0].count}
                            </p>
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
                            <p className={`${DasboardStyle.statistical_quantity}`}>
                                {posts_quantity?.data?.result[0].quantity}
                            </p>
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
                            <p className={`${DasboardStyle.statistical_quantity}`}>
                                {categories_quantity?.data?.result[0].count}
                            </p>
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
                            <p className={`${DasboardStyle.statistical_quantity}`}>
                                {posts_waitting_quantity?.data?.result[0].count}
                            </p>
                        </div>
                    </div>
                </div>

                {/* cac bai viet chua duyet */}
                <div className="row">
                    <div className="col-12">
                        <h2>Các bài viết chưa duyệt - <span><Link href={`#`}>xem tất cả</Link></span></h2>
                        <table className={`${DasboardStyle.table}`}>
                            <thead>
                                <tr className={`${DasboardStyle.tr}`}>
                                    <th className={`${DasboardStyle.th}`}>Tên bài viết</th>
                                    <th className={`${DasboardStyle.th}`}>Người đăng</th>
                                    <th className={`${DasboardStyle.th}`}>Ngày đăng</th>
                                    <th className={`${DasboardStyle.th}`}>Nội dung</th>
                                    <th className={`${DasboardStyle.th}`}>Duyệt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts_waitting?.data?.result.map(post => (
                                        <tr className={`${DasboardStyle.tr}`}>
                                            <td className={`${DasboardStyle.td}`}>{post.Title}</td>
                                            <td className={`${DasboardStyle.td}`}>{post.UserName}</td>
                                            <td className={`${DasboardStyle.td}`}>
                                                {handleRenderDate(post.TimePost)}
                                            </td>
                                            <td className={`${DasboardStyle.td}`}>
                                                <Link href={`/admin/preview_post/${post.PostId}`} target="_blank">xem</Link>
                                            </td>
                                            <td className={`${DasboardStyle.td}`}>
                                                <button onClick={() => handleAcept(post.PostId)}>Duyệt</button>
                                            </td>
                                        </tr>
                                    ))
                                }

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
                                    <th className={`${DasboardStyle.th}`}>Ngày tạo</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.data?.result.map(user => (
                                        <tr className={`${DasboardStyle.tr}`}>
                                            <td className={`${DasboardStyle.td}`}>
                                                {user.Account}
                                            </td>
                                            <td className={`${DasboardStyle.td}`}>
                                                {user.UserName}
                                            </td>

                                            <td className={`${DasboardStyle.td}`}>
                                                {user.email}
                                            </td>

                                            <td className={`${DasboardStyle.td}`}>
                                                {handleRenderDateUser(user.time_create)}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}


function handleRenderDate(time) {
    const dateString = time;
    const dateObject = new Date(dateString);
    const date = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = dateObject.getMonth() < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours() < 10 ? `0${dateObject.getHours()}` : dateObject.getHours();
    const minute = dateObject.getMinutes() < 10 ? `0${dateObject.getMinutes()}` : dateObject.getMinutes();
    const second = dateObject.getSeconds() < 10 ? `0${dateObject.getSeconds()}` : dateObject.getSeconds();

    return `${date}-${month}-${year} ${hour}h-${minute}m-${second}s`;

}


function handleRenderDateUser(time) {
    const dateString = time;
    const dateObject = new Date(dateString);
    const date = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = dateObject.getMonth() < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    
    return `${date}-${month}-${year}`;

}

