import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";

export default function HomePage(props) {
    console.log("data = ", props.news);
    return (
        <div>
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}
