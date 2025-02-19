import "./NavBar.scss";
import logo from "../../assets/omni-logo.png";

const NavBar = () => {
	return <div className="navbar">
		<img src={logo} alt="Omni logo" className="navbar-logo" />
		<nav>
			<a href="#">Hiring can be stressful</a>
			<a href="#">Our Process</a>
			<a href="#">Why Choose Us</a>
			<a href="#">Contact Us</a>
		</nav>
	</div>;
};

export default NavBar;
