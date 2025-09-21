import React from 'react';
import { useState } from 'react';
import { Link } from '@inertiajs/react';
// import css
import "../../css/topic.mdl.css";
// import swiper js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import transition
import { CSSTransition } from "react-transition-group";
import "../../css/transition.css";
// import foto
import pfp from "../../js/image/lol.jpeg";
import nextBtn from "../../js/image/next-button.png";
import prevBtn from "../../js/image/chevron.png";


const Topic = () => {   
   const [activeFilter, setActiveFilter] = useState("outfit");


    return (
      <>
         <main className="container">
            <section className="content">
                  <div className="text-section">
                     <h1 className="main-title">
                        <span className="discover">Discover</span>
                        <span className="your-style">Your <em className="style-italic">Style</em></span>
                     </h1>
                     <p className="subtitle">Outfit Ideas, Trends & Expert Tips</p>
                  </div>
                  
                  <div className="image-section">
                     <div className="image-grid">
                        <div className="image-box box-1">
                              <img src="https://i.pinimg.com/1200x/2f/bd/7e/2fbd7e68be9c91113b8722406779079b.jpg" alt="Fashion Style 1" />
                        </div>
                        <div className="image-box box-2">
                              <img src="https://i.pinimg.com/736x/66/d8/dd/66d8dd9ca17d5120282a0fc635eb5ca0.jpg" />
                        </div>
                        <div className="image-box box-3">
                              <img src="https://i.pinimg.com/736x/69/fc/b5/69fcb5634771f113bdae3c28b7815da7.jpg" alt="Fashion Style 3" />
                        </div>
                     </div>
                  </div>
            </section>
         </main>
  
         <section className="lol">
               {/* tombol filter */}
               <div className="filter-buttons">
               <button
                  className="btn-filter"
                  onClick={() => setActiveFilter("outfit")}
               >
                  Outfit Ideas
               </button>
               <button
                  className="btn-filter"
                  onClick={() => setActiveFilter("trend")}
               >
                  Trends & News
               </button>
               <button
                  className="btn-filter"
                  onClick={() => setActiveFilter("care")}
               >
                  Care & Tips
               </button>
               <button
                  className="btn-filter"
                  onClick={() => setActiveFilter("shopping")}
               >
                  Shopping Guides
               </button>
               </div>

               <CSSTransition
               in={activeFilter === "outfit"}
               timeout={300}
               classNames="fade"
               unmountOnExit
               >
                  {/* blog trend */}
                  <div className="blog-container outfit">
                  
                     <div className="blog__layout">
                        {/* main content */}
                        <div className="blog__content">

                           {/* featured content */}
                           <article className="featured__article">
                                 <div className="featured__image">
                                    <img src="https://i.pinimg.com/736x/6a/07/f4/6a07f4772050571b9f01539d3626d287.jpg" className='' alt='' />
                                    <div className="featured__badge">Featured</div>
                                 </div>
                                 <div className="featured__content">
                                    <div className="featured__meta">
                                       <span className="category">Outfit Ideas</span>
                                       <span className="date">15 Januari 2025</span>
                                    </div>
                                    <h1 className="featured__title">
                                       Casual Chic with Oversized Blazer
                                    </h1>
                                    <p className="featured__description">
                                       Oversized blazer bisa bikin gaya simpel jadi lebih classy tanpa usaha berlebih. Padukan dengan jeans high-waist dan sneakers putih untuk tampilan santai tapi tetap rapi.
                                    </p>
                                    <div className="featured__author">
                                       <img src={pfp} className='author__image' alt='' />
                                       <div className="author__info">
                                             <span className="author__name">Clara Wijaya</span>
                                             <span className="author__role">Fashion Designer</span>
                                       </div>
                                    </div>
                                    <Link href={route('article')} className="btn btn__primary">Baca Selengkapnya</Link>
                                 </div>
                           </article>

                           {/* article grid */}
                           <section className="articles__grid">
                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/1200x/e0/a3/cc/e0a3cc70dde4d393c19fdc430d2898da.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Outfit Ideas</span>
                                             <span className="date">14 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                             Monochrome Streetwear Vibes
                                       </h3>
                                       <p className="article__excerpt">
                                             Gaya monokrom selalu jadi pilihan aman dan modern. Hoodie hitam oversized dipadu cargo pants putih bikin look streetwear lebih bold dan kekinian.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/736x/01/2a/01/012a011b5756f7f0fa94f193a6e876a2.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Outfit Ideas</span>
                                             <span className="date">13 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                             Pastel Dreams Outfit
                                       </h3>
                                       <p className="article__excerpt">
                                             Warna pastel seperti lilac dan mint memberi sentuhan manis sekaligus segar. Outfit ini cocok buat brunch bareng teman atau sekadar jalan santai sore hari.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Outfit Ideas</span>
                                             <span className="date">12 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                             Summer Floral Dress
                                       </h3>
                                       <p className="article__excerpt">
                                             Gaun bermotif bunga selalu bikin mood lebih cerah. Cocok dipadukan dengan sandal simpel untuk kesan feminin yang effortless di musim panas.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/1200x/d1/91/d7/d191d71e311bb5fea1fa3f6b48e7d028.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Outfit Ideas</span>
                                             <span className="date">11 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                             Sporty Athleisure Look
                                       </h3>
                                       <p className="article__excerpt">
                                             Pakai crop top dengan jogger pants bisa bikin tampilan sporty tapi tetap stylish. Tambahkan sneakers chunky biar vibes lebih energik dan kekinian.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>
                           </section> 
                        </div>

                        {/* sidebar */}
                        <aside className="blog__sidebar">
                        <div className="sidebar__widget">
                           <h3 className="widget__title">Artikel Populer</h3>
                           <div className="widget__content">
                              <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://i.pinimg.com/1200x/03/31/2a/03312a132d1147d2f412ce92e03dc5a4.jpg" alt='' />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Denim on Denim</Link>
                                    </h4>
                                    <span className="sidebar__date">5 Januari 2025</span>
                                 </div>
                              </article>

                              <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://i.pinimg.com/1200x/19/65/26/1965269cbe7a32ef280ffdd00de23df2.jpg" alt='' />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Minimalist Beige Outfit</Link>
                                    </h4>
                                    <span className="sidebar__date">4 Januari 2025</span>
                                 </div>
                              </article>

                              <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://i.pinimg.com/736x/20/14/4c/20144c31ba7a91235a03aca091549c4b.jpg" alt='' />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Office Casual Look</Link>
                                    </h4>
                                    <span className="sidebar__date">3 Januari 2025</span>
                                 </div>
                              </article>

                              <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://i.pinimg.com/736x/2f/90/53/2f9053fefe132086bc22c9fc8d6c2e37.jpg" alt='' />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Romantic Lace Dress</Link>
                                    </h4>
                                    <span className="sidebar__date">2 Januari 2025</span>
                                 </div>
                              </article>

                              <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://i.pinimg.com/736x/22/55/e9/2255e98ff283b45ba0b696d248c1ef67.jpg" alt='' />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Vintage Aesthetic</Link>
                                    </h4>
                                    <span className="sidebar__date">2 Januari 2025</span>
                                 </div>
                              </article>

                              <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://i.pinimg.com/1200x/00/41/3a/00413a0762630ca67b9061b009e7839b.jpg" alt='' />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Cozy Knitwear Combo</Link>
                                    </h4>
                                    <span className="sidebar__date">2 Januari 2025</span>
                                 </div>
                              </article>

                              <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://i.pinimg.com/736x/5a/53/a4/5a53a40deb32540475aa79f40867e937.jpg" alt='' />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Bold Leather Jacket</Link>
                                    </h4>
                                    <span className="sidebar__date">2 Januari 2025</span>
                                 </div>
                              </article>
                           </div>
                        </div>

                        <div className="sidebar__widget">
                           <h3 className="widget__title">Kategori</h3>
                           <div className="widget__content">
                              <ul className="categories__list">
                                 <li>
                                    <Link href={route('article')} className="category__link">
                                       Outfit Ideas <span>(18)</span>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href={route('article')} className="category__link">
                                       Trends & News <span>(18)</span>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href={route('article')} className="category__link">
                                       Care & Tips <span>(18)</span>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href={route('article')} className="category__link">
                                       Shopping Guides <span>(18)</span>
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        </aside>
                     </div>

                     <section className="articles__list">
                        <h2 className="section__title">Artikel Terbaru</h2>
                        <div className="list__container">

                           <article className="list__item">
                              <div className="list__meta">
                                 <span className="category">Outfit Ideas</span>
                                 <span className="date">10 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                                 <Link href={route('article')}>Elegant Satin Skirt</Link>
                              </h4>
                              <p className="list__summary">
                                 Rok satin midi memberi kesan anggun dan feminin. Cukup tambahkan blouse simpel atau knit top untuk hasil yang elegan.
                              </p>
                           </article>

                           <article className="list__item">
                              <div className="list__meta">
                                 <span className="category">Outfit Ideas</span>
                                 <span className="date">9 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                                 <Link href={route('article')}>All-Black Statement</Link>
                              </h4>
                              <p className="list__summary">
                                 Outfit serba hitam selalu berhasil tampil powerful. Tambahkan boots tinggi untuk menegaskan kesan bold dan modern.
                              </p>
                           </article>

                           <article className="list__item">
                              <div className="list__meta">
                                 <span className="category">DevOps</span>
                                 <span className="date">8 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                                 <Link href={route('article')}>Bohemian Festival Outfit</Link>
                              </h4>
                              <p className="list__summary">
                                 Crop top renda dengan celana flare dan aksesori boho bikin gaya makin bebas. Look ini cocok untuk festival atau jalan santai ke pantai.
                              </p>
                           </article>

                           <article className="list__item">
                              <div className="list__meta">
                                 <span className="category">Outfit Ideas</span>
                                 <span className="date">7 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                                 <Link href={route('article')}>Parisian Inspired Look</Link>
                              </h4>
                              <p className="list__summary">
                                 Striped shirt dengan celana high-waist jadi kombinasi klasik ala Parisian. Tambahkan beret untuk sentuhan lebih autentik.
                              </p>
                           </article>

                        </div>
                     </section>
                     
                  </div>
               </CSSTransition>

               <CSSTransition
               in={activeFilter === "trend"}
               timeout={300}
               classNames="fade"
               unmountOnExit
               >

                  {/* blog trend */}
                  <div className="blog-container trend">
                  
                     <div className="blog__layout">
                        {/* main content */}
                        <div className="blog__content">

                           {/* featured content */}
                           <article className="featured__article">
                                 <div className="featured__image">
                                    <img src="https://i.pinimg.com/1200x/3f/3d/a9/3f3da998030014b059acb5115c4307a6.jpg" className='' alt='' />
                                    <div className="featured__badge">Featured</div>
                                 </div>
                                 <div className="featured__content">
                                    <div className="featured__meta">
                                       <span className="category">Trend & News</span>
                                       <span className="date">15 Januari 2025</span>
                                    </div>
                                    <h1 className="featured__title">
                                       Sustainable Fashion Movement
                                    </h1>
                                    <p className="featured__description">
                                    Gerakan fashion berkelanjutan semakin kuat, banyak brand mulai fokus pada bahan ramah lingkungan dan produksi yang lebih etis.
                                    </p>
                                    <div className="featured__author">
                                       <img src={pfp} className='author__image' alt='' />
                                       <div className="author__info">
                                             <span className="author__name">Andi Pratama</span>
                                             <span className="author__role">Senior Fashion Stylist</span>
                                       </div>
                                    </div>
                                    <a href="#" className="btn btn__primary">Baca Selengkapnya</a>
                                 </div>
                           </article>

                           {/* article grid */}
                           <section className="articles__grid">
                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/736x/71/54/b6/7154b69a80f5fe72cd524a3c1c1f9b22.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Trends & News</span>
                                             <span className="date">14 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                             Rise of Digital Runway Shows
                                       </h3>
                                       <p className="article__excerpt">
                                             Sejak pandemi, fashion show virtual jadi tren baru. Kini banyak rumah mode top tetap melanjutkan konsep digital runway.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://images.squarespace-cdn.com/content/v1/661d29f8ede0342d740900f6/1746642534392-0A3ICN3HC3TI3XEIH81K/FashionTrendsCover.png" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Trends & News</span>
                                             <span className="date">13 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                             Vintage Comeback 2025
                                       </h3>
                                       <p className="article__excerpt">
                                             Gaya vintage dari era 70-an hingga 90-an kembali populer dengan sentuhan modern yang lebih segar dan stylish.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://1000startupdigital.id/wp-content/uploads/2024/03/1_i3bipfMUUl_zbVyZTL6ANg.webp" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Trends & News</span>
                                             <span className="date">12 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                          AI dalam Industri Fashion
                                       </h3>
                                       <p className="article__excerpt">
                                             Artificial Intelligence mulai dipakai untuk memprediksi tren, mendesain pakaian, hingga personalisasi belanja online.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/736x/1a/cf/6f/1acf6f8b9def0aaacf740ae0ef8c39ca.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Trends & News</span>
                                             <span className="date">11 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                          Y2K Aesthetic Still Going Strong
                                       </h3>
                                       <p className="article__excerpt">
                                             Gaya Y2K dengan crop top, low rise jeans, dan aksesori playful masih jadi favorit anak muda di tahun ini.   
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>
                           </section> 
                        </div>

                           {/* sidebar */}
                           <aside className="blog__sidebar">
                              <div className="sidebar__widget">
                                 <h3 className="widget__title">Artikel Populer</h3>
                                 <div className="widget__content">
                                    
                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                          <img src="https://plugins-media.makeupar.com/smb/blog/post/2024-01-11/820d2229-a5d5-4f79-b859-e28e1ca73876.jpg" alt="" />
                                       </div>
                                       <div className="sidebar__content">
                                          <h4 className="sidebar__title">
                                             <Link href={route('article')}>Beauty Tech Expansion</Link>
                                          </h4>
                                          <span className="sidebar__date">5 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                          <img src="https://images.t2online.in/cdn-cgi/image/width=640,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=458644&t=1752517906344" alt="" />
                                       </div>
                                       <div className="sidebar__content">
                                          <h4 className="sidebar__title">
                                             <Link href={route('article')}>Wellness x Fashion</Link>
                                          </h4>
                                          <span className="sidebar__date">4 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                          <img src="https://editorial.femaledaily.com/wp-content/uploads/2021/04/BRAND-KECANTIKAN-ECO-FRIENDLY-OSEA-MALIBU.jpg" alt="" />
                                       </div>
                                       <div className="sidebar__content">
                                          <h4 className="sidebar__title">
                                             <Link href={route('article')}>Eco-Friendly Skincare</Link>
                                          </h4>
                                          <span className="sidebar__date">3 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJE5FxbyiXAQ8IylgtWmAwfn8jUloOX7UuwxJAk7Hv5QYfcIEpRW_mQoGpZhTz_sPTgL8&usqp=CAU" alt="" />
                                       </div>
                                       <div className="sidebar__content">
                                          <h4 className="sidebar__title">
                                             <Link href={route('article')}>Fashion in the Metaverse</Link>
                                          </h4>
                                          <span className="sidebar__date">2 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                          <img src="https://i.pinimg.com/736x/c7/ca/f6/c7caf6a58f1cca71281a48e5c2aa7cc5.jpg" alt="" />
                                       </div>
                                       <div className="sidebar__content">
                                          <h4 className="sidebar__title">
                                             <Link href={route('article')}>Celebrity Brand Domination</Link>
                                          </h4>
                                          <span className="sidebar__date">2 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                          <img src="https://img2.chinadaily.com.cn/images/202108/17/611b8038a310efa1e3b67f0d.jpeg" alt="" />
                                       </div>
                                       <div className="sidebar__content">
                                          <h4 className="sidebar__title">
                                             <Link href={route('article')}>Cultural Heritage Fashion</Link>
                                          </h4>
                                          <span className="sidebar__date">2 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fc7TS1fSyco8XkRrbqvvZ2V3UfotZwUZ8g&s" alt="" />
                                       </div>
                                       <div className="sidebar__content">
                                          <h4 className="sidebar__title">
                                             <Link href={route('article')}>Smart Fabrics Innovation</Link>
                                          </h4>
                                          <span className="sidebar__date">2 Januari 2025</span>
                                       </div>
                                    </article>

                                 </div>
                              </div>

                              <div className="sidebar__widget">
                                 <h3 className="widget__title">Kategori</h3>
                                 <div className="widget__content">
                                    <ul className="categories__list">
                                       <li><Link href={route('article')} className="category__link">Outfit Ideas <span>(18)</span></Link></li>
                                       <li><Link href={route('article')} className="category__link">Trends & News <span>(18)</span></Link></li>
                                       <li><Link href={route('article')} className="category__link">Care & Tips <span>(18)</span></Link></li>
                                       <li><Link href={route('article')} className="category__link">Shopping Guides <span>(18)</span></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </aside>
                        </div>

                     <section className="articles__list">
                                    <h2 className="section__title">Artikel Terbaru</h2>
                                    <div className="list__container">
                                       <article className="list__item">
                                          <div className="list__meta">
                                                <span className="category">Trends & News</span>
                                                <span className="date">10 Januari 2025</span>
                                          </div>
                                          <h4 className="list__title">
                                                <a href="#">Genderless Fashion Trends</a>
                                          </h4>
                                          <p className="list__summary">
                                             Semakin banyak brand meluncurkan koleksi unisex yang fleksibel dipakai semua gender, menekankan kebebasan berekspresi.
                                          </p>
                                       </article>

                                       <article className="list__item">
                                          <div className="list__meta">
                                                <span className="category">Trends & News</span>
                                                <span className="date">9 Januari 2025</span>
                                          </div>
                                          <h4 className="list__title">
                                                <a href="#">Quiet Luxury Hype</a>
                                          </h4>
                                          <p className="list__summary">
                                             Tren luxury minimalis dengan potongan simple tapi elegan sedang naik daun, menekankan kualitas ketimbang logo besar.
                                          </p>
                                       </article>

                                       <article className="list__item">
                                          <div className="list__meta">
                                                <span className="category">Trends & News</span>
                                                <span className="date">8 Januari 2025</span>
                                          </div>
                                          <h4 className="list__title">
                                                <a href="#"S>econd-Hand Market Growth</a>
                                          </h4>
                                          <p className="list__summary">
                                                Thrifting dan preloved fashion makin booming karena lebih ramah lingkungan sekaligus memberi pilihan gaya unik.
                                          </p>
                                       </article>

                                       <article className="list__item">
                                          <div className="list__meta">
                                                <span className="category">Trends & News</span>
                                                <span className="date">7 Januari 2025</span>
                                          </div>
                                          <h4 className="list__title">
                                                <a href="#">Streetwear Evolution</a>
                                          </h4>
                                          <p className="list__summary">
                                             Streetwear berkembang jadi lebih high-fashion, banyak kolaborasi antara brand besar dan desainer street culture.
                                          </p>
                                       </article>
                                    </div>
                     </section>
                     
                  </div>        
               </CSSTransition>

               <CSSTransition
               in={activeFilter === "care"}
               timeout={300}
               classNames="fade"
               unmountOnExit
               >

                  {/* blog care */}
                  <div className="blog-container care">
                  
                     <div className="blog__layout">
                        {/* main content */}
                        <div className="blog__content">

                           {/* featured content */}
                           <article className="featured__article">
                                 <div className="featured__image">
                                    <img src="https://images.saymedia-content.com/.image/t_share/MTk3NjcwNjA1NTEwNjgxOTAx/how-to-care-for-linen-clothing.png" className='' alt='' />
                                    <div className="featured__badge">Featured</div>
                                 </div>
                                 <div className="featured__content">
                                    <div className="featured__meta">
                                       <span className="category">Care & Tips</span>
                                       <span className="date">15 Januari 2025</span>
                                    </div>
                                    <h1 className="featured__title">
                                       Cara Merawat Pakaian Linen
                                    </h1>
                                    <p className="featured__description">
                                       Linen gampang kusut tapi tetap jadi favorit karena adem. Cuci dengan air dingin dan jemur di tempat teduh biar lebih awet.
                                    </p>
                                    <div className="featured__author">
                                       <img src={pfp} className='author__image' alt='' />
                                       <div className="author__info">
                                             <span className="author__name">Andi Pratama</span>
                                             <span className="author__role">Senior Software Engineer</span>
                                       </div>
                                    </div>
                                    <Link href={route('article')} className="btn btn__primary">Baca Selengkapnya</Link>
                                 </div>
                           </article>

                           {/* article grid */}
                           <section className="articles__grid">
                           <article className="article__card">
                              <div className="article__image">
                                 <img src="https://www.buttonscarves.com/cdn/shop/articles/shutterstock_1757997356.jpg?v=1708336581&width=1100" className='' alt='' />
                              </div>
                              <div className="article__content">
                                 <div className="article__meta">
                                 <span className="category">Care & Tips</span>
                                 <span className="date">14 Januari 2025</span>
                                 </div>
                                 <h3 className="article__title">
                                 Perawatan Sepatu Putih
                                 </h3>
                                 <p className="article__excerpt">
                                 Gunakan baking soda atau cairan khusus pembersih sneakers biar sepatu putih tetap kinclong dan nggak menguning.
                                 </p>
                                 <Link href={route('article')} className="article__link">Baca Artikel</Link>
                              </div>
                           </article>

                           <article className="article__card">
                              <div className="article__image">
                                 <img src="https://media.kompas.tv/library/image/content_article/article_img/20220902030431.jpg" className='' alt='' />
                              </div>
                              <div className="article__content">
                                 <div className="article__meta">
                                 <span className="category">Care & Tips</span>
                                 <span className="date">13 Januari 2025</span>
                                 </div>
                                 <h3 className="article__title">
                                 Merawat Pakaian Knit
                                 </h3>
                                 <p className="article__excerpt">
                                 Hindari gantung knitwear karena bisa melar. Lipat rapi dan cuci dengan gentle detergent supaya teksturnya tetap halus.
                                 </p>
                                 <Link href={route('article')} className="article__link">Baca Artikel</Link>
                              </div>
                           </article>

                           <article className="article__card">
                              <div className="article__image">
                                 <img src="https://image.idntimes.com/post/20240204/man-ironing-clothes-close-up-23-2148386989-9a6cec33ebb7b3b7854084bce5d2acb3-c6b42c5b74f6cce4a7e3e282c53a3140.jpg" className='' alt='' />
                              </div>
                              <div className="article__content">
                                 <div className="article__meta">
                                 <span className="category">Care & Tips</span>
                                 <span className="date">12 Januari 2025</span>
                                 </div>
                                 <h3 className="article__title">
                                 Tips Menyetrika Bahan Sutra
                                 </h3>
                                 <p className="article__excerpt">
                                 Gunakan suhu rendah dan lapisan kain tipis saat menyetrika sutra agar tetap berkilau dan tidak rusak.
                                 </p>
                                 <Link href={route('article')} className="article__link">Baca Artikel</Link>
                              </div>
                           </article>

                           <article className="article__card">
                              <div className="article__image">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsl5mSEoi5bUkw_CTK36gR2f5pSrmItuFiA&s" className='' alt='' />
                              </div>
                              <div className="article__content">
                                 <div className="article__meta">
                                 <span className="category">Care & Tips</span>
                                 <span className="date">11 Januari 2025</span>
                                 </div>
                                 <h3 className="article__title">
                                 Cara Mencuci Jeans yang Benar
                                 </h3>
                                 <p className="article__excerpt">
                                 Jangan terlalu sering cuci jeans. Balik bagian dalam dan gunakan air dingin supaya warna tetap awet.
                                 </p>
                                 <Link href={route('article')} className="article__link">Baca Artikel</Link>
                              </div>
                           </article>
                           </section>

                        </div>

                        {/* sidebar */}
                        <aside className="blog__sidebar">
                           <div className="sidebar__widget">
                                 <h3 className="widget__title">Artikel Populer</h3>
                                 <div className="widget__content">
                                 <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbPNx-_0mXrHycSYZOvSscd_1mfG_fkazmBP66Yq8IRPy5ETkXNMYB-eRYzl9KWNbBgI&usqp=CAU" alt="Skincare storage" />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Merawat Skincare agar Tahan Lama</Link>
                                    </h4>
                                    <span className="sidebar__date">5 Januari 2025</span>
                                 </div>
                                 </article>

                                 <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://asset-2.tribunnews.com/shopping/foto/bank/images/5-cara-menyimpan-parfum-yang-tepat-agar-wangi-mewahnya-tahan-lama.jpg" alt="Perfume bottles" />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Tips Menyimpan Parfum</Link>
                                    </h4>
                                    <span className="sidebar__date">4 Januari 2025</span>
                                 </div>
                                 </article>

                                 <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://asset.kompas.com/crops/oFR_Uejwaxt7a6UA5D_cC1LO-iE=/39x0:817x519/1200x800/data/photo/2023/12/27/658bb76035976.png" alt="Silver accessories" />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Cara Membersihkan Aksesoris Perak</Link>
                                    </h4>
                                    <span className="sidebar__date">3 Januari 2025</span>
                                 </div>
                                 </article>

                                 <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRed--Jn_9w5fv-FpSpQyP8MdtZ5w3XfWU3Xg&s" alt="Dyed hair" />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Perawatan Rambut Berwarna</Link>
                                    </h4>
                                    <span className="sidebar__date">2 Januari 2025</span>
                                 </div>
                                 </article>

                                 <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://www.stopngo.id/wp-content/uploads/2024/11/image-2024-11-11T153136.172.jpg" alt="Leather shoes" />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Tips Menjaga Sepatu Kulit Tetap Kinclong</Link>
                                    </h4>
                                    <span className="sidebar__date">1 Januari 2025</span>
                                 </div>
                                 </article>

                                 <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPB6tyoV8t7uptPBOu6r6VzMzeAIMuDgAMA&s" alt="Travel skincare pouch" />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Cara Menyimpan Skincare Travel Size</Link>
                                    </h4>
                                    <span className="sidebar__date">31 Desember 2024</span>
                                 </div>
                                 </article>

                                 <article className="sidebar__article">
                                 <div className="sidebar__image">
                                    <img src="https://fitinline.com/data/article/20240903/Jaket-Denim-001.jpg" alt="Denim jacket" />
                                 </div>
                                 <div className="sidebar__content">
                                    <h4 className="sidebar__title">
                                       <Link href={route('article')}>Merawat Jaket Denim</Link>
                                    </h4>
                                    <span className="sidebar__date">30 Desember 2024</span>
                                 </div>
                                 </article>

                                 </div>
                           </div>

                           <div className="sidebar__widget">
                                 <h3 className="widget__title">Kategori</h3>
                                 <div className="widget__content">
                                    <ul className="categories__list">
                                       <li><a href="#" className="category__link">Outfit Ideas <span>(18)</span></a></li>
                                       <li><a href="#" className="category__link">Trends & News<span>(18)</span></a></li>
                                       <li><a href="#" className="category__link">Care & Tips<span>(18)</span></a></li>
                                       <li><a href="#" className="category__link">Shopping Guides<span>(18)</span></a></li>
                                    </ul>
                                 </div>
                           </div>
                        </aside>
                     </div>

                  <section className="articles__list">
                        <h2 className="section__title">Artikel Terbaru</h2>
                        <div className="list__container">

                           <article className="list__item">
                              <div className="list__meta">
                              <span className="category">Care & Tips</span>
                              <span className="date">10 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                              <Link href={route('article')}>Tips Menyimpan Makeup Brush</Link>
                              </h4>
                              <p className="list__summary">
                              Simpan di tempat kering dengan posisi tegak. Cuci minimal seminggu sekali supaya bebas bakteri.
                              </p>
                           </article>

                           <article className="list__item">
                              <div className="list__meta">
                              <span className="category">Care & Tips</span>
                              <span className="date">9 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                              <Link href={route('article')}>Cara Merawat Hijab Satin</Link>
                              </h4>
                              <p className="list__summary">
                              Cuci dengan tangan menggunakan air dingin dan jangan diperas. Jemur di tempat teduh biar tetap lembut.
                              </p>
                           </article>

                           <article className="list__item">
                              <div className="list__meta">
                              <span className="category">Care & Tips</span>
                              <span className="date">8 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                              <Link href={route('article')}>Tips Merawat Sepatu Sneakers Canvas</Link>
                              </h4>
                              <p className="list__summary">
                              Gunakan sikat lembut dan deterjen cair, jangan pakai mesin cuci agar serat kain tidak cepat rusak.
                              </p>
                           </article>

                           <article className="list__item">
                              <div className="list__meta">
                              <span className="category">Care & Tips</span>
                              <span className="date">7 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                              <Link href={route('article')}>Perawatan Kulit di Musim Panas</Link>
                              </h4>
                              <p className="list__summary">
                              Jangan lupa pakai sunscreen dan pelembap ringan supaya kulit tetap terlindungi dari sinar matahari.
                              </p>
                           </article>

                           <article className="list__item">
                              <div className="list__meta">
                              <span className="category">Care & Tips</span>
                              <span className="date">6 Januari 2025</span>
                              </div>
                              <h4 className="list__title">
                              <Link href={route('article')}>Cara Menyimpan Aksesoris Emas</Link>
                              </h4>
                              <p className="list__summary">
                              Simpan terpisah dalam kotak beludru agar tidak tergores. Hindari kontak langsung dengan parfum atau lotion.
                              </p>
                           </article>

                        </div>
                  </section>

                     
                  </div>
               </CSSTransition>

               <CSSTransition
               in={activeFilter === "shopping"}
               timeout={300}
               classNames="fade"
               unmountOnExit
               >

                  {/* blog shopping */}
                  <div className="blog-container shopping">
                  
                     <div className="blog__layout">
                        {/* main content */}
                        <div className="blog__content">

                           {/* featured content */}
                           <article className="featured__article">
                                 <div className="featured__image">
                                    <img src="https://i.pinimg.com/1200x/80/30/39/8030398e01d931c0dece98b9072878a9.jpg" className='' alt='' />
                                    <div className="featured__badge">Featured</div>
                                 </div>
                                 <div className="featured__content">
                                    <div className="featured__meta">
                                       <span className="category">Shopping Guides</span>
                                       <span className="date">15 Januari 2025</span>
                                    </div>
                                    <h1 className="featured__title">
                                       Panduan Membeli Sneakers Putih
                                    </h1>
                                    <p className="featured__description">
                                       Sneakers putih selalu jadi favorit karena versatile. Pilih bahan kulit untuk tampilan sleek atau canvas untuk gaya santai yang ringan dipakai sehari-hari.
                                    </p>
                                    <div className="featured__author">
                                       <img src={pfp} className='author__image' alt='' />
                                       <div className="author__info">
                                             <span className="author__name">Andi Pratama</span>
                                             <span className="author__role">Host Live Shopping</span>
                                       </div>
                                    </div>
                                    <Link href={route('article')} className="btn btn__primary">Baca Selengkapnya</Link>
                                 </div>
                           </article>

                           {/* article grid */}
                           <section className="articles__grid">
                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/736x/58/e5/33/58e5339545632aa6876c649551ff66bf.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Shopping Guides</span>
                                             <span className="date">14 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                             Tips Belanja Pakaian Online
                                       </h3>
                                       <p className="article__excerpt">
                                          Selalu cek size chart dan baca review pembeli supaya nggak salah ukuran atau bahan.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/736x/5c/ef/fc/5ceffc7a9b315db1cce852cb23ab7a2e.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Shopping Guides</span>
                                             <span className="date">13 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                             Cara Memilih Sepatu Heels Nyaman
                                       </h3>
                                       <p className="article__excerpt">
                                          Pilih heels dengan tinggi maksimal 5 cm dan bantalan empuk agar tetap nyaman dipakai seharian.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/1200x/00/67/fc/0067fcd9716faa7f61c61cf087e51221.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Shopping Guides</span>
                                             <span className="date">12 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                          Panduan Membeli Jaket Kulit
                                       </h3>
                                       <p className="article__excerpt">
                                          Jaket kulit asli lebih awet dan stylish, tapi jaket faux leather juga bisa jadi pilihan hemat tanpa kehilangan gaya.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>

                                 <article className="article__card">
                                    <div className="article__image">
                                       <img src="https://i.pinimg.com/1200x/9d/d3/51/9dd35162abb712531f338366610714a9.jpg" className='' alt='' />
                                    </div>
                                    <div className="article__content">
                                       <div className="article__meta">
                                             <span className="category">Shopping Guides</span>
                                             <span className="date">11 Januari 2025</span>
                                       </div>
                                       <h3 className="article__title">
                                          Tips Memilih Scarf Multifungsi
                                       </h3>
                                       <p className="article__excerpt">
                                             Cari scarf dengan ukuran panjang dan bahan satin atau chiffon agar bisa dipakai sebagai hijab, ikat rambut, atau aksesoris tas.
                                       </p>
                                       <Link href={route('article')} className="article__link">Baca Artikel</Link>
                                    </div>
                                 </article>
                           </section> 
                        </div>

                        {/* sidebar */}
                        <aside className="blog__sidebar">
                           <div className="sidebar__widget">
                                 <h3 className="widget__title">Artikel Populer</h3>
                                 <div className="widget__content">
                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                             <img src="https://i.pinimg.com/736x/b5/8f/19/b58f19e21ed9ac1446ced86ad83893b9.jpg" className='' alt='' />
                                       </div>
                                       <div className="sidebar__content">
                                             <h4 className="sidebar__title">
                                                <Link href={route('article')}>Tips Memilih Tas Tote untuk Kuliah</Link>
                                             </h4>
                                             <span className="sidebar__date">5 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                             <img src="https://i.pinimg.com/736x/5a/4f/89/5a4f89fb8c27c977c5b05dfe8fe933f1.jpg" className='' alt='' />
                                       </div>
                                       <div className="sidebar__content">
                                             <h4 className="sidebar__title">
                                                <Link href={route('article')}>Cara Memilih Jaket Denim</Link>
                                             </h4>
                                             <span className="sidebar__date">4 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                             <img src="https://i.pinimg.com/736x/7c/4e/9b/7c4e9b50174b5195a6fced2f11b99ee9.jpg" className='' alt='' />
                                       </div>
                                       <div className="sidebar__content">
                                             <h4 className="sidebar__title">
                                                <Link href={route('article')}>Rekomendasi Celana Kulot Nyaman</Link>
                                             </h4>
                                             <span className="sidebar__date">3 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                             <img src="https://i.pinimg.com/1200x/11/80/5f/11805f04c6688cb11b77442859accdd9.jpg" className='' alt='' />
                                       </div>
                                       <div className="sidebar__content">
                                             <h4 className="sidebar__title">
                                                <Link href={route('article')}>Panduan Beli Kacamata Stylish</Link>
                                             </h4>
                                             <span className="sidebar__date">2 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                             <img src="https://i.pinimg.com/736x/86/c7/61/86c7610cce69cdb6a0d87911c500c1fe.jpg" className='' alt='' />
                                       </div>
                                       <div className="sidebar__content">
                                             <h4 className="sidebar__title">
                                                <Link href={route('article')}>Tips Memilih Outer untuk Musim Hujan</Link>
                                             </h4>
                                             <span className="sidebar__date">2 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                             <img src="https://i.pinimg.com/1200x/58/91/7e/58917e3abb4f8cc30b7f5231b7d93ce9.jpg" className='' alt='' />
                                       </div>
                                       <div className="sidebar__content">
                                             <h4 className="sidebar__title">
                                                <Link href={route('article')}>Cara Memilih Jam Tangan Fashion</Link>
                                             </h4>
                                             <span className="sidebar__date">2 Januari 2025</span>
                                       </div>
                                    </article>

                                    <article className="sidebar__article">
                                       <div className="sidebar__image">
                                             <img src="https://i.pinimg.com/736x/cc/0e/92/cc0e9259aa5a7837f85cc560efa066c3.jpg" className='' alt='' />
                                       </div>
                                       <div className="sidebar__content">
                                             <h4 className="sidebar__title">
                                                <Link href={route('article')}>Panduan Membeli Dress Summer</Link>
                                             </h4>
                                             <span className="sidebar__date">2 Januari 2025</span>
                                       </div>
                                    </article>
                                 </div>
                           </div>


                           <div className="sidebar__widget">
                                 <h3 className="widget__title">Kategori</h3>
                                 <div className="widget__content">
                                    <ul className="categories__list">
                                       <li><a href="#" className="category__link">Outfit Ideas <span>(18)</span></a></li>
                                       <li><a href="#" className="category__link">Trends & News<span>(18)</span></a></li>
                                       <li><a href="#" className="category__link">Care & Tips<span>(18)</span></a></li>
                                       <li><a href="#" className="category__link">Shopping Guides<span>(18)</span></a></li>
                                    </ul>
                                 </div>
                           </div>

                        </aside>
                     </div>

                     <section className="articles__list">
                                    <h2 className="section__title">Artikel Terbaru</h2>
                                    <div className="list__container">
                                       <article className="list__item">
                                          <div className="list__meta">
                                                <span className="category">Tutorial</span>
                                                <span className="date">10 Januari 2025</span>
                                          </div>
                                          <h4 className="list__title">
                                                <Link href={route('article')}>Building Progressive Web Apps dengan Service Workers</Link>
                                          </h4>
                                          <p className="list__summary">
                                                Tutorial step-by-step membangun PWA yang responsif dan dapat bekerja offline menggunakan Service Workers dan Cache API.
                                          </p>
                                       </article>

                                       <article className="list__item">
                                          <div className="list__meta">
                                                <span className="category">AI</span>
                                                <span className="date">9 Januari 2025</span>
                                          </div>
                                          <h4 className="list__title">
                                                <Link href={route('article')}>Machine Learning untuk Pemula: Algoritma Supervised Learning</Link>
                                          </h4>
                                          <p className="list__summary">
                                                Pengenalan konsep dasar machine learning dengan fokus pada algoritma supervised learning dan implementasi praktisnya.
                                          </p>
                                       </article>

                                       <article className="list__item">
                                          <div className="list__meta">
                                                <span className="category">DevOps</span>
                                                <span className="date">8 Januari 2025</span>
                                          </div>
                                          <h4 className="list__title">
                                                <Link href={route('article')}>Docker dan Kubernetes: Containerization untuk Production</Link>
                                          </h4>
                                          <p className="list__summary">
                                                Panduan praktis menggunakan Docker dan Kubernetes untuk deployment aplikasi yang scalable dan reliable.
                                          </p>
                                       </article>

                                       <article className="list__item">
                                          <div className="list__meta">
                                                <span className="category">Mobile</span>
                                                <span className="date">7 Januari 2025</span>
                                          </div>
                                          <h4 className="list__title">
                                                <Link href={route('article')}>Flutter vs React Native: Perbandingan Komprehensif 2025</Link>
                                          </h4>
                                          <p className="list__summary">
                                                Analisis mendalam perbandingan Flutter dan React Native dari segi performa, ecosystem, dan developer experience.
                                          </p>
                                       </article>
                                    </div>
                     </section>
                     
                  </div>     
               </CSSTransition>

         </section>

         {/* swiper */}
         <section className='blog-slide'>
            {/* header swiper + button */}
            <div className='slide-header'>
               <p className='more'>More Articles</p>
               <div className="swiper-btn">
                  <button className="custom-prev">
                  <img src={prevBtn} className='' />
                  </button>
                  <button className="custom-next">
                  <img src={nextBtn} className='' />
                  </button>
               </div>
            </div>

            {/* swiper content */}
             <Swiper
               modules={[Navigation, Pagination]}
               navigation = {{
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
                        <img src="https://i.pinimg.com/736x/93/f1/78/93f1789c4354095ab60087128ce9429a.jpg" alt="" />
                     </div>
                     <div className="article__content">
                        <div className="article__meta">
                           <span className="category">Outfit Ideas</span>
                           <span className="date">14 Januari 2025</span>
                        </div>
                        <h3 className="article__title">
                           Monochrome Streetwear 
                        </h3>
                        <p className="article__excerpt">
                        Warna pastel kembali jadi sorotan utama di Fashion Week tahun ini. Desainer mengombinasikan nuansa lembut dengan potongan tegas. Hasilnya tampak elegan.
                        </p>
                        <Link href={route('article')} className="article__link">Baca Artikel</Link>
                     </div>
                  </article>
               </SwiperSlide>

               <SwiperSlide>
                  <article className="article__card">
                     <div className="article__image">
                        <img src="https://i.pinimg.com/1200x/36/8a/ad/368aad0f42887bef054959371fabb35c.jpg" alt="" />
                     </div>
                     <div className="article__content">
                        <div className="article__meta">
                           <span className="category">Trends</span>
                           <span className="date">15 Januari 2025</span>
                        </div>
                        <h3 className="article__title">
                           Pastel Runway Trends
                        </h3>
                        <p className="article__excerpt">
                           Warna pastel kembali jadi sorotan utama di Fashion Week tahun ini. Desainer mengombinasikan nuansa lembut dengan potongan tegas. Hasilnya tampak elegan.
                        </p>
                        <Link href={route('article')} className="article__link">Baca Artikel</Link>
                     </div>
                  </article>
               </SwiperSlide>

               <SwiperSlide>
                  <article className="article__card">
                     <div className="article__image">
                        <img src="https://i.pinimg.com/1200x/5f/9b/89/5f9b89ad50a8714a9dfc1b38654571c7.jpg" alt="" />
                     </div>
                     <div className="article__content">
                        <div className="article__meta">
                           <span className="category">Care & Tips</span>
                           <span className="date">16 Januari 2025</span>
                        </div>
                        <h3 className="article__title">
                           Denim Jacket Care
                        </h3>
                        <p className="article__excerpt">
                           Warna pastel kembali jadi sorotan utama di Fashion Week tahun ini. Desainer mengombinasikan nuansa lembut dengan potongan tegas. Hasilnya tampak elegan.
                        </p>
                        <Link href={route('article')} className="article__link">Baca Artikel</Link>
                     </div>
                  </article>
               </SwiperSlide>

               <SwiperSlide>
                  <article className="article__card">
                     <div className="article__image">
                        <img src="https://i.pinimg.com/1200x/3d/76/b7/3d76b7e143e27dc657be8d6bccfc9a04.jpg" alt="" />
                     </div>
                     <div className="article__content">
                        <div className="article__meta">
                           <span className="category">Shopping</span>
                           <span className="date">17 Januari 2025</span>
                        </div>
                        <h3 className="article__title">
                           Choosing Daily Sneakers
                        </h3>
                        <p className="article__excerpt">
                           Warna pastel kembali jadi sorotan utama di Fashion Week tahun ini. Desainer mengombinasikan nuansa lembut dengan potongan tegas. Hasilnya tampak elegan.
                        </p>
                        <Link href={route('article')} className="article__link">Baca Artikel</Link>
                     </div>
                  </article>
               </SwiperSlide>

               <SwiperSlide>
                  <article className="article__card">
                     <div className="article__image">
                        <img src="https://i.pinimg.com/736x/fe/6e/da/fe6eda8f140a2dbc6a9bcdc74ff2d357.jpg" alt="" />
                     </div>
                     <div className="article__content">
                        <div className="article__meta">
                           <span className="category">Outfit Ideas</span>
                           <span className="date">18 Januari 2025</span>
                        </div>
                        <h3 className="article__title">
                           Casual Weekend Look
                        </h3>
                        <p className="article__excerpt">
                           Warna pastel kembali jadi sorotan utama di Fashion Week tahun ini. Desainer mengombinasikan nuansa lembut dengan potongan tegas. Hasilnya tampak elegan.
                        </p>
                        <Link href={route('article')} className="article__link">Baca Artikel</Link>
                     </div>
                  </article>
               </SwiperSlide>
            </div>
            </Swiper>
         </section>

      </>
    );
}


export default Topic;