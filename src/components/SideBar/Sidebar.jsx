import React from "react";
import "../SideBar/sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = ({ openModal, setOpenModal }) => {
	const doTask = (e) => {
		e.preventDefault();
		console.log("hello");
		setOpenModal(!openModal);
	};
	return (
		<>
			{" "}
			<div className="modal" onClick={(e) => setOpenModal(false)}>
				<div class="sidebar">
					<ul>
						<li onClick={(e) => doTask(e)}>
							<Link to="/advisory">
								<a>Advisory</a>
							</Link>
							<Link to="/privacy-policy">
								<a>Privacy Policy</a>
							</Link>
							<Link to="/downloads">
								<a>Downloads</a>
							</Link>
							<Link to="/partner-with-us">
								<a>Partner With Us</a>
							</Link>
							<Link to="/services">
								<a>Services</a>
							</Link>
							<Link to="/trading">
								<a>Trading</a>
							</Link>
							<Link to="/blogs">
								<a>Blogs</a>
							</Link>
							<Link to="/depository">
								<a>Depository</a>
							</Link>
							<Link to="/about-us">
								<a>About Us</a>
							</Link>
							<Link to="/ipo">
								<a>IPO</a>
							</Link>
							<Link to="/margincal">
								<a>Margin Calculator</a>
							</Link>
							<Link to="/investor">
								<a>Investor</a>
							</Link>
							<Link to="/sgb">
								<a>SGB</a>
							</Link>
							<Link to="/apply-ipo">
								<a>Apply IPO</a>
							</Link>
							<Link to="/contact-us">
								<a>Contact Us</a>
							</Link>
							<Link to="/pan-card">
								<a>Pan Card</a>
							</Link>
							<Link to="/general-insurence">
								<a>General Insurence</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
export default Sidebar;
