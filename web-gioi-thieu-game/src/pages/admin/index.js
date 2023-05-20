import Head from "next/head";
import AdminStyle from "../../styles/admin.module.css";
import LayoutAdmin from "@/layouts/layout_admin";
import Dasboard from "@/components/dashboard_component";
import useUser from "@/lib/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function AdminPage() {
    const router = useRouter();
    const { user, mutateUser } = useUser({
        redirectTo: '/admin',
        redirectIfFound: true,
    });

    //logout user
    async function handleLogout() {
        mutateUser(
            await fetch('/api/logout', { method: 'POST' }),
            false
        )
        router.push('/admin/login');

    }

    useEffect(() => {
        if (!user) {
            return
        }
        else {
            if (user?.roleID != 0 || user?.isLoggedIn == false) {
                handleLogout();
            }
        }

    }, [user])

    if (user != undefined) {
        if (user?.roleID == 0 && user?.isLoggedIn == true) {
            return (
                <>
                    <LayoutAdmin>
                        <Dasboard />
                    </LayoutAdmin>
                </>
            );
        }
    }

}

