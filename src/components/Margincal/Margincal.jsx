import React, { PureComponent, useState } from "react";
import "./Margincal.css";
import pic3 from "../../Assets/pic3.png";
import line from "../../Assets/line.png";
import Ellipse1 from "../../Assets/Ellipse1.png";
import Ellipse2 from "../../Assets/Ellipse2.png";

export const Margincal = () => {
	const list = [
		{
			id: 1,
			name: "NSE-CASH",
		},
		{
			id: 2,
			name: "MTF",
		},
		{
			id: 3,
			name: "NSE-F&O",
		},
		{
			id: 4,
			name: "MCX",
		},
		{
			id: 5,
			name: "MTF vs FUT",
		},
	];
	const list1 = [
		{
			HERMACATO: {
				id: 1,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 2,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 3,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 4,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 5,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 6,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 7,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
	];
	const list2 = [
		{
			ALAN: {
				id: 1,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 2,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 3,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 4,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 5,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 6,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 7,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
	];
	const list3 = [
		{
			TechJain: {
				id: 1,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 2,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 3,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 4,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 5,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 6,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 7,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
	];
	const list4 = [
		{
			Team: {
				id: 1,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 2,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 3,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 4,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 5,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 6,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 7,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
	];
	const list5 = [
		{
			Lamborgini: {
				id: 1,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 2,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 3,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 4,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 5,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 6,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
		{
			HERMACATO: {
				id: 7,
				series: "eq",
				intrady_margin: "5x",
				delivery_margin: "3.5x",
			},
		},
	];
	const [current, setCurrent] = useState(list1);
	console.log(Object.values(list1[0])[0].series);
	const changeTable = (id) => {
		if (id == 1) {
			setCurrent(list1);
		} else if (id == 2) {
			setCurrent(list2);
		} else if (id == 3) {
			setCurrent(list3);
		} else if (id == 4) {
			setCurrent(list4);
		} else if (id == 5) {
			setCurrent(list5);
		}
	};
	console.log(Object.keys(current[0]));
	return (
		<div className="Margincal">
			<div className="card1">
				<div className="text">
					<h3>Margin Calculator</h3>

					<p>Regulatory statements & Complaint Redressal Details</p>
				</div>

				<div className="photo">
					<img src={pic3} alt="" />
				</div>
			</div>

			<div className="card2">
				<div className="card">
					{list.map((item) => (
						<div
							className="crd"
							key={item.id}
							onClick={() => changeTable(item.id)}
						>
							<h4>{item.name}</h4>
						</div>
					))}
				</div>

				<table>
					<tr>
						<th>Symbol</th>
						<th>Series</th>
						<th>Intrady Margin(Times)</th>
						<th>Delivery Margin(Times)</th>
					</tr>
					{current.map((item) => (
						<tr key={item.id}>
							<td>{Object.keys(item)}</td>
							<td>{Object.values(item)[0].series}</td>
							<td>{Object.values(item)[0].intrady_margin}</td>
							<td>{Object.values(item)[0].delivery_margin}</td>
						</tr>
					))}
				</table>
			</div>
			<br />
			<br />

			<BottomSection />
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

export default Margincal;
