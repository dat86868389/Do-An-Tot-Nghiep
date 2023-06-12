import useSWR from 'swr';
import UserManagementStyle from "../styles/admin_user_management.module.css";
import Head from 'next/head';
import AdminPaginationComponent from './admin_pagination_component';

export default function UserManagementStyleComponent({ page }) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const users = useSWR(`http://localhost:3001/users/paginate/page/${page}`, fetcher);
    const users_quantity = useSWR(`http://localhost:3001/users/quantity`, fetcher);

    
    function handleDeleteUser(id) {
        
        fetch(`http://localhost:3001/user/${id}/status/0`, {
            method: 'PUT'
        })
            .then(response => response.json())
            .then(() => {
                users.mutate();
            })
    }


    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3001/user/update/role/${formJson.role}/userId/${formJson.user_ID}`, {
            method: 'PUT'
        })
            .then(response => response.json())
            .then(() => {
                users.mutate();
                handleClose();
            })
    }

    return (
        <div className={`${UserManagementStyle.container}`}>
            <Head>
                <title>Quản lý người dùng</title>
            </Head>
            <h2>Quản lý người dùng</h2>
            <div className="row">
                <div className="col-12">
                    <table className={`${UserManagementStyle.table}`}>
                        <thead>
                            <tr className={`${UserManagementStyle.tr}`}>
                                <th className={`${UserManagementStyle.th}`}>Tài Khoản</th>
                                <th className={`${UserManagementStyle.th}`}>Tên Người Dùng</th>
                                <th className={`${UserManagementStyle.th}`}>Email</th>
                                <th className={`${UserManagementStyle.th}`}>Ngày tạo</th>
                                <th className={`${UserManagementStyle.th}`}>Quyền</th>
                                <th className={`${UserManagementStyle.th}`}>Chỉnh sửa</th>
                                <th className={`${UserManagementStyle.th}`}>Xóa</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.data?.result.map(user => (
                                    <tr className={`${UserManagementStyle.tr}`}>
                                        <td className={`${UserManagementStyle.td}`}>
                                            {user.Account}
                                        </td>
                                        <td className={`${UserManagementStyle.td}`}>
                                            {user.UserName}
                                        </td>

                                        <td className={`${UserManagementStyle.td}`}>
                                            {user.email}
                                        </td>

                                        <td className={`${UserManagementStyle.td}`}>
                                            {handleRenderDateUser(user.time_create)}
                                        </td>

                                        <td className={`${UserManagementStyle.td}`}>
                                            {handleRenderRoleUser(user.RoleID)}
                                        </td>

                                        <td className={`${UserManagementStyle.td}`}>
                                            <button
                                                onClick={() => {
                                                    renderFormEditUser(user)
                                                }}
                                            >
                                                Sửa
                                            </button>
                                        </td>

                                        <td className={`${UserManagementStyle.td}`}>
                                            <button onClick={
                                                () => {
                                                    handleDeleteUser(user.UserId)
                                                }
                                            }>Xóa</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>

            <div
                className={`${UserManagementStyle.edit_user_container}`}
                id="edit_user"
            >
                <span className={`${UserManagementStyle.close}`}
                    onClick={handleClose}
                >
                    X
                </span>
                <form className={`${UserManagementStyle.edit_user}`}
                    onSubmit={handleSubmit}
                >

                    <label>
                        <br /><input
                            type="text"
                            name="user_ID"
                            readOnly
                            id='user_ID'
                            style={{ display: 'none' }}
                        />
                    </label>

                    <label>
                        Tài khoản:
                        <br /><input
                            type="text"
                            name="user_acount"
                            readOnly
                            id='user_acount'
                        />
                    </label> <br />

                    <label>
                        Tên người dùng:
                        <br /><input
                            type="text"
                            name='user_name'
                            readOnly
                            id='user_name'
                        />
                    </label> <br />

                    <label>
                        Ngày tạo
                        <br /><input
                            type="text"
                            name='user_date'
                            readOnly
                            id='user_date'
                        />
                    </label> <br />

                    <label>
                        Quyền
                        <br />
                        <select name="role" id="role" defaultValue="0">
                            <option value="0">Quản trị viên</option>
                            <option value="1">Người dùng</option>
                        </select>
                    </label>
                    <br />
                    <button id='update_info_user'>Chỉnh sửa</button>
                </form>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <AdminPaginationComponent
                        currentPage={page}
                        totalPages={Math.ceil(users_quantity?.data?.result[0].count / 12)}
                        subDomain={`/admin/user_management/`}
                    />
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

function handleRenderRoleUser(role) {
    switch (role) {
        case 0: {
            return `Quản trị viên`
        }
        case 1: {
            return `Người dùng`
        }
    }
}

function renderFormEditUser(user) {
    document.getElementById("edit_user").classList.add(UserManagementStyle.active);
    document.getElementById("user_acount").value = user.Account;
    document.getElementById("user_name").value = user.UserName;
    document.getElementById("user_date").value = handleRenderDateUser(user.time_create);
    document.getElementById("user_ID").value = user.UserId;
}

function handleClose() {
    document.getElementById("edit_user").classList.remove(UserManagementStyle.active);
}