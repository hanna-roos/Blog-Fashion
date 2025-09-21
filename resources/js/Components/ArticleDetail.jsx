import React from 'react';
import  "../../css/article.css";
import { Link } from "@inertiajs/react";


export default function ArticleDetail () {
  return (
    <>

    <div>

      <section className="hero">
        <div className="containerrrr">
          <div className="hero-contentt">
            <div className="article-meta">
              <span className="categoryy">Fashion</span>
              <span className="datee">15 Januari 2025</span>
              <span className="authorr">Oleh Sarah Mitchell</span>
            </div>
            <h1 className="article-title">Tren Fashion 2025: Perpaduan Gaya, Teknologi, dan Keberlanjutan</h1>
            <div className="article-image">
              <img src="https://portalterkini.id/wp-content/uploads/2025/08/ChatGPT-Image-Aug-29-2025-01_06_51-PM.png" />
            </div>
          </div>
        </div>
      </section>

      <main className="main">
        <div className="containerrrr">
          <div className="content-grid">
            {/* Article Content */}
            <article className="article-content">
              <div className="content-section fade-in">
                <p className="lead-paragraph">
                  Industri fashion terus bergerak dinamis, mengikuti perubahan gaya hidup dan kebutuhan konsumen. Tahun 2025 membawa angin segar dalam dunia mode dengan tren yang tidak hanya berfokus pada estetika, tetapi juga keberlanjutan dan teknologi. Generasi muda, khususnya Gen Z, menjadi pendorong utama transformasi ini dengan tuntutan fashion yang ramah lingkungan, personal, dan tetap stylish.
                </p>
                <p>
                  Dari pencetakan 3D hingga kecerdasan buatan, teknologi mengubah setiap aspek produksi fashion. Inovasi-inovasi ini tidak hanya menjanjikan pengurangan limbah tetapi juga menciptakan kemungkinan-kemungkinan baru dalam desain dan manufaktur.
                </p>
                <h2>Tren Fashion Terkini</h2>
                <p>
                  Tahun ini, palet warna pastel tetap dominan, dipadukan dengan aksen bold seperti merah marun dan biru elektrik. Siluet longgar dan nyaman semakin populer, mencerminkan kebutuhan konsumen akan pakaian fungsional sekaligus fashionable. Aksesori minimalis dengan sentuhan futuristik menjadi pelengkap gaya sehari-hari.
                </p>
                <div className="article-image fade-in">
                  <img src="https://www.thestatesman.com/wp-content/uploads/2022/02/Create-Your-Own-Capsule-Wardrobe-photo-google-1.jpg" />
                </div>
                <blockquote className="fade-in">
                  "Fashion bukan hanya tentang apa yang kita kenakan, tetapi juga tentang nilai yang kita bawa ke masa depan. Keberlanjutan kini menjadi bagian dari gaya hidup."
                  <cite>— Elena Rodriguez, Sustainable Fashion Consultant</cite>
                </blockquote>
                <h2>Inovasi dan Teknologi dalam Fashion</h2>
                <p>
                  Teknologi digital kini menjadi bagian dari proses desain hingga belanja. Desainer menggunakan software 3D untuk menciptakan prototipe tanpa limbah kain. Konsumen dapat mencoba pakaian secara virtual melalui aplikasi augmented reality, sehingga belanja online terasa lebih interaktif dan personal.
                </p>
                <h3>Teknologi Kunci yang Mendorong Perubahan</h3>
                <ul>
                  <li><strong>3D Knitting:</strong> Menciptakan pakaian seamless tanpa limbah</li>
                  <li><strong>Blockchain:</strong> Memastikan transparansi dan keaslian rantai pasokan</li>
                  <li><strong>AI-Powered Demand Forecasting:</strong> Mengurangi overproduksi hingga 20%</li>
                  <li><strong>Bio-Fabrication:</strong> Mengembangkan material baru dari sumber organik</li>
                </ul>
                <div className="article-image fade-in">
                  <img src="https://iada.co.in/wp-content/uploads/2024/03/cad-in-fashion-design-ai.jpg" />
                </div>
                <h2>Keberlanjutan dan Etika Fashion</h2>
                <p>
                 Merek besar mulai beralih ke material ramah lingkungan seperti katun organik, serat bambu, dan kulit vegan. Konsep circular fashion semakin diterima, di mana pakaian didaur ulang atau disewakan kembali untuk memperpanjang umur pakai. Konsumen juga semakin peduli pada transparansi rantai pasokan, menuntut brand lebih jujur soal produksi mereka.
                </p>
                <p>
                  Fashion 2025 adalah tentang keseimbangan: gaya yang tetap segar, teknologi yang memudahkan, dan keberlanjutan yang menyelamatkan bumi. Konsumen kini punya kekuatan lebih besar untuk memilih brand yang sejalan dengan nilai mereka. Dengan tren ini, masa depan fashion tampak lebih inklusif, inovatif, dan bertanggung jawab.
                </p>
              </div>
              {/* Share Buttons */}
              <div className="share-section fade-in">
                <h3>Bagikan Artikel Ini</h3>
                <div className="share-buttons">
                  <button className="share-btn facebook" data-platform="facebook">
                    <span>Bagikan di Facebook</span>
                  </button>
                  <button className="share-btn twitter" data-platform="twitter">
                    <span>Bagikan di Twitter</span>
                  </button>
                  <button className="share-btn copy" data-platform="copy">
                    <span>Salin Link</span>
                  </button>
                </div>
              </div>
              {/* Comments Section */}
              <div className="comments-section fade-in">
                <h3>Komentar</h3>
                <form className="comment-form" id="comment-form">
                  <div className="form-group">
                    <input type="text" id="comment-name" placeholder="Nama Anda" required />
                  </div>
                  <div className="form-group">
                    <textarea id="comment-text" placeholder="Bagikan pemikiran Anda..." rows={4} required defaultValue={""} />
                  </div>
                  <button type="submit" className="submit-btn">Kirim Komentar</button>
                </form>
                <div className="comments-list" id="comments-list">
                  {/* Comments will be appended here */}
                </div>
              </div>
            </article>
            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-content fade-in">
                <h3>Artikel Populer</h3>
                <div className="related-articles">
                  <article className="related-article">
                    <div className="related-image">
                      <img src="https://i.pinimg.com/1200x/19/65/26/1965269cbe7a32ef280ffdd00de23df2.jpg" className='' alt='' />
                     
                    </div>
                    <div className="related-content">
                      <h4>Minimalist Beige Outfit</h4>
                      <p className="related-meta">12 Januari 2025</p>
                    </div>
                  </article>
                  <article className="related-article">
                    <div className="related-image">
                      <img src="https://i.pinimg.com/736x/2f/90/53/2f9053fefe132086bc22c9fc8d6c2e37.jpg" className='' alt='' />
                     
                    </div>
                    <div className="related-content">
                      <h4>Romantic Lace Dress</h4>
                      <p className="related-meta">10 Januari 2025</p>
                    </div>
                  </article>
                  <article className="related-article">
                    <div className="related-image">
                      <img src="https://i.pinimg.com/736x/20/14/4c/20144c31ba7a91235a03aca091549c4b.jpg" className='' alt='' />
                     
                    </div>
                    <div className="related-content">
                      <h4>Office Casual Look</h4>
                      <p className="related-meta">8 Januari 2025</p>
                    </div>
                  </article>
                  <article className="related-article">
                    <div className="related-image">
                      <img src="https://i.pinimg.com/736x/22/55/e9/2255e98ff283b45ba0b696d248c1ef67.jpg" className='' alt='' />
                      
                    </div>
                    <div className="related-content">
                      <h4>Vintage Aesthetic</h4>
                      <p className="related-meta">5 Januari 2025</p>
                    </div>
                  </article>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

    </div>


    </>
  );
}


