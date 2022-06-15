import React from "react";
import "../Trading/trading.css";

export const Trading = () => {
	return (
		<div className="trading-container">
			<FirstSection />
			<MidSection />
			<h1>Equity</h1>
			<Equity />
			<FandO />
			<QuestionSection1 />
			<QuestionSection2 />
		</div>
	);
};
const FirstSection = () => {
	return (
		<div className="row-container">
			<div className="leftside-content">
				<div>
					<h1>Trading</h1>
					<h2>
						Trade involves the transfer of goods and services from one person or
						entity to another
					</h2>
					<button className="apply-button">Trading With Us</button>
				</div>
			</div>
			<img src="./images/Bitcoin P2P-pana 1.svg" className="main-img" />
		</div>
	);
};
const MidSection = () => {
	return (
		<div className="trading-mid-section">
			<img src="./images/image 50.svg" />
			<div className="orange-heading">What is Trading</div>
			<p>
				Stock trading involves buying and selling stocks frequently in an
				attempt to time the market. The goal of stock traders is to capitalize
				on short-term market events to sell stocks for a profit, or buy stocks
				at a low. Some stock traders are day traders, which means they buy and
				sell several times throughout the day.
			</p>
		</div>
	);
};
const Equity = () => {
	return (
		<>
			<div className="row-card">
				<h1>What is Equity?</h1>
				<img src="./images/Vector.svg" />
			</div>
			<div className="column-container contact-box openmodal">
				<img src="./images/Ellipse 2.svg" alt="" />
				<p>
					The term “equity” refers to fairness and justice and is distinguished
					from equality: Whereas equality means providing the same to all,
					equity means recognizing that we do not all start from the same place
					and must acknowledge and make adjustments to imbalances.
				</p>

				<img src="./images/Ellipse 2.svg" alt="" />
			</div>
		</>
	);
};
const FandO = () => {
	return (
		<div className="fao-container">
			<img src="./images/Bitcoin P2P-bro 1.svg" />
			<div>
				<h1>What Is F&O</h1>
				<p1>
					Future and Option are two derivative instruments where the traders buy
					or sell an underlying asset at a pre-determined price. The trader
					makes profit if the price rises in case, he has a buy position and if
					he has a sell position, fall in price is beneficial for him.
				</p1>
			</div>
		</div>
	);
};
const QuestionSection1 = () => {
	return (
		<div className="trading-mid-section">
			<div className="orange-heading">What is Comodity?</div>
			<p>
				Commodity trading is where various commodities and their derivatives
				products are bought and sold. A commodity is any raw material or primary
				agricultural product that can be bought or sold, whether wheat, gold, or
				crude oil, among many others
			</p>
		</div>
	);
};
const QuestionSection2 = () => {
	return (
		<div className="trading-mid-section">
			<div className="orange-heading">What is SLB?</div>
			<p>
				Securities Lending and Borrowing (SLB) is a scheme that has been
				launched to enable settlement of securities sold short. SLB enables
				lending of idle securities by the investors through the clearing
				corporation/clearing house of stock exchanges to earn a return through
				the same.
			</p>
		</div>
	);
};
export default Trading;
