import LayoutAdmin from "@/layouts/layout_admin";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AdminPreviewPost = dynamic(() => import("@/components/admin_preview_post_component"), {
    ssr: false,
})

export default function PreviewPost() {
    const router = useRouter();
    
    if (router.isReady) {
        return (
            <LayoutAdmin>
                <AdminPreviewPost postID={router.query.postID} />
            </LayoutAdmin>
        )
    }
    
}