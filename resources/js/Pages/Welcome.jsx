import { Link, Head } from "@inertiajs/react";
import Homepages from "@/Components/home/Homepages";
import Header from "@/Components/common/header/Header";
import "@/App.css"
import Footer from "@/Components/common/footer/Footer";
export default function Welcome(props) {
    return (
        <>
            <Header></Header>
            <div className="">
                <Homepages></Homepages>
            </div>
            <Footer></Footer>
        </>
    );
}
