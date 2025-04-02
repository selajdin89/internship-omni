import "./Header.scss";
import headerimage from "../../assets/header-img.png";

const Header = () => {
	return <div className="header">
		<img src={headerimage} alt="header logo" className="headerImg"/>

		<h1 className="headerHeading">
			Are You <br/>
			Struggling to <br/>
			Hire Good Talent <br/>
			Within Your <br/>
			Budget?
		</h1>

		<button className="headerBtn">
			FIND TOP TALENT NOW
		</button>
	</div>;
};

export default Header;
