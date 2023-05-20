import AdminStyle from "@/styles/admin.module.css";


export default function AdminTopNav() {


    return (
     
            <div className={`col-12`}>
                <div className={`${AdminStyle.info}`}>
                    <p>Xin chào: Nguyễn Tiến Đạt</p>
                    <div className={`${AdminStyle.submenu}`}>
                    </div>
                </div>
            </div>
     

    )
}