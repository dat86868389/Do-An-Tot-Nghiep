import { useRouter } from "next/router";
import Layout_Post from "../../../layouts/layout_post";

export default function Post() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout_Post id={id} />
    );
}