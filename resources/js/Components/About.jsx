import React from "react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import "../../css/about.css";
import Idol from "../image/about-idol.png";
import Collection1 from "../image/collection1.png";
import Collection2 from "../image/collection2.png";
import Collection3 from "../image/collection3.png";

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
import pfp from "../image/lol.jpeg";
import nextBtn from "../image/next-button.png";
import prevBtn from "../image/chevron.png";

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title" data-aos="fade-up">
                        About
                    </h1>
                    <div
                        className="hero-scroll-indicator"
                        data-aos="fade-up"
                        data-aos-delay={400}
                    ></div>
                </div>
            </section>

            {/* Who are we */}
            <section className="about1">
                <div className="about1-page">
                    <div className="about-grid">
                        <div className="foto-about">
                            <img src={Idol} alt="" className="" />
                        </div>
                        <div className="content-about">
                            <div class="intro-text">
                                <h2 class="section-title text-white">
                                    Who We Are
                                </h2>
                                <p class="intro-description text-white">
                                    We are a team of passionate innovators,
                                    designers, and developers dedicated to
                                    transforming ideas into exceptional digital
                                    experiences. Our journey began with a simple
                                    belief: technology should enhance human
                                    potential, not complicate it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* collection */}
            <section className="collection">
                <h2 className="collection-head">
                    Fashion is not just about clothes, it’s about expression.
                </h2>
                <p className="collection-descrption">
                    Here, every detail tells a story of identity, culture, and
                    freedom.
                </p>
                <div className="collection-grid">
                    <div className="card-collection">
                        <img src={Collection1} alt="Collection 1" />
                    </div>
                    <div className="card-collection">
                        <img src={Collection2} alt="Collection 2" />
                    </div>
                    <div className="card-collection">
                        <img src={Collection3} alt="Collection 3" />
                    </div>
                </div>
            </section>

            {/* swiper */}
            <section className="blog-slide">
                {/* header swiper + button */}
                <div className="slide-header">
                    <p className="more">More Articles</p>
                    <div className="swiper-btn">
                        <button className="custom-prev">
                            <img src={prevBtn} className="" />
                        </button>
                        <button className="custom-next">
                            <img src={nextBtn} className="" />
                        </button>
                    </div>
                </div>

                {/* swiper content */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 14,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 18,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <div className="articles_grid_swiper">
                        <SwiperSlide>
                            <article className="article__card">
                                <div className="article__image">
                                    <img
                                        src="https://i.pinimg.com/736x/93/f1/78/93f1789c4354095ab60087128ce9429a.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="article__content">
                                    <div className="article__meta">
                                        <span className="category">
                                            Outfit Ideas
                                        </span>
                                        <span className="date">
                                            14 Januari 2025
                                        </span>
                                    </div>
                                    <h3 className="article__title">
                                        Monochrome Streetwear
                                    </h3>
                                    <p className="article__excerpt">
                                        Warna pastel kembali jadi sorotan utama
                                        di Fashion Week tahun ini. Desainer
                                        mengombinasikan nuansa lembut dengan
                                        potongan tegas. Hasilnya tampak elegan.
                                    </p>
                                    <Link
                                        href={route("article")}
                                        className="article__link"
                                    >
                                        Baca Artikel
                                    </Link>
                                </div>
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="article__card">
                                <div className="article__image">
                                    <img
                                        src="https://i.pinimg.com/1200x/36/8a/ad/368aad0f42887bef054959371fabb35c.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="article__content">
                                    <div className="article__meta">
                                        <span className="category">Trends</span>
                                        <span className="date">
                                            15 Januari 2025
                                        </span>
                                    </div>
                                    <h3 className="article__title">
                                        Pastel Runway Trends
                                    </h3>
                                    <p className="article__excerpt">
                                        Warna pastel kembali jadi sorotan utama
                                        di Fashion Week tahun ini. Desainer
                                        mengombinasikan nuansa lembut dengan
                                        potongan tegas. Hasilnya tampak elegan.
                                    </p>
                                    <Link
                                        href={route("article")}
                                        className="article__link"
                                    >
                                        Baca Artikel
                                    </Link>
                                </div>
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="article__card">
                                <div className="article__image">
                                    <img
                                        src="https://i.pinimg.com/1200x/5f/9b/89/5f9b89ad50a8714a9dfc1b38654571c7.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="article__content">
                                    <div className="article__meta">
                                        <span className="category">
                                            Care & Tips
                                        </span>
                                        <span className="date">
                                            16 Januari 2025
                                        </span>
                                    </div>
                                    <h3 className="article__title">
                                        Denim Jacket Care
                                    </h3>
                                    <p className="article__excerpt">
                                        Warna pastel kembali jadi sorotan utama
                                        di Fashion Week tahun ini. Desainer
                                        mengombinasikan nuansa lembut dengan
                                        potongan tegas. Hasilnya tampak elegan.
                                    </p>
                                    <Link
                                        href={route("article")}
                                        className="article__link"
                                    >
                                        Baca Artikel
                                    </Link>
                                </div>
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="article__card">
                                <div className="article__image">
                                    <img
                                        src="https://i.pinimg.com/1200x/3d/76/b7/3d76b7e143e27dc657be8d6bccfc9a04.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="article__content">
                                    <div className="article__meta">
                                        <span className="category">
                                            Shopping
                                        </span>
                                        <span className="date">
                                            17 Januari 2025
                                        </span>
                                    </div>
                                    <h3 className="article__title">
                                        Choosing Daily Sneakers
                                    </h3>
                                    <p className="article__excerpt">
                                        Warna pastel kembali jadi sorotan utama
                                        di Fashion Week tahun ini. Desainer
                                        mengombinasikan nuansa lembut dengan
                                        potongan tegas. Hasilnya tampak elegan.
                                    </p>
                                    <Link
                                        href={route("article")}
                                        className="article__link"
                                    >
                                        Baca Artikel
                                    </Link>
                                </div>
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="article__card">
                                <div className="article__image">
                                    <img
                                        src="https://i.pinimg.com/736x/fe/6e/da/fe6eda8f140a2dbc6a9bcdc74ff2d357.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="article__content">
                                    <div className="article__meta">
                                        <span className="category">
                                            Outfit Ideas
                                        </span>
                                        <span className="date">
                                            18 Januari 2025
                                        </span>
                                    </div>
                                    <h3 className="article__title">
                                        Casual Weekend Look
                                    </h3>
                                    <p className="article__excerpt">
                                        Warna pastel kembali jadi sorotan utama
                                        di Fashion Week tahun ini. Desainer
                                        mengombinasikan nuansa lembut dengan
                                        potongan tegas. Hasilnya tampak elegan.
                                    </p>
                                    <Link
                                        href={route("article")}
                                        className="article__link"
                                    >
                                        Baca Artikel
                                    </Link>
                                </div>
                            </article>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </section>
        </>
    );
};

export default About;
