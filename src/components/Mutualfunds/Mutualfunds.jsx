import React, { PureComponent } from 'react'
import './Mutualfunds.css'
import pic3 from '../../Assets/pic3.png'


export class Mutualfunds extends PureComponent {
    render() {
        return (
            <div className='Mutualfunds'>
                <h1>Baroda BNP Paribas Aggressive Hybrid Fund(G)-Direct Plan</h1>
                <div className="card1">
                    <div className="left">
                        <h2 style={{ color: "red" }}>18.56 &#8595; -01.0(-0.54%)</h2>
                        <h2>Nav as on: <span style={{ fontSize: "small" }}>25 May-22</span> </h2>
                    </div>

                    <div className="right">
                        <h2>Fund Family : <span style={{ fontSize: "small" }}>Baroda BNP Paribas Mutual Fund</span> </h2>
                        <h2>Fund Class : <span style={{ fontSize: "small" }}>Hybrid - Aggressive Hybrid Fund</span> </h2>
                    </div>

                </div>
                <div className="card2">
                    <h2>Apply for Mutual Funds</h2>
                    <h3>Please leave your details and we will get in touch with you.</h3>

                    <form>
                        <label>
                            Name <br /> <br />
                            <input type="text" />
                        </label>
                        <br /><br />
                        <label>
                            Mobile No. <br /> <br />
                            <input type="text" />
                        </label>
                        <br /><br />
                        <label>
                            Email <br /> <br />
                            <input type="text" />
                        </label>
                        <br /><br />
                        <label>
                            City <br /> <br />
                            <input type="text" />
                        </label>
                        <br /><br />

                        <p><input type="checkbox" /> <span>I agree to the Terms and Conditions</span> </p>





                        <button>Apply Now</button>
                    </form>

                </div>

            </div>
        )
    }
}

export default Mutualfunds