import React, { useState } from "react";
import "../PrivacyyPolicy/privacypolicy.css";

export const PrivacyPolicy = () => {
	return (
		<div className="privacy-container">
			<TopSection />
			<MidSection />
			<BottomSection />
		</div>
	);
};
const TopSection = () => {
	return (
		<div className="row-container">
			<div className="leftside-content">
				<div>
					<h1>Privacy Policy</h1>
					<h2>
						A statement about Kalpatru policy on content displayed in the
						website and users’ personal details
					</h2>
				</div>

				<h3>Attention Investors!</h3>
			</div>
			<img src="./images/Safe-cuate 1.svg" className="main-img" />
		</div>
	);
};
const MidSection = () => {
	const privacyList = [
		{
			id: 1,
			paragraph:
				"We, at Kalpatarumulti.com, acknowledge and accept that the personal details that you impart to us, is to be kept in strict confidentiality and to use the information only in the manner which would be beneficial to our customers. We consider our relationship with you as invaluable and strive to respect and safeguard your right to privacy.",
			title: "PRIVACY POLICY STATEMENT",
		},
		{
			id: 2,
			paragraph:
				"We, at Kalpatarumulti.com, acknowledge and accept that the personal details that you impart to us, is to be kept in strict confidentiality and to use the information only in the manner which would be beneficial to our customers. We consider our relationship with you as invaluable and strive to respect and safeguard your right to privacy.",
			title: "IMPART YOUR PERSONAL INFORMATION",
		},
		{
			id: 3,
			paragraph:
				"We, at Kalpatarumulti.com, acknowledge and accept that the personal details that you impart to us, is to be kept in strict confidentiality and to use the information only in the manner which would be beneficial to our customers. We consider our relationship with you as invaluable and strive to respect and safeguard your right to privacy.",
			title: "KALPATARU MULTIPLIER LTD",
		},
		{
			id: 4,
			paragraph:
				"We, at Kalpatarumulti.com, acknowledge and accept that the personal details that you impart to us, is to be kept in strict confidentiality and to use the information only in the manner which would be beneficial to our customers. We consider our relationship with you as invaluable and strive to respect and safeguard your right to privacy.",
			title: "INFORMATION SHARING AND DISCLOSURE",
		},
	];
	const [modalOpen, setModalOpen] = useState(false);
	const [modalToOpen, setModalToOpen] = useState(0);
	const openModal = (id) => {
		setModalToOpen(0);
		console.log(id);
		setModalOpen(!modalOpen);
		setModalToOpen(id);
	};
	return (
		<div className="column-contiainer">
			{privacyList.map((item) => (
				<>
					<div className="row-card" key={item.id}>
						<h1>{item.title}</h1>
						{modalOpen === true && modalToOpen === item.id ? (
							<img
								src="./images/Vector (3).svg"
								onClick={(e) => openModal(item.id)}
							/>
						) : (
							<img
								src="./images/Vector.svg"
								onClick={(e) => openModal(item.id)}
							/>
						)}
					</div>
					{modalOpen == true && modalToOpen === item.id && (
						<div className="column-container contact-box openmodal op">
							<img src="./images/Ellipse 2.svg" alt="" />
							<p>{item.paragraph}</p>

							<img src="./images/Ellipse 2.svg" alt="" />
						</div>
					)}
				</>
			))}
		</div>
	);
};
const BottomSection = () => {
	return (
		<div className="column-container contact-box pp">
			<img src="./images/Ellipse 2.svg" alt="" />
			<h1>Didn’t Find what you were Looking For?</h1>

			<button className="contact-button">Contact Us</button>
			<img src="./images/Ellipse 2.svg" alt="" />
		</div>
	);
};
export default PrivacyPolicy;
