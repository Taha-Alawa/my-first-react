function App() {
  return (
    <>
      {/*header section*/}
      <header className="hero">
        <div className="container spacing">
          <h1 className="primary-title">Amazing shoes at an amaizng price</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
            perspiciatis facilis beatae laudantium quidem enim sit sequi!
          </p>
          <a href="#" className="btn">
            See what we have
          </a>
        </div>
      </header>
      {/*main section*/}
      <main>
        <section className="featured">
          <div className="container">
            <h2 className="section-title">Featured products</h2>
            <div className="split">
              <a href="#" className="featured__item">
                <img src="/shoes/shoe-4.png" alt="" className="featured__img" />
                <p className="featured__details">
                  <span className="price">$99</span>shoe name
                </p>
              </a>
              <a href="#" className="featured__item">
                <img
                  src="/shoes/shoe-5.png"
                  alt=""
                  className="featured__img2"
                />
                <p className="featured__details">
                  <span className="price">$99</span>shoe name
                </p>
              </a>
              <a href="#" className="featured__item">
                <img src="/shoes/shoe-6.png" alt="" className="featured__img" />
                <p className="featured__details">
                  <span className="price">$99</span>shoe name
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className="our-products">
          <div className="container">
            <h2 className="section-title">our-products</h2>
            <article className="product shoe-red spacing">
              <img src="/shoes/shoe-1.png" alt="" className="product__image" />
              <h3 className="product__title">A really nice shoe</h3>
              <p className="product__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quam perspiciatis facilis beatae laudantium quidem enim sit
                sequi!
              </p>
              <a href="" className="btn">
                Buy now
              </a>
            </article>
            <article className="product shoe-white shoe-left spacing">
              <img src="/shoes/shoe-2.png" alt="" className="product__image" />
              <h3 className="product__title">A really nice shoe</h3>
              <p className="product__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quam perspiciatis facilis beatae laudantium quidem enim sit
                sequi!
              </p>
              <a href="" className="btn">
                Buy now
              </a>
            </article>
            <article className="product  shoe-blue spacing">
              <img src="/shoes/shoe-3.png" alt="" className="product__image" />
              <h3 className="product__title">A really nice shoe</h3>
              <p className="product__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quam perspiciatis facilis beatae laudantium quidem enim sit
                sequi!
              </p>
              <a href="" className="btn">
                Buy now
              </a>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
