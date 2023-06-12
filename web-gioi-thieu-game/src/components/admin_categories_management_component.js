import Head from 'next/head';
import CateMagementStyle from '../styles/admin_cate_management.module.css';
import useSWR from 'swr';

export default function AdminCateManagementCompoent() {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const categories = useSWR('http://localhost:3001/categories/get', fetcher);

    function handleAddCate(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3001/admin_side/categories/post/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson)
        })
            .then(response => response.json())
            .then(e => {
                categories.mutate();
                document.getElementById(`input_category_name`).value = '';
            })
    }

    function handleDeleteCate(idCate) {
        fetch(`http://localhost:3001/admin_side/categories/delete/${idCate}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(e => {
                    categories.mutate();
            })
    }

    return (
        <div className={`${CateMagementStyle.container}`}>
            <Head>
                <title>Quản lý thể loại</title>
            </Head>
            <h2>Quản lý thể loại</h2>
            <div className='row'>
                <form onSubmit={handleAddCate}>
                    <div className='row'>
                        <div className='col-11'>
                            <input
                                required
                                placeholder='Tên thể loại cần thêm'
                                name='cate_name'
                                className={`${CateMagementStyle.input}`}
                                id='input_category_name'
                            />
                        </div>
                        <div className='col-1'>
                            <button className={`${CateMagementStyle.button}`}>Thêm</button>
                        </div>
                    </div>

                </form>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className={`${CateMagementStyle.table}`}>
                        <thead>
                            <tr className={`${CateMagementStyle.tr}`}>
                                <th className={`${CateMagementStyle.th}`}>Tên thể loại</th>
                                <th className={`${CateMagementStyle.th}`}>Xóa</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories?.data?.result.map(cate => (
                                    <tr className={`${CateMagementStyle.tr}`}>
                                        <td className={`${CateMagementStyle.td}`}>
                                            {cate.CategoryName}
                                        </td>

                                        <td className={`${CateMagementStyle.td}`}>
                                            <button
                                                onClick={() => {
                                                    handleDeleteCate(cate.CategoryId)
                                                }}
                                            >
                                                Xóa
                                            </button>
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