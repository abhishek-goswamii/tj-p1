import React, { PureComponent } from "react";
import "./IPO.css";
import IPO1 from "../../Assets/IPO1.png";
import IPO2 from "../../Assets/IPO2.png";
import { PensionScheme } from "../services/Services";

export class IPO extends PureComponent {
	render() {
		return (
			<div className="IPO">
				<div className="card1">
					<div className="text">
						<h3>IPO</h3>

						<p>
							Buy cheap, earn big. Discover IPOs with the highest growth
							potential early and invest now through Astha Trade to earn big in
							the future
						</p>

						<button>Apply IPO</button>
					</div>

					<div className="photo">
						<img src={IPO1} alt="" />
					</div>
				</div>
				<PensionSchemee />
				<div className="card3">
					<h2>IPO Listing</h2>
					<table>
						<tr>
							<th>IPO Name</th>
							<th>Exchange</th>
							<th>Issue Price</th>
							<th>Issue Size</th>
							<th>Open Date</th>
							<th>Close Date</th>
						</tr>
						<tr>
							<td>Navi Finserv Limited</td>
							<td>NSE</td>
							<td>₹1,000.00 - ₹1,000.00</td>
							<td>₹3,000,000.00</td>
							<td>23-05-2022</td>
							<td>10-06-2022</td>
						</tr>
						<tr>
							<td>Aether Industries Limited</td>
							<td>NSE</td>
							<td>₹610.00 - ₹642.00</td>
							<td>₹9,356,193.00</td>
							<td>23-05-2022</td>
							<td>26-05-2022</td>
						</tr>
						<tr>
							<td>Globesecure Technologies Limited</td>
							<td>NSE</td>
							<td>₹29.00 - ₹29.00</td>
							<td>₹3,492,000.00</td>
							<td>23-05-2022</td>
							<td>26-05-2022</td>
						</tr>
						<tr>
							<td>Rachana Infrastructure Limited</td>
							<td>NSE</td>
							<td>₹138.00 - ₹138.00</td>
							<td>₹5,650,000.00</td>
							<td>23-05-2022</td>
							<td>26-05-2022</td>
						</tr>
					</table>
				</div>

				<br />
				<br />
			</div>
		);
	}
}
export const PensionSchemee = () => {
	return (
		<div className="pension-container">
			<div className="pension-content">
				<img src="./images/Rectangle 1148.svg" />
				<div className="pension-right">
					<h1>National Pension Scheme</h1>
					<p>
						It was introduced by the government in 2004. Initially, it was an
						exclusive scheme available only to government employees. However, in
						2009, NPS in India was made available to employees beyond the public
						sector. It allows you to invest in the scheme throughout your
						employment.
					</p>
					<button>See More</button>
				</div>
			</div>
		</div>
	);
};

export default IPO;
