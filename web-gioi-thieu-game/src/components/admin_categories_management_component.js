import Head from 'next/head';
import CateMagementStyle from '../styles/admin_cate_management.module.css';
import useSWR from 'swr';

export default function AdminCateManagementCompoent() {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const categories = useSWR('http://localhost:3001/categories/get', fetcher);


    return (
        <div className={`${CateMagementStyle.container}`}>
            <Head>
                <title>Quản lý thể loại</title>
            </Head>
            <h2>Quản lý thể loại</h2>
            <div className='row'>
                <form>
                    <div className='row'>
                    <div className='col-11'>
                        <input placeholder='Tên thể loại cần thêm'
                        className={`${CateMagementStyle.input}`} />
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
                                <th className={`${CateMagementStyle.th}`}>Chỉnh sửa</th>
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
                                            <button>Sửa</button>
                                        </td>

                                        <td className={`${CateMagementStyle.td}`}>
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