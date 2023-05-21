import useSWR from 'swr';
import UserManagement from "../styles/admin_user_management.module.css";
import Head from 'next/head';

export default function UserManagementComponent() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const user_quantity = useSWR('http://localhost:3001/users/paginate/page/1', fetcher);

    return (
        <div className={`${UserManagement.container}`}>
            <Head>
                <title>Quản lý người dùng</title>
            </Head>
            <h2>Quản lý người dùng</h2>
            <div className="row">
                    <div className="col-12">
                        <table className={`${UserManagement.table}`}>
                            <thead>
                                <tr className={`${UserManagement.tr}`}>
                                    <th className={`${UserManagement.th}`}>Tài Khoản</th>
                                    <th className={`${UserManagement.th}`}>Tên Người Dùng</th>
                                    <th className={`${UserManagement.th}`}>Email</th>
                                    <th className={`${UserManagement.th}`}>Ngày tạo</th>
                                    <th className={`${UserManagement.th}`}>Chỉnh sửa</th>
                                    <th className={`${UserManagement.th}`}>Xóa</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user_quantity?.data?.result.map(user => (
                                        <tr className={`${UserManagement.tr}`}>
                                            <td className={`${UserManagement.td}`}>
                                                {user.Account}
                                            </td>
                                            <td className={`${UserManagement.td}`}>
                                                {user.UserName}
                                            </td>

                                            <td className={`${UserManagement.td}`}>
                                                {user.email}
                                            </td>

                                            <td className={`${UserManagement.td}`}>
                                                {handleRenderDateUser(user.time_create)}
                                            </td>

                                            <td className={`${UserManagement.td}`}>
                                                <button>Sửa</button>
                                            </td>

                                            <td className={`${UserManagement.td}`}>
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

function handleRenderDateUser(time) {
    const dateString = time;
    const dateObject = new Date(dateString);
    const date = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = dateObject.getMonth() < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    
    return `${date}-${month}-${year}`;

}