export default function Home() {
  let currentYear: number = new Date().getFullYear();

  return (
    <main className="home__wrapper">
      <div className="upper__wrapper">
        <div className="categories__wrapper">
          <div className="placeholder__block"></div>
          <div className="placeholder__block"></div>
          <div className="placeholder__block"></div>
          <div className="placeholder__block"></div>
          <div className="placeholder__block"></div>
          <div className="placeholder__block"></div>
          <div className="placeholder__block"></div>
          <div className="placeholder__block"></div>
          <div className="placeholder__block"></div>
        </div>
        <div className="banner__wrapper">
          <div className="placeholder__block"></div>
        </div>
      </div>
      <div className="lower__wrapper">
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
          <div className="product__tile placeholder__block"></div>
        </div>
    </main>
  )
}