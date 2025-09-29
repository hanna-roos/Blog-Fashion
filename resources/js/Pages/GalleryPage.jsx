import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Gallery from "@/Components/Gallery";
import Footer from "@/Components/Footer";

export default function HomePage(props) {
    console.log("data = ", props.news);
    return (
        <div>
            <Navbar />
            <Gallery />
            <Footer />
        </div>
    );
}
