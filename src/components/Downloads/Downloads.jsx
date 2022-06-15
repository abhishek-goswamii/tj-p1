import React from "react";
import "../Downloads/downloads.css";

export const Downloads = () => {
	return (
		<div className="column-container">
			<FirstSection />
			<LastSection />
		</div>
	);
};
const FirstSection = () => {
	return (
		<div className="row-container">
			<div className="leftside-content">
				<div>
					<h1>Downloads</h1>
					<h2>
						All the forms & download ables you will need for trading and
						investing
					</h2>
				</div>
			</div>
			<img src="./images/Firmware-rafiki 1.svg" className="main-img" />
		</div>
	);
};
const LastSection = () => {
	return (
		<div className="table">
			<div>
				<p>Heading</p>
				<p>Download</p>
			</div>
			<div>
				<p>ACCOUNT CLOSURE REQUEST FORM</p>
				<img src="./images/Vector (1).svg" />
			</div>
			<div>
				<p>ACCOUNT CLOSURE REQUEST FORM</p>
				<img src="./images/Vector (1).svg" />
			</div>
			<div>
				<p>ACCOUNT CLOSURE REQUEST FORM</p>
				<img src="./images/Vector (1).svg" />
			</div>
			<div>
				<p>ACCOUNT CLOSURE REQUEST FORM</p>
				<img src="./images/Vector (1).svg" />
			</div>
		</div>
	);
};
export default Downloads;
