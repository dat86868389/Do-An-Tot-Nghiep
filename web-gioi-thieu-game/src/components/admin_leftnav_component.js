import AdminStyle from "@/styles/admin.module.css";
import Link from "next/link";
import LeftNavStyle from "../styles/admin.leftnav.module.css";

export default function AdminLeftNav() {
    
    return (
        <div className={`col-2 ${AdminStyle.left_nav}`}>
            <div className="row">
                <div className="col-12">
                    <Link href={`/admin`}>
                        <img src="/logonew.png" width={`100%`} height={`40px`}/>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Link href={`/admin`}  className={`${LeftNavStyle.link}`}>
                        Trang chính
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Link href={`/admin/posts_management/1`}  className={`${LeftNavStyle.link}`}>
                        Quản lý bài viết
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Link href={`/admin/user_management`}  className={`${LeftNavStyle.link}`}>
                        Quản lý người dùng
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Link href={`/admin/cate_management`}  className={`${LeftNavStyle.link}`}>
                        Quản lý thể loại
                    </Link>
                </div>
            </div>
        </div>


    )
}