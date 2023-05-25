import PostsMagementStyle from '../styles/admin_post_management.module.css';
import useSWR from 'swr';
import Head from 'next/head';
import AdminPaginationComponent from './admin_pagination_component';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function AdminPostManagementCompoent({ page }) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const posts = useSWR(`http://localhost:3001/posts/get/page/${page}`, fetcher);
    const posts_quantity = useSWR('http://localhost:3001/posts/get/all/quantity', fetcher);

    function handleDelete(postId) {
        fetch(`http://localhost:3001/admin/posts/delete/${postId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(e => {
                console.log(e);
            })
    }

    if (posts.data && posts_quantity.data){
        console.log(posts_quantity?.data?.result[0].count);
        return (
            <div className={`${PostsMagementStyle.container}`}>
                <Head>
                    <title>Quản lý thể loại</title>
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
                                    <th className={`${PostsMagementStyle.th}`}>Trạng thái</th>
                                    <th className={`${PostsMagementStyle.th}`}>Mô tả</th>
                                    <th className={`${PostsMagementStyle.th}`}>Xóa</th>
    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts?.data?.result.map(p => (
                                        <tr className={`${PostsMagementStyle.tr}`} key={p.PostId}>
                                            <td className={`${PostsMagementStyle.td}`}>
                                                <Link href={`/admin/preview_post/${p.PostId}`}>
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
                                                {handleStatus(p.Status)}
                                            </td>
    
                                            <td className={`${PostsMagementStyle.td}`}>
                                                {p.description}
                                            </td>
    
                                            <td className={`${PostsMagementStyle.td}`}>
                                                <button onClick={()=>{handleDelete(p.PostId)}}>Xóa</button>
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
                            subDomain={`/admin/posts_management/`}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


function handleStatus(status) {
    switch (status) {
        case 0: {
            return `Chờ duyệt`;
        }

        case 1: {
            return `Đã duyệt`;
        }

        case -1: {
            return `đã xóa`;
        }
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
