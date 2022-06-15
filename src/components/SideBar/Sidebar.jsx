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
							<Link to="/payments">
								<a>Payments</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
export default Sidebar;
