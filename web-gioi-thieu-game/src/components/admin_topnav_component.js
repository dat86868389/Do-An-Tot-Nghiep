import useUser from "@/lib/useUser";
import AdminStyle from "@/styles/admin.module.css";
import AdminTopNavStyle from "@/styles/admin_topnav.module.css";
import { useRouter } from "next/router";

export default function AdminTopNav() {
    const { user, mutateUser } = useUser();
    const router = useRouter();

    //logout user
    async function handleLogout(e) {
        e.preventDefault();
        mutateUser(
            await fetch('/api/logout', { method: 'POST' }),
            false
        )
        router.push('/admin/login');

    }

    return (
        <div className={`col-12`}>
            <div className={`${AdminStyle.info}`}>
                <p>Xin chào: {user?.userName}</p>
                <button
                    className={`${AdminTopNavStyle.button_loggout}`}
                    onClick={handleLogout}>
                    Thoát
                </button>
            </div>
        </div>


    )
}