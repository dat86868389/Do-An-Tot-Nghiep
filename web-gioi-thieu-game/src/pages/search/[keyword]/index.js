import Layout from "@/layouts/layout";
import { useRouter } from "next/router";
import SearchComponent from "@/components/search_component";

export default function SearchPage() {
    const router = useRouter()
    const { keyword } = router.query
    return (
        <Layout>
            <SearchComponent keyword={keyword} />
        </Layout>
    )
}