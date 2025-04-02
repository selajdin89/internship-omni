import "./Hero.scss";
import heroimage from "../../assets/hero-img.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="heroImg" src={heroimage} alt="hero section image" />

      <div className="heroContent">
        <p className="heroParagraph">
          Are you <strong>frustrated</strong> by the overwhelming challenges of{" "}
          <strong>recruiting work-from-home employees?</strong> Do budget constraints, expensive labor
          markets, and high recruitment costs leave you <strong>feeling stuck?</strong> Are you tired
          of the endless struggle to find qualified candidates, <strong>worried</strong> about the
          uncertainty of hiring offshore resources, or <strong>stressed</strong> by inflexible hiring
          solutions and complicated onboarding processes?
        </p>

        <p className="heroParagraph2">- Stress no more</p>

        <h1 className="heroHeading">
          We make hiring top talent within your budget easy!
        </h1>

        <button className="heroBtn">TALK TO ONE OUR HIRING SPECIALIST</button>
      </div>
    </div>
  );
};

export default Hero;
