

import Footer from "@/components/footer";
import NavBarComponent from "@/components/navbar_component";


export default function Layout({ children }) {
    return (

        <div className='container-lg'>
            

            <NavBarComponent />

            <main>{children}</main>
            <Footer />
        </div>

    );


}