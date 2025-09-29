import React from "react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
// import css
import "../../css/topic.mdl.css";
import logo from "../../js/image/LOGO.png";
// import swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import transition
import { CSSTransition } from "react-transition-group";
import "../../css/transition.css";

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <main className="container">
                <section className="content-t">
                    <div className="text-section">
                        <h1 className="main-title">
                            <span className="discoverr">Welcome to</span>
                            <span className="your-style">
                                <em className="style-italic">Style</em> Closet
                            </span>
                        </h1>
                        <p className="subtitle">
                            Style Closet your place for complete fashion
                            inspiration. From casual fits to chic statement
                            looks, we make style simple, fun, and personal.
                            Whether you're refreshing your wardrobe or looking
                            for outfit ideas, Style Closet helps you create
                            looks that feel truly you.
                        </p>
                        {/* <button
                            className="btn btn__primary rounded-lg ml-[-20px]"
                            style={{ marginTop: "20px" }}
                        >
                            Explore Collection
                        </button> */}
                    </div>

                    <div className="foto-about-section">
                        <img
                            src={logo}
                            alt="Fashion Model 1"
                            className="h-[90vh] object-cover w-auto max-w-[600px] object-bottom mb-[-73px]"
                        />
                    </div>
                </section>
            </main>

            {/* Pick Your Closet Section */}
            <section
                style={{
                    background:
                        "linear-gradient(135deg, #e8f0ff 0%, #f5f7ff 15%, #ffffff 30%, #f0f4ff 45%, #e6efff 60%, #ffffff 75%, #f2f6ff 90%, #e8f0ff 100%)",
                    padding: "80px 40px",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h2
                        style={{
                            fontSize: "98px",
                            fontWeight: "400",
                            lineHeight: "0.9",
                            color: "var(--color-head)",
                            fontFamily: "var(--font-news)",
                            marginBottom: "20px",
                        }}
                    >
                        Pick Your{" "}
                        <em
                            style={{
                                fontFamily: "var(--font-lux)",
                                fontSize: "98px",
                            }}
                        >
                            Closet
                        </em>
                    </h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridTemplateRows: "repeat(2, 1fr)",
                        gap: "20px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        height: "600px",
                    }}
                >
                    {/* Top row - 3 items */}
                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/6e/bb/6d/6ebb6dea3ebb36b24236009ebd467ad2.jpg"
                            alt="Blue Shirt"
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                        <div style={{ padding: "15px", height: "30%" }}>
                            <h3
                                style={{
                                    color: "var(--color-head)",
                                    marginBottom: "5px",
                                    fontSize: "16px",
                                }}
                            >
                                Casual Shirts
                            </h3>
                        </div>
                    </div>

                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/1200x/48/ad/7c/48ad7cd1dea96fa693c96ed1beac067d.jpg"
                            alt="Brown Gloves"
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                        <div style={{ padding: "15px", height: "30%" }}>
                            <h3
                                style={{
                                    color: "var(--color-head)",
                                    marginBottom: "5px",
                                    fontSize: "16px",
                                }}
                            >
                                Accessories
                            </h3>
                        </div>
                    </div>

                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/6c/d8/4c/6cd84c694ee0b67d4a21adb2b3b5951e.jpg"
                            alt="Denim Jeans"
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                        <div style={{ padding: "15px", height: "30%" }}>
                            <h3
                                style={{
                                    color: "var(--color-head)",
                                    marginBottom: "5px",
                                    fontSize: "16px",
                                }}
                            >
                                Denim
                            </h3>
                        </div>
                    </div>

                    {/* Bottom row - 3 items */}
                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/5c/bb/50/5cbb507efb16c2673446f9e0194afcb2.jpg"
                            alt="Black Dress"
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                        <div style={{ padding: "15px", height: "30%" }}>
                            <h3
                                style={{
                                    color: "var(--color-head)",
                                    marginBottom: "5px",
                                    fontSize: "16px",
                                }}
                            >
                                Dresses
                            </h3>
                        </div>
                    </div>

                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/ce/af/21/ceaf21c671cc9b4ed6c9c68adcac1d2b.jpg"
                            alt="Sneakers"
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                        <div style={{ padding: "15px", height: "30%" }}>
                            <h3
                                style={{
                                    color: "var(--color-head)",
                                    marginBottom: "5px",
                                    fontSize: "16px",
                                }}
                            >
                                Footwear
                            </h3>
                        </div>
                    </div>

                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/74/e1/71/74e171c328f538a456a83f1c99a4ae9c.jpg"
                            alt="Wide Leg Jeans"
                            style={{
                                width: "100%",
                                height: "70%",
                                objectFit: "cover",
                            }}
                        />
                        <div style={{ padding: "15px", height: "30%" }}>
                            <h3
                                style={{
                                    color: "var(--color-head)",
                                    marginBottom: "5px",
                                    fontSize: "16px",
                                }}
                            >
                                Bottoms
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Models Section */}
            <section
                style={{
                    background: "var(--color-card-bold)",
                    padding: "60px 40px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    <div
                        src=""
                        alt=""
                        style={{
                            width: "100%",
                            maxWidth: "800px",
                            height: "auto",
                            borderRadius: "20px",
                        }}
                    />
                </div>
            </section>

            <section
                style={{
                    background: "var(--color-card-bold)",
                    padding: "40px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px",
                        height: "300px",
                    }}
                >
                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            boxShadow: "0 8px 32px rgba(17, 24, 122, 0.15)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            textAlign: "center",
                        }}
                    >
                        <h3
                            style={{
                                color: "var(--color-head)",
                                marginBottom: "10px",
                                fontSize: "18px",
                            }}
                        >
                            New Arrivals
                        </h3>
                        <p
                            style={{
                                color: "var(--color-text)",
                                fontSize: "14px",
                            }}
                        >
                            Fresh styles weekly
                        </p>
                    </div>

                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            boxShadow: "0 8px 32px rgba(17, 24, 122, 0.15)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            textAlign: "center",
                        }}
                    >
                        <h3
                            style={{
                                color: "var(--color-head)",
                                marginBottom: "10px",
                                fontSize: "18px",
                            }}
                        >
                            Trending Now
                        </h3>
                        <p
                            style={{
                                color: "var(--color-text)",
                                fontSize: "14px",
                            }}
                        >
                            What's hot this season
                        </p>
                    </div>

                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            boxShadow: "0 8px 32px rgba(17, 24, 122, 0.15)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            textAlign: "center",
                        }}
                    >
                        <h3
                            style={{
                                color: "var(--color-head)",
                                marginBottom: "10px",
                                fontSize: "18px",
                            }}
                        >
                            Sale Items
                        </h3>
                        <p
                            style={{
                                color: "var(--color-text)",
                                fontSize: "14px",
                            }}
                        >
                            Up to 50% off
                        </p>
                    </div>

                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            boxShadow: "0 8px 32px rgba(17, 24, 122, 0.15)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            textAlign: "center",
                        }}
                    >
                        <h3
                            style={{
                                color: "var(--color-head)",
                                marginBottom: "10px",
                                fontSize: "18px",
                            }}
                        >
                            Style Guide
                        </h3>
                        <p
                            style={{
                                color: "var(--color-text)",
                                fontSize: "14px",
                            }}
                        >
                            Fashion tips & tricks
                        </p>
                    </div>
                </div>
            </section>

            <section
                style={{
                    background: "var(--color-card)",
                    padding: "80px 40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "400px",
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        maxWidth: "600px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "48px",
                            fontWeight: "400",
                            color: "var(--color-head)",
                            fontFamily: "var(--font-lux)",
                            marginBottom: "20px",
                        }}
                    >
                        Join Style Closet
                    </h2>
                    <p
                        style={{
                            color: "var(--color-text)",
                            fontSize: "18px",
                            marginBottom: "40px",
                            lineHeight: "1.6",
                        }}
                    >
                        Get exclusive access to new collections, styling tips,
                        and personalized fashion recommendations.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <button
                            className="btn btn__primary"
                            style={{
                                padding: "15px 30px",
                                fontSize: "16px",
                                borderRadius: "25px",
                            }}
                        >
                            Sign Up Now
                        </button>
                        <button
                            className="btn"
                            style={{
                                padding: "15px 30px",
                                fontSize: "16px",
                                borderRadius: "25px",
                                background: "transparent",
                                border: "2px solid var(--color-head)",
                                color: "var(--color-head)",
                            }}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
