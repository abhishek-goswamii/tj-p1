import React, { PureComponent } from 'react'
import './Aboutus.css'
import About from '../../Assets/About.png'
import logo from '../../Assets/logo.png'
import team1 from '../../Assets/team1.png'
import team2 from '../../Assets/team2.png'
import team3 from '../../Assets/team3.png'
import team4 from '../../Assets/team4.png'
import team5 from '../../Assets/team5.png'
import team6 from '../../Assets/team6.png'
import BSE from '../../Assets/BSE.png'
import NSE from '../../Assets/NSE.png'
import MCX from '../../Assets/MCX.png'
import CDSL from '../../Assets/CDSL.png'


export class Aboutus extends PureComponent {
    render() {
        return (
            <div className='Aboutus'>
                <div className="card1">

                    <div className="text">
                        <h3>About Us</h3>

                        <p>Years of Trust Won by
                            Customer First Approach</p>

                    </div>

                    <div className="photo">
                        <img src={About} alt="" />
                    </div>
                </div>

                <div className="card2">
                    <div className="photo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="text">
                        <p>Kalpataru is a wishful Devine Tree and in present context a widely Trusted, Time tested and Transparent Share Broker, Mutual Fund Distributor and D.P. of this region. Kalpataru offers a complete solution to all your Investment problems, needs and requirements since 1992.</p>

                        <p>Kalpataru is a spectrum of vision, vibgyor , style, standard, creativity, craze and honesty. All the seven colours of share business can be felt and enjoyed in Kalpataru. Our field of operation is Share Trading, Commodity, Derivative (F&O) Trading, Currency, IPO, Demat, Mutual Fund and Pan Card Services</p>

                        <p>So when ever and where ever you need, you will find Kalpataru at your door step to help you trade and transact with any stock exchange in India or abroad.</p>
                    </div>
                </div>

                <h2>Meet The Team</h2>

                <div className="card3">
                    <div className="row">
                        <div className="crd">
                            <img src={team1} alt="" />
                            <h3>Ramesh Manya Jain
                                Chairman</h3>
                        </div>
                        <div className="crd">
                            <img src={team2} alt="" />
                            <h3>Aditya Manya Jain
                                Vice Chairman</h3>
                        </div>
                        <div className="crd">
                            <img src={team3} alt="" />
                            <h3>Amitabh Manya Jain
                                Managing Director</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="crd">
                            <img src={team4} alt="" />
                            <h3>Sharda Manya Jain
                                Director</h3>
                        </div>
                        <div className="crd">
                            <img src={team5} alt="" />
                            <h3>Savita Manya Jain
                                Director</h3>
                        </div>
                        <div className="crd">
                            <img src={team6} alt="" />
                            <h3> Lalit Manya Jain
                                Director</h3>
                        </div>


                    </div>
                </div>
                <h2>Achievements</h2>

                <div className="card4">

                    <div className="left">
                        <img src={logo} alt="" />
                        <p>We "KALPATARU" are the first since our inception
                            and till today Clearing Member of</p>
                    </div>
                    <div className="right">
                        <div className="row1">
                        <h3><img src={BSE} alt="" /></h3>
                        <h4><img src={NSE} alt="" /></h4>
                        </div>
                       <div className="row2">
                       <h5><img src={MCX} alt="" /></h5>
                        <h6><img src={CDSL} alt="" /></h6>
                       </div>
                   

                    </div>
                </div>

            </div>
        )
    }
}

export default Aboutus