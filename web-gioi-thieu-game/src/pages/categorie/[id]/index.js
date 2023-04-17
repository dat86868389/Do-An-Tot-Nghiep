import { useRouter } from "next/router";
import Layout from "../../../layouts/layout";
import Post from "@/components/post";
import PostsByCategory from "@/components/posts_by_category";

export default function PostIndex() {
    const router = useRouter();
    const { id, page } = router.query;

    return (
        <Layout>
            <PostsByCategory id={id} page={page}/>
        </Layout>
    );
}