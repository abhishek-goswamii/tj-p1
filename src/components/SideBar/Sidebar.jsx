import React from "react";
import "../SideBar/sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = ({ openModal, setOpenModal }) => {
	return (
		<>
			{" "}
			<div className="modal">
				<div class="sidebar">
					<ul>
						<li>
							<Link to="/advisory" onClick={() => setOpenModal(false)}>
								<a>Advisory</a>
							</Link>
							<Link to="/privacy-policy" onClick={() => setOpenModal(false)}>
								<a>Privacy Policy</a>
							</Link>
							<Link to="/downloads" onClick={() => setOpenModal(false)}>
								<a>Downloads</a>
							</Link>
							<Link to="/partner-with-us" onClick={() => setOpenModal(false)}>
								<a>Partner With Us</a>
							</Link>
							<Link to="/services" onClick={() => setOpenModal(false)}>
								<a>Services</a>
							</Link>
							<Link to="/trading" onClick={() => setOpenModal(false)}>
								<a>Trading</a>
							</Link>
							<Link to="/payments" onClick={() => setOpenModal(false)}>
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
