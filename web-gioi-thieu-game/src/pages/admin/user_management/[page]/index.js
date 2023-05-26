import LayoutAdmin from "@/layouts/layout_admin";
import AdminUserManagementCompoent from "../../../../components/admin_user_management_component"
import { useRouter } from "next/router";

export default function UserManagement() {
    const router = useRouter();

    if (router.isReady)
    return (
        <LayoutAdmin>
            <AdminUserManagementCompoent 
                page={router.query.page}
            />
        </LayoutAdmin>

    )
}