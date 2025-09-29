import React from "react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
// import css
import "../../css/topic.mdl.css";
// import swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import transition
import { CSSTransition } from "react-transition-group";
import "../../css/transition.css";
// import foto
import pfp from "../../js/image/lol.jpeg";
import nextBtn from "../../js/image/next-button.png";
import prevBtn from "../../js/image/chevron.png";

const Gallery = () => {
    return (
        <>
            {/* Gallery Hero Section */}
            <main
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    minHeight: "40vh",
                    background:
                        "linear-gradient(135deg, #e8f0ff 0%, #f5f7ff 15%, #ffffff 30%, #f0f4ff 45%, #e6efff 60%, #ffffff 75%, #f2f6ff 90%, #e8f0ff 100%)",
                    padding: "60px 30px",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h1
                        className="text-section"
                        style={{
                            fontSize: "128px",
                            fontWeight: "400",
                            lineHeight: "0.9",
                            fontFamily: "var(--font-lux)",
                            color: "var(--color-head)",
                            marginBottom: "20px",
                        }}
                    >
                        Gallery
                    </h1>
                </div>
            </main>

            <section
                style={{
                    background:
                        "linear-gradient(135deg, #e8f0ff 0%, #f5f7ff 15%, #ffffff 30%, #f0f4ff 45%, #e6efff 60%, #ffffff 75%, #f2f6ff 90%, #e8f0ff 100%)",
                    padding: "40px 30px 80px 30px",
                    minHeight: "100vh",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "20px",
                        gridAutoRows: "minmax(150px, auto)",
                    }}
                >
                    {/* Left column - Large vertical */}
                    <div
                        style={{
                            background: "var(--color-card-bold)",
                            borderRadius: "20px",
                            gridRow: "span 4",
                            minHeight: "500px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/2f/bd/7e/2fbd7e68be9c91113b8722406779079b.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Center column - top medium */}
                    <div
                        style={{
                            background: "var(--color-card-bold)",
                            borderRadius: "20px",
                            gridRow: "span 2",
                            minHeight: "200px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/66/d8/dd/66d8dd9ca17d5120282a0fc635eb5ca0.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Right column - Large vertical light */}
                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            gridRow: "span 4",
                            minHeight: "500px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/c1/bb/bb/c1bbbb28ddbad94e5f4808c23a1019be.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Second row left - Light */}
                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            gridRow: "span 2",
                            minHeight: "200px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/07/21/ed/0721ed774e1a1df6aa2f40a0e00026cd.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Center bottom - Large dark */}
                    <div
                        style={{
                            background: "var(--color-card-bold)",
                            borderRadius: "20px",
                            gridRow: "span 3",
                            minHeight: "350px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/1200x/1a/21/59/1a2159b5cd2222b1c4ef11719e6a9589.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Right second - Light */}
                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            gridRow: "span 2",
                            minHeight: "200px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/90/3a/f5/903af53a5de8a590ab55e96e555fa2c3.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Third row left - Large dark */}
                    <div
                        style={{
                            background: "var(--color-card-bold)",
                            borderRadius: "20px",
                            gridRow: "span 3",
                            minHeight: "350px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/1200x/13/b6/22/13b62288057d3386937ac59d2b4c748a.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Center bottom - Light square */}
                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            gridRow: "span 2",
                            minHeight: "200px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/1200x/49/f4/3c/49f43c69bf076d78370c71d3bb71b49e.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Right bottom - Dark */}
                    <div
                        style={{
                            background: "var(--color-card-bold)",
                            borderRadius: "20px",
                            gridRow: "span 2",
                            minHeight: "200px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/1200x/78/6e/1a/786e1a70e9c55336ddbfac5ef2fb83ec.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* Bottom row - Light rectangles */}
                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            gridRow: "span 2",
                            minHeight: "200px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/1200x/21/3b/4a/213b4a1093bf7daad8af29541438524c.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            gridRow: "span 2",
                            minHeight: "200px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/ee/9d/cd/ee9dcd68a9029ab4fcad405584a803b4.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "20px",
                            gridRow: "span 3",
                            minHeight: "350px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/77/69/9a/77699a48549853cd0870acbdb27452ad.jpg"
                            alt="Fashion Gallery"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
export default Gallery;
