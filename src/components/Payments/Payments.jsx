import React from "react";
import "../Payments/payment.css";

export const Payments = () => {
	return (
		<div className="payment-container">
			<h1>Payment</h1>
			<PaymentBox1 />
			<Wallet />
			<DebitCredit />
			<NetBanking />
		</div>
	);
};
const PaymentBox1 = () => {
	return (
		<div className="box-1 top-box">
			<div className="upi-text">UPI</div>
			<div className="icons">
				<div>
					<img src="./images/image 14.svg" />
					<span>Google Play</span>
				</div>

				<div>
					<img src="./images/image 15.svg" />
					<span>Phone Pay</span>
				</div>
				<div>
					<img src="./images/image 16.svg" />
					<span>Paytm</span>
				</div>
				<div>
					<img src="./images/image 17.svg" />
					<span>Amazon</span>
				</div>
			</div>
			<div className="add">
				<img src="./images/Vector (2).svg" />
				<h2>Add Another UPI Id</h2>
			</div>
		</div>
	);
};
const Wallet = () => {
	return (
		<div className="box-1">
			<div className="upi-text">Wallets</div>
			<div className="icons wallets">
				<div>
					<img src="./images/image 15.svg" />
					<span>Phone Pay</span>
				</div>
				<div>
					<img src="./images/image 16.svg" />
					<span>Paytm</span>
				</div>
			</div>
		</div>
	);
};
const DebitCredit = () => {
	return (
		<div className="box-1">
			<div className="upi-text">Debit / Credit Card</div>
			<div className="debit-card">
				<input placeholder="Card Holder Name" />
				<input placeholder="Card Holder Name" />
				<p>Valid Upto</p>
				<input placeholder="CVV" />
			</div>
			<div className="black-cards">
				<img src="./images/image 20.svg" />
				<img src="./images/image 21.svg" />
				<img src="./images/image 22.svg" />
			</div>
			<div className="checkbox">
				<input type="checkbox" value="1" id="checkboxOneInput" />
				<label for="checkboxOneInput">Save card</label>
			</div>
			<button>Pay Securely</button>
		</div>
	);
};
const NetBanking = () => {
	return (
		<div className="box-1 net-box">
			<div className="upi-text">Net Banking</div>
			<div className="icons">
				<div>
					<img src="./images/image 23.svg" />
					<span>HDFC Bank</span>
				</div>

				<div>
					<img src="./images/image 25.svg" />
					<span>HDFC Bank</span>
				</div>
				<div>
					<img src="./images/image 26.svg" />
					<span>Axis Bank</span>
				</div>
				<div>
					<img src="./images/image 28.svg" />
					<span>Axis Bank</span>
				</div>
			</div>
		</div>
	);
};
export default Payments;
