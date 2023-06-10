import React from "react";
import SinglePage from "@/Components/singlePage/SinglePage";
import Header from "@/Components/common/header/Header";
import Footer from "@/Components/common/footer/Footer";

export default function Magazine(props) {
    return (
        <>
            <Header></Header>
            <div className="overflow-hidden">
                <SinglePage></SinglePage>
            </div>
            <Footer></Footer>
        </>
    );
}
