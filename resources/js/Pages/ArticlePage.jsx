import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import ArticleDetail from "@/Components/ArticleDetail";
import Footer from "@/Components/Footer";


export default function HomePage(props) {
    console.log("data = ", props.news);
    return (
        <div>
            <Navbar />
            <ArticleDetail />
            <Footer />
        </div>
    );
}
