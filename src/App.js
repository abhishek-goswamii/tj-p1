import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdvisoryForInvesters from "./components/Advisory-for-investers/AdvisoryForInvesters";
import PrivacyPolicy from "./components/PrivacyyPolicy/PrivacyPolicy";
import Downloads from "./components/Downloads/Downloads";
import PartnerWithUs from "./components/PartnerWithUs/PartnerWithUs";
import Services from "./components/services/Services";
import Trading from "./components/Trading/Trading";
import Payments from "./components/Payments/Payments";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/blog";
import Homepage from "./components/homepage/homepage";
import Header from "./components/header/header";
import Depository from "./components/depository/depository";
import { useState } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Aboutus from "./components/Aboutus/Aboutus";
import Advisory from "./components/Advisory/Advisory";
import IPO from "./components/IPO/IPO";
import Margincal from "./components/Margincal/Margincal";
import News from "./components/News/News";
import Investorscharter from "./components/Investorscharter/Investorscharter";
import SGB from "./components/SGB/SGB";
import Register from "./components/Register/Register";
import Signup from "./components/Signup/Signup";

function App() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className="App">
			<Header openModal={openModal} setOpenModal={setOpenModal} />
			{openModal == true && <Sidebar />}
			<Routes>
				<Route
					exact
					path="/advisory"
					element={<AdvisoryForInvesters />}
				></Route>
				<Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route>
				<Route exact path="/downloads" element={<Downloads />}></Route>
				<Route
					exact
					path="/partner-with-us"
					element={<PartnerWithUs />}
				></Route>
				<Route exact path="/services" element={<Services />}></Route>
				<Route exact path="/trading" element={<Trading />}></Route>
				<Route exact path="/payments" element={<Payments />}></Route>
				<Route exact path="/footer" element={<Footer />}></Route>
				<Route exact path="/blogs" element={<Blog />}></Route>
				<Route exact path="/" element={<Homepage />}></Route>
				<Route exact path="/header" element={<Header />}></Route>
				<Route exact path="/depository" element={<Depository />}></Route>
				<Route exact path="/about-us" element={<Aboutus />}></Route>
				<Route exact path="/adv" element={<Advisory />}></Route>
				<Route exact path="/depository" element={<Depository />}></Route>
				<Route exact path="/ipo" element={<IPO />}></Route>
				<Route exact path="/margincal" element={<Margincal />}></Route>
				<Route exact path="/news" element={<News />}></Route>
				<Route exact path="/margincal" element={<Margincal />}></Route>
				<Route exact path="/investor" element={<Investorscharter />}></Route>
				<Route exact path="/sgb" element={<SGB />}></Route>
				<Route exact path="/register" element={<Register />}></Route>
				<Route exact path="/login" element={<SGB />}></Route>
				<Route exact path="/signup" element={<Signup />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
