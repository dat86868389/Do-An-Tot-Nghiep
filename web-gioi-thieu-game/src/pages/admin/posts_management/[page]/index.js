import AdminPostManagementCompoent from "@/components/admin_posts_management_component";
import LayoutAdmin from "@/layouts/layout_admin";
import { useRouter } from "next/router";



export default function PostManagementPage() {

    const router = useRouter();

    if (router.isReady) {
        return (
            <LayoutAdmin>
                <AdminPostManagementCompoent page={router.query.page}/>
            </LayoutAdmin>
         )
    }
     

}