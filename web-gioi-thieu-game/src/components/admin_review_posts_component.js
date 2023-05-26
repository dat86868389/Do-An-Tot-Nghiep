import { useEffect, useState } from "react";
import PostsMagementStyle from '../styles/admin_post_management.module.css';
import Head from "next/head";
import Link from "next/link";
import useSWR from 'swr';
import AdminPaginationComponent from "./admin_pagination_component";



export default function AdminReviewPostsComponent({ page }) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const posts = useSWR(`http://localhost:3001/posts/status/code/0/page/${page}`, fetcher);
    const posts_quantity = useSWR('http://localhost:3001/posts/status/code/0/quantity', fetcher);

    function handleAcept(postID) {
        fetch(`http://localhost:3001/posts/set/status/code/1/postId/${postID}`, {
            method: 'PUT'
        })
            .then((res) => res.json())
            .then((e) => {
                console.log(e);
            });
    }

    function handleDelete(postId) {
        fetch(`http://localhost:3001/admin/posts/delete/${postId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(e => {
                console.log(e);
            })
    }

    if (posts.data && posts_quantity.data) {
        console.log(posts_quantity?.data?.result[0].count);
        return (
            <div className={`${PostsMagementStyle.container}`}>
                <Head>
                    <title>Duệt bài viết</title>
                </Head>
                <h2>Quản lý bài viết</h2>
                <div className="row">
                    <div className="col-12">
                        <table className={`${PostsMagementStyle.table}`}>
                            <thead>
                                <tr className={`${PostsMagementStyle.tr}`}>
                                    <th className={`${PostsMagementStyle.th}`}>Tên bài viêt</th>
                                    <th className={`${PostsMagementStyle.th}`}>Tác giả</th>
                                    <th className={`${PostsMagementStyle.th}`}>Ngày đăng</th>
                                    <th className={`${PostsMagementStyle.th}`}>Duyệt</th>
                                    <th className={`${PostsMagementStyle.th}`}>Không Duyệt</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts?.data?.result.map(p => (
                                        <tr className={`${PostsMagementStyle.tr}`}>
                                            <td className={`${PostsMagementStyle.td}`}>
                                                <Link href={`/admin/preview_post/${p.PostId}`} target="blank" >
                                                    {p.Title}
                                                </Link>
                                            </td>

                                            <td className={`${PostsMagementStyle.td}`}>
                                                {p.UserName}
                                            </td>

                                            <td className={`${PostsMagementStyle.td}`}>
                                                {handleRenderDate(p.TimePost)}
                                            </td>

                                            <td className={`${PostsMagementStyle.td}`}>
                                                <button onClick={() => { handleAcept(p.PostId) }}>Duyệt</button>
                                            </td>

                                            <td className={`${PostsMagementStyle.td}`}>
                                                <button onClick={() => { handleDelete(p.PostId) }}>Không Duyệt</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <AdminPaginationComponent
                            currentPage={page}
                            totalPages={Math.ceil(posts_quantity?.data?.result[0].count / 12)}
                            subDomain={`/admin/review_post/`}
                        />
                    </div>
                </div>
            </div>
        )
    }

}



function handleRenderDate(time) {
    const dateString = time;
    const dateObject = new Date(dateString);
    const date = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = dateObject.getMonth() < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    return `${date}-${month}-${year}`;

}

