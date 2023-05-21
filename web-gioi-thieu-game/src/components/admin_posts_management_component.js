import PostsMagementStyle from '../styles/admin_post_management.module.css';
import useSWR from 'swr';
import Head from 'next/head';

export default function AdminPostManagementCompoent() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const posts = useSWR('http://localhost:3001/posts/get/page/1', fetcher);

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
                                <th className={`${PostsMagementStyle.th}`}>Chỉnh sửa</th>
                                <th className={`${PostsMagementStyle.th}`}>Xóa</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts?.data?.result.map(p => (
                                    <tr className={`${PostsMagementStyle.tr}`}>
                                        <td className={`${PostsMagementStyle.td}`}>
                                            {p.Title}
                                        </td>

                                        <td className={`${PostsMagementStyle.td}`}>
                                            {p.UserName}
                                        </td>

                                        <td className={`${PostsMagementStyle.td}`}>
                                            {p.TimePost}
                                        </td>

                                        <td className={`${PostsMagementStyle.td}`}>
                                            {p.Status}
                                        </td>

                                        <td className={`${PostsMagementStyle.td}`}>
                                            {p.description}
                                        </td>


                                        <td className={`${PostsMagementStyle.td}`}>
                                            <button>Sửa</button>
                                        </td>

                                        <td className={`${PostsMagementStyle.td}`}>
                                            <button>Xóa</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}