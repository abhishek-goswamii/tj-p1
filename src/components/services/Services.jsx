import React from "react";
import "../services/services.css";

export const Services = () => {
	return (
		<div className="services-container">
			<FirstSection />
			<h1>Mutual Funds Distributor</h1>
			<MidSection />
			<h1>National Pension Scheme</h1>
			<PensionScheme />
			<h1 className="bond-title">Bonds</h1>
			<Bonds />
			<h1>Tax Saving Scheme</h1>
			<TaxSavingScheme />
		</div>
	);
};

const FirstSection = () => {
	return (
		<div className="row-container">
			<div className="leftside-content">
				<div>
					<h1>Mutual Funds</h1>
					<h2>
						Active mutual funds have an edge over passive funds in the long run
					</h2>
					<button className="apply-button">Apply Mutual Fund</button>
				</div>
			</div>
			<img src="./images/Delivery-rafiki 1.svg" className="main-img" />
		</div>
	);
};

export const MidSection = () => {
	return (
		<>
			<div className="row-card">
				<h1>PRIVACY POLICY STATEMENT</h1>
				<img src="./images/Vector.svg" />
			</div>
			<div className="column-container contact-box openmodal">
				<img src="./images/Ellipse 2.svg" alt="" />
				<p>
					A mutual fund is a company that pools money from many investors and
					invests the money in securities such as stocks, bonds, and short-term
					debt.
				</p>

				<img src="./images/Ellipse 2.svg" alt="" />
			</div>
		</>
	);
};
export const PensionScheme = () => {
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
const Bonds = () => {
	return (
		<div className="bond-container">
			<div className="bond-first">
				<img src="./images/Rectangle 1151.svg" />
				<div>
					<h2 className="bond-text">Bond</h2>
					<p>
						Bonds are a type of investment designed to aid governments and
						corporations to raise money. In a mutual fund, money collected from
						various investors is taken together to buy a large variety of
						securities.
					</p>
				</div>
			</div>
			<h2 className="is-bond">Is Bond is a good investment? </h2>
			<h3>
				Bond funds are a good way to diversify your portfolio, beyond just
				holding stocks. In terms of risk, bonds are comparatively less risky
				than stocks or mutual funds.
			</h3>
		</div>
	);
};
const TaxSavingScheme = () => {
	return (
		<>
			<div className="row-card">
				<h1>PRIVACY POLICY STATEMENT</h1>
				<img src="./images/Vector.svg" />
			</div>
			<div className="column-container contact-box openmodal">
				<img src="./images/Ellipse 2.svg" alt="" />
				<p>
					Tax saving mutual funds are just like any other mutual funds with an
					added tax-saving benefit. The special feature of this type of mutual
					fund is that the investments made in the tax-saving mutual funds are
					eligible for tax benefits under section 80C of the Indian Income Tax
					Act.
				</p>

				<img src="./images/Ellipse 2.svg" alt="" />
			</div>
		</>
	);
};
export default Services;
