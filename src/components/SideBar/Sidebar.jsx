import React from "react";
import "../SideBar/sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
		<>
			{" "}
			<div className="modal">
				<div class="sidebar">
					<ul>
						<li>
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
