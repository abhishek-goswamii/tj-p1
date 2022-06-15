import React, { useState, useEffect } from "react";
import "../PartnerWithUs/partnerwithus.css";

export const PartnerWithUs = () => {
	const isOverflown = ({
		clientWidth,
		clientHeight,
		scrollWidth,
		scrollHeight,
	}) => {
		return scrollHeight > clientHeight || scrollWidth > clientWidth;
	};

	return (
		<div className="partner-container">
			<FirstSection />
			<h1>Benefit of our association</h1>
			<MidSection />
			<h1>Drop Your Details</h1>
			<DetailSection />
			<h1>Testimonials</h1>
			<h2>Our Success Story</h2>
			<Testimonial />
		</div>
	);
};
const FirstSection = () => {
	return (
		<div className="row-container">
			<div className="leftside-content">
				<div>
					<h1>Partner with us</h1>
					<h2>our power and entrepreneurial spirit will make it profitable</h2>
				</div>
			</div>
			<img src="./images/Bitcoin P2P-pana 1.svg" className="main-img" />
		</div>
	);
};
const MidSection = () => {
	return (
		<div className="mid-container">
			<p>
				KALPATARU is a time tested, tried and trusted Share broker, Investment
				Advisor and D.P. We cover the complete Financial Services spectrum –
				Share broking, Derivative F & O in Equities, Commodity, Currency, Index
				and Investment Advisory services. We are also, as you know DP, providing
				depository services, distribution of financial products like Mutual
				Funds, Portfolio Management Advisory Services and IPO in which we have
				more than half market share of the Primary Market. If it is not
				boasting, Kalpataru is well equipped and can handle all the wealth
				creation and wealth management needs of the investing public
			</p>
			<p>
				KALPATARU is a time tested, tried and trusted Share broker, Investment
				Advisor and D.P. We cover the complete Financial Services spectrum –
				Share broking, Derivative F & O in Equities, Commodity, Currency, Index
				and Investment Advisory services. We are also, as you know DP, providing
				depository services, distribution of financial products like Mutual
				Funds, Portfolio Management Advisory Services and IPO in which we have
				more than half market share of the Primary Market. If it is not
				boasting, Kalpataru is well equipped and can handle all the wealth
				creation and wealth management needs of the investing public
			</p>
		</div>
	);
};
const DetailSection = () => {
	return (
		<div className="detail-section">
			<img src="./images/Get in touch-pana 1.svg" />
			<form>
				<div>
					<label>Email</label>
					<input placeholder="Enter email" />
				</div>
				<div>
					<label>Email</label>
					<input placeholder="Enter email" />
				</div>
				<div>
					<label>Email</label>
					<input placeholder="Enter email" />
				</div>
				<div>
					<label>Email</label>
					<input placeholder="Enter email" />
				</div>
				<button className="form-button">Submit</button>
			</form>
		</div>
	);
};
const Testimonial = () => {
	const list = [
		{
			id: 1,
			image: "images/Ellipse 9.svg",
			content:
				"Excellent Overall . They are very nicethe staff are very accomadating and Great experience, glad i came here",
			title: "Software Developer",
			name: "Alan Neupane",
		},
		{
			id: 2,
			image: "images/Ellipse 12.svg",
			content: "This is second",
			title: "Software Developer",
			name: "Alan Neupane",
		},
		{
			id: 3,
			image: "./images/Ellipse 13.svg",
			content: "this is third",
			title: "Software Developer",
			name: "Alan Neupane",
		},
		{
			id: 4,
			image: "images/Ellipse 10 (1).svg",
			content: "This is fourth",
			title: "Software Developer",
			name: "Alan Neupane",
		},
		{
			id: 5,
			image: "images/Ellipse 9.svg",
			content: "this is fifth",
			title: "Software Developer",
			name: "Alan Neupane",
		},
	];
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log(list.length);
			if (current < list.length - 1) {
				setCurrent(current + 1);
			} else {
				clearInterval();
				setCurrent(0);
			}
		}, 2000);
		return () => clearInterval(interval);
	}, [current]);

	return (
		<div className="testimonial-container">
			<div className="testimonial-card">
				<p>{list[current].content}</p>
			</div>
			<div className="people">
				{list.map((item) => (
					<div className="people-info">
						<img
							key={item.id}
							src={item.image}
							className={item.id === list[current].id && "big"}
						/>
						{item.id == current + 1 && (
							<div className="info">
								<h1>{item.name}</h1>
								<h2>{item.title}</h2>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
export default PartnerWithUs;
