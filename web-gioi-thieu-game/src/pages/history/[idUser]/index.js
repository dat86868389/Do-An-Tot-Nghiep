import HistoryComponent from "@/components/history_component";
import Layout from "@/layouts/layout";
import Head from "next/head";
import { useRouter } from "next/router";



export default function HistoryPage() {
    const router = useRouter();

    if (router.isReady) {
        return (
            <Layout>
                <Head>
                    <title>Lịch sử xem</title>
                </Head>
    
                <HistoryComponent
                    idUser={router.query.idUser}
                    page={router.query.page}
                />
            </Layout>
        )
    }
    
}