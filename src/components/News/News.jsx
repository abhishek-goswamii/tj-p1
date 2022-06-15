import React, { PureComponent, useState, useEffect } from "react";
import "./News.css";
import Announcement from "../../Assets/Announcement.png";
import IPO from "../../Assets/IPO.png";

export const News = () => {
	useEffect(() => {
		document.querySelectorAll("*").forEach((el) => {
			console.log("hello");
			if (el.offsetWidth > document.documentElement.offsetWidth) {
				console.log("Found the worst element ever: ", el);
			}
		});
	}, []);
	return (
		<div className="News">
			<div className="card1">
				<div className="text">
					<h3>News and Announcement</h3>

					<p>Stay tune to Kalpataru for latest news</p>
				</div>

				<div className="photo">
					<img src={Announcement} alt="" />
				</div>
			</div>

			<div className="card2">
				<h2>IPO News </h2>
				<h3>Aether Industries IPO subscribed 49% on Day 2</h3>
				<div className="card">
					<div className="photo">
						<img src={IPO} alt="" />
					</div>

					<div className="text">
						<p>
							The initial public offering ipo of Aether received a muted
							response from the investor from the second day of the bidding
							process.
						</p>

						<p>
							The issue kicked off for bidding on tuesday may 24. and would
							remain open till thrusday may 26 the company is selling its share
							in the range of Rs 610-642 apiece to raise Rs 808 cr through
							primary route.
						</p>
					</div>
				</div>
			</div>

			<div className="card3">
				<h2>Top Gainer of the last week</h2>

				<table>
					<tr>
						<th>Name</th>
						<th>LTP </th>
						<th>Change</th>
					</tr>
					<tr>
						<td>Vivid Mercantile Ltd.</td>
						<td>44.3</td>
						<td>64.7</td>
					</tr>
					<tr>
						<td>Shri Kesav Cement</td>
						<td>121.0</td>
						<td>82.5</td>
					</tr>
					<tr>
						<td>Rose Merc. Ltd</td>
						<td>8.8</td>
						<td>-</td>
					</tr>
					<tr>
						<td>G M Polyplast Ltd.</td>
						<td>255.7</td>
						<td>44.9%</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default News;
