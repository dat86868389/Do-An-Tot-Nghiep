import AdminReviewPostsComponent from "@/components/admin_review_posts_component";
import LayoutAdmin from "@/layouts/layout_admin";
import { useRouter } from "next/router";



export default function AdminReviewPost() {
    const router = useRouter();

    if (router.isReady) {
        return (
            <LayoutAdmin>
                <AdminReviewPostsComponent
                    page = {router.query.page}
                />
            </LayoutAdmin>
        )
    }

}