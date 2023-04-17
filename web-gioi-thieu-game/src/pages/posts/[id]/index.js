import { useRouter } from "next/router";
import Layout_Post from "../../../layouts/layout";
import Post from "@/components/post";

export default function PostIndex() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout_Post>

            <Post id={id}/>

        </Layout_Post>
    );
}