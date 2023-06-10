import React, { useEffect } from "react";
import Subscribe from "@/Components/Pricing/pricing";

import SnackbarProvider from "react-simple-snackbar";
export default function Pricing(props) {
    useEffect(() => {
        // console.log(props);
    });
    return (
        <SnackbarProvider>
            <div className="bg-gray-50">
                <Subscribe plans={props.plans}></Subscribe>
            </div>
        </SnackbarProvider>
    );
}
