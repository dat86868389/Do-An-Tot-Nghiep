import Head from "next/head";

import Header from "@/components/header";
import Footer from "@/components/footer";
import NavBarComponent from "@/components/navbar_component";
import Post from "@/components/post";

export default function Layout({ id }) {
    return (

        <div className='container-lg'>
            <Head>
                <title>Giao dien doc bai</title>
                <link rel="icon" href="favicon.ico"  />
            </Head>

            <Header />


            <NavBarComponent />

            <Post id={id}/>

            <div className='row footer-container'>
                <Footer />
            </div>

        </div>

    );


}