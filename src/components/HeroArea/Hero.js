import "./Hero.css";


const HeroArea = () => {
  return (
    <div className="hero">
      <img
        className="hero__img"
        style={{ maxHeight: "440px", width: "100%" }}
        src="/images/hero.jpg"
        alt=""
      />
      <div className="hero__content__wrapper">
        <div className="container hero__content">
          <h2>Computer Science</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};
export default HeroArea;
