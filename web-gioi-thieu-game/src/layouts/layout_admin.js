import AdminStyle from "@/styles/admin.module.css";
import AdminLeftNav from "@/components/admin_leftnav_component";
import AdminTopNav from "@/components/admin_topnav_component";
export default function LayoutAdmin({ children }) {
    return (
        <div className="bg-admin-page container-fluid">
            <div className={`row ${AdminStyle.container}`}>
                <AdminLeftNav />

                <div className={`col-10`}>
                    <div className={`row ${AdminStyle.top_nav} `}>
                        <AdminTopNav />
                    </div>
                    <div className={`row`}>
                        <div className="col-12">
                            <main>{children}</main>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}