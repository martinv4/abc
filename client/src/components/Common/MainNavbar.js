import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Button from "../Common/Button/Button";


const MainNavbar = (props) => {
	var user = useContext(AuthContext);

	const highlightNavbarIcon = () => {
		let path = window.location.pathname;
		if (path === "/all" || path === "/contacts" || path === "/create-group" || path === "/add-contact") {
			document.getElementById("link" + window.location.pathname).classList.add("blue-shadow");
		}
	};

	useEffect(() => {
		highlightNavbarIcon();
	});

	return (
		<nav className="row">
			<ul id="link-list" className="remove-list-style list-style2">
				<li id={"link/all"} className="absolute-center Button">
					<Link to="/all">
					<Button btnStyle="Button2">Messages</Button>
					</Link>
				</li>
				<li id={"link/contacts"} className="absolute-center Button">
					<Link to="/contacts">
					<Button btnStyle="Button2">Contacts</Button>
					</Link>
				</li>
				<li id={"link/add-contact"} className="absolute-center Button">
					<Link to="/add-contact">
					<Button btnStyle="Button2">Add contacts</Button>
					</Link>
				</li>
				{/*}
				<li id={"link/add-contact"} className="absolute-center Button">
					<button onClick={this.changeColor}>Dark mode</button>
				</li>
				*/}
			</ul>
		</nav>
	);
};

export default MainNavbar;
