import React, { PureComponent } from 'react'
import './Register.css'
import registeration from '../../Assets/registeration.png'
import account from '../../Assets/account.png'
import savings from '../../Assets/savings.png'
import cash from '../../Assets/cash.png'
import Ellipse26 from '../../Assets/Ellipse26.png'

export class Register extends PureComponent {
    render() {
        return (
            <div className='Register'>
                <div className="card1">
                    <div className="photo">
                        <img src={registeration} alt="" />
                        <h2>Register Now!</h2>
                    </div>

                    <div className="text">
                        <h3>Welcome!</h3>

                        <form>
                            <label>
                            Enter Name <br /> <br />
                                <input type="text"  />
                            </label>
                            <br /><br />
                            <label>
                            Enter Email Id <br /> <br />
                                <input type="text"  />
                            </label>
                            <br /><br />
                            <label>
                            Enter Mobile No <br /> <br />
                                <input type="number"  />
                            </label>
                            <br /><br />
                            <label>
                            Enter Password <br /> <br />
                                <input type="text"  />
                            </label>
                            <br /><br />
                            <label>
                            Enter Confirm Password <br /> <br />
                                <input type="text"  />
                            </label>          
                            <br /><br />                 

                            <button>Register</button>
                        </form>

                    </div>
                </div>
                <br /><br />
                <div className="card2">
                    <h2>Start investing easily with us</h2>
                    <div className="icons">
                        <div className="icn">
                            <p><img src={Ellipse26} alt="" /></p>
                            <h3>Create an Account</h3>
                            <h5><img src={account} alt="" /></h5>
                        </div>

                        <div className="icn">
                            <p><img src={Ellipse26} alt="" /></p>
                            <h3>Fund Your Account</h3>
                            <h5><img src={cash} alt="" /></h5>
                        </div>

                        <div className="icn">
                            <p><img src={Ellipse26} alt="" /></p>
                            <h3>Invest Conveniently</h3>
                            <h5><img src={savings} alt="" /></h5>
                        </div>

                    </div>
                    <h3>Please ensure to keep following documents ready before proceeding</h3>
                    <div className="box">
                        <div className="checkbox1">
                            <h5><input type="checkbox" />
                                <label>Pan Card</label></h5>

                            <h5><input type="checkbox" />
                                <label>Bank Statement</label></h5>
                        </div>
                        <div className="checkbox2">
                            <h5><input type="checkbox" />
                                <label>Aadhar card</label></h5>

                            <h5><input type="checkbox" />
                                <label>Photograph</label></h5>
                        </div>

                        <div className="checkbox3">
                            <h5><input type="checkbox" />
                                <label>Cheque</label></h5>

                            <h5><input type="checkbox" />
                                <label>Signature Scan</label></h5>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Register