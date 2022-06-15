import React from "react";
import getStartedIMage from "../../assets/images/Investment-data-img.png";
import welcomeImage from "../../assets/images/welcome_img.png";
import "../homepage/homepage.css";
import featureImage from "../../assets/images/features_img.png";
import arrowImage from "../../assets/images/arrow _img.png";
import productOfferedImage from "../../assets/images/product_offered_img.png";
import drop_your_details_img from "../../assets/images/dropYourDetails_img.png";
import know_more_img from "../../assets/images/know_more_img.png";
import our_services_main_image from "../../assets/images/our_services_main_image.png";

import img11 from "../../assets/images/our_services/11.png";
import img12 from "../../assets/images/our_services/12.png";
import img13 from "../../assets/images/our_services/13.png";
import img14 from "../../assets/images/our_services/14.png";

import img21 from "../../assets/images/our_services/21.png";
import img22 from "../../assets/images/our_services/22.png";
import img23 from "../../assets/images/our_services/23.png";
import img24 from "../../assets/images/our_services/24.png";

import right_arrow_img from "../../assets/images/right_arrow.png";
import left_arrow_img from "../../assets/images/left_arrow.png";

import testimonial_image1 from "../../assets/images/clint_testimonials_images/i1.png";
import srinidhi_img from "../../assets/images/clint_testimonials_images/srinidhi_img.png";
import amansingh_img from "../../assets/images/clint_testimonials_images/aman singh.png";
import sandeep_img from "../../assets/images/clint_testimonials_images/sandeep patel.png";
import rahul_img from "../../assets/images/clint_testimonials_images/rahul tomar.png";
import play_btn_img from "../../assets/images/clint_testimonials_images/play_vector.png";

import faq_arrow from "../../assets/images/faq/faq_arrow.png";
import faq_i1 from "../../assets/images/faq/faq_image1.png";
import faq_i2 from "../../assets/images/faq/faq_image2.png";
import faq_i3 from "../../assets/images/faq/faq_image3.png";
import faq_i4 from "../../assets/images/faq/faq_image4.png";

import { useState } from "react";

const Homepage = () => {
	const [investInText, setinvestInText] = useState("Mutual Funds");

	return (
		<>
			<div className="get_started">
				<div className="get_started_img">
					<img src={getStartedIMage} alt="" />
				</div>

				<div className="get-started-btn">
					<div>
						<h1>
							Invest in <span>{investInText}</span>
						</h1>

						<p>
							Trusted by many peoples . <br />
							Start investing Today{" "}
						</p>

						<button>Get Started</button>
					</div>
				</div>
			</div>

			{/* welcome to kalpataru div*/}

			<div className="welcome_kalpataru">
				<div className="welcome_kalpataru_des">
					<div>
						<h2>
							Welcome To Kalpataru <br />
							Multiplier Ltd.
						</h2>
						<div className="welcome_kalpataru_des_card">
							<p>
								Kalpataru is a wishful Devine Tree and in present context a
								widely Trusted, Time tested and Transparent Share Broker,
								Investment Advisor and D.P. of this region. Kalpataru offers a
								complete solution to all your Investment problems, needs and
								requirements since 1992. Our field of operation is Share
								Trading, Commodity, Derivative (F&O) Trading, Currency, IPO,
								Demat, Mutual Fund and Pan Card Services.
							</p>
							<button>Read More</button>
						</div>
					</div>
				</div>

				<div className="welcome_kalpataru_img">
					<img src={welcomeImage} alt="" />
				</div>
			</div>

			{/* features */}

			<div className="feature">
				<div className="feature_img">
					<img src={featureImage} alt="" />
				</div>

				<div className="feature_features">
					<h1>Features</h1>

					<div className="feature_features_boxes">
						<div className="feature_features_box">
							<p>
								Expert <br />
								Advidsory{" "}
							</p>
						</div>

						<img src={arrowImage} alt="" />

						<div className="feature_features_box">
							<p>
								Transparent <br /> Pricing
							</p>
						</div>

						<img src={arrowImage} alt="" />

						<div className="feature_features_box">
							<p>
								Flexible <br /> Brokerage Plans{" "}
							</p>
						</div>

						<img src={arrowImage} alt="" />

						<div className="feature_features_box">
							<p>
								Offers Both <br />
								Online and Offline
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* product offered */}

			<div className="product_offered">
				<div className="product_offered_headline">
					<h1>Products Offered Within Exchanges</h1>
				</div>

				<div className="product_offered_div">
					<div className="product_offered_div_img">
						<img src={productOfferedImage} alt="" />
					</div>

					<div className="product_offered_types">
						<div className="product_offered_types_div">
							<div className="product_offered_types_div_div1">
								<button className="product_offered_types_div_div1_btn1">
									NSE
								</button>
								<button className="product_offered_types_div_div1_btn2">
									BSE
								</button>
								<button className="product_offered_types_div_div1_btn3">
									MCX
								</button>
							</div>

							<div className="product_offered_types_div_div2">
								<button>Equities</button>
								<button>Derivatives</button>
								<button>Fixed Income & Debt </button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* drop your details */}

			<div className="drop_your_details">
				<div className="drop_your_details_heading">
					<h1>Make Right Decision With Us</h1>
				</div>
				<div>
					<p>Drop Your Details</p>
				</div>

				<div className="drop_your_details_main_div">
					<div>
						<div className="drop_your_details_main_div_inputs">
							<input placeholder="Name"></input>
							<input placeholder="Mobile Number"></input>
							<input placeholder="Email Id"></input>
						</div>
					</div>

					<div className="drop_your_details_main_div_img">
						<img src={drop_your_details_img} alt="" />
					</div>
				</div>

				<div className="drop_your_details_btn">
					<button>Submit</button>
				</div>
			</div>

			{/* know more */}
			<div className="know_more">
				<div>
					<div className="know_more_btn">
						<h1>
							Want to know more <br /> Kalpataru ?
						</h1>
						<p>
							Just click on the button to <br />
							know more
						</p>
						<button>About Us</button>
					</div>
					<div className="know_more_img">
						<img src={know_more_img} alt="" />
					</div>
				</div>
			</div>

			{/* our services */}

			<div className="our_services">
				<div className="our_services_child">
					<div className="our_services_heading">
						<h2>Our Services</h2>
					</div>

					<div className="our_services_content">
						<div className="our_services_content_child">
							<div className="our_services_content_child_cards">
								<div className="our_services_content_child_cards_1">
									<div className="our_services_content_child_cards_1_card">
										<div>
											<h4>Mutual Fund</h4>
											<img src={img11} alt="" />
										</div>
									</div>
									<div className="our_services_content_child_cards_1_card">
										<div>
											<h4>MTradingutual</h4>
											<img src={img12} alt="" />
										</div>
									</div>
									<div className="our_services_content_child_cards_1_card">
										<div>
											<h4>Equity</h4>
											<img src={img13} alt="" />
										</div>
									</div>
									<div className="our_services_content_child_cards_1_card">
										<div>
											<h4>Depository</h4>
											<img src={img14} alt="" />
										</div>
									</div>
								</div>
								<div className="our_services_content_child_cards_2">
									<div className="our_services_content_child_cards_1_card">
										<div>
											<h4>IPO</h4>
											<img src={img21} alt="" />
										</div>
									</div>
									<div className="our_services_content_child_cards_1_card">
										<div>
											<h4>General Insurance</h4>
											<img src={img22} alt="" />
										</div>
									</div>
									<div className="our_services_content_child_cards_1_card">
										<div>
											<h4>PAN CARD</h4>
											<img src={img23} alt="" />
										</div>
									</div>
									<div className="our_services_content_child_cards_1_card">
										<div>
											<h4>SGB</h4>
											<img src={img24} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="our_services_content_child_img">
								<img src={our_services_main_image} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* testimonials */}

			<div className="testimonials">
				<div className="testimonials_heading">
					<h1>Clients’ Testimonials</h1>
				</div>

				<div className="testimonials_content">
					<div className="testimonials_content_child">
						<div className="testimonials_content_child_2arrow_img">
							<div>
								<img src={right_arrow_img} alt="" />
								<img src={left_arrow_img} alt="" />
							</div>
						</div>

						<div className="testimonials_content_child_all_cards">
							<div className="testimonials_content_child_all_cards_crd">
								<div className="testimonials_content_child_all_cards_crd_img">
									<img src={testimonial_image1} alt="" />
									<p>
										<img src={play_btn_img} alt="" />
									</p>
								</div>

								<div className="testimonials_content_child_all_cards_crd_txt">
									<div>
										<h2>Akash Singh</h2>

										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
									</div>
								</div>
							</div>
							<div className="testimonials_content_child_all_cards_crd">
								<div className="testimonials_content_child_all_cards_crd_img">
									<img src={srinidhi_img} alt="" />
									<p>
										<img src={play_btn_img} alt="" />
									</p>
								</div>

								<div className="testimonials_content_child_all_cards_crd_txt">
									<div>
										<h2>Srinidhi Shetty</h2>

										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
									</div>
								</div>
							</div>
							<div className="testimonials_content_child_all_cards_crd">
								<div className="testimonials_content_child_all_cards_crd_img">
									<img src={sandeep_img} alt="" />
									<p>
										<img src={play_btn_img} alt="" />
									</p>
								</div>

								<div className="testimonials_content_child_all_cards_crd_txt">
									<div>
										<h2>Sandeep Patel</h2>

										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
									</div>
								</div>
							</div>
							<div className="testimonials_content_child_all_cards_crd">
								<div className="testimonials_content_child_all_cards_crd_img">
									<img src={amansingh_img} alt="" />
									<p>
										<img src={play_btn_img} alt="" />
									</p>
								</div>

								<div className="testimonials_content_child_all_cards_crd_txt">
									<div>
										<h2>Aman Singh</h2>

										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
									</div>
								</div>
							</div>
							<div className="testimonials_content_child_all_cards_crd">
								<div className="testimonials_content_child_all_cards_crd_img">
									<img src={rahul_img} alt="" />
									<p>
										<img src={play_btn_img} alt="" />
									</p>
								</div>

								<div className="testimonials_content_child_all_cards_crd_txt">
									<div>
										<h2>Rahul Tomer</h2>

										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
										<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* faq */}

			<div className="faq">
				<div className="faq_heading">
					<h1>FAQ</h1>
				</div>

				<div className="faq_cards flip-card">
					<div className="faq_card card-containerr">
						<div className="the-card">
							<div className="flip-card-front">
								<h4>Why Should you Invest</h4>
								<img className="faq_card_img1" src={faq_i1} alt="" />
								<img className="faq_card_img2" src={faq_arrow} alt="" />
							</div>
							<div class="flip-card-back">
								<h1>John Doe</h1>
								<p>Architect & Engineer</p>
								<p>We love that guy</p>
							</div>
						</div>
					</div>

					<div className="faq_card">
						<h4>What is the difference between saving and investing?</h4>
						<img className="faq_card_img1" src={faq_i2} alt="" />
						<img className="faq_card_img2" src={faq_arrow} alt="" />
					</div>
					<div className="faq_card">
						<h4>Inflanation and its relationship with investment</h4>
						<img className="faq_card_img1" src={faq_i3} alt="" />
						<img className="faq_card_img2" src={faq_arrow} alt="" />
					</div>
					<div className="faq_card">
						<h4>Which assests class you should invest in?</h4>
						<img className="faq_card_img1" src={faq_i4} alt="" />
						<img className="faq_card_img2" src={faq_arrow} alt="" />
					</div>
				</div>
			</div>

			<h1 className="footer_h1"> Footer here</h1>
		</>
	);
};

export default Homepage;
