import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import signup from '../../Assets/signup.png'
import account from '../../Assets/account.png'
import savings from '../../Assets/savings.png'
import cash from '../../Assets/cash.png'
import Ellipse26 from '../../Assets/Ellipse26.png'


export class Signup extends PureComponent {
    render() {
        return (
            <div className='Signup'>
                <div className="card1">
                    <div className="photo">
                        <img src={signup} alt="" />
                        <h2>Welcome to Our Website</h2>
                    </div>

                    <div className="text">
                        <div className="top">
                            <h6>Don’t have an account?</h6>
                            <Link to='./Register'> <h4><button>Register</button></h4></Link>
                        </div>

                        <h3>Welcome!</h3>

                        <form>
                            <label>
                                User ID: <br /> <br />
                                <input type="text" name="User ID" />
                            </label>
                            <br /><br />
                            <label>
                                Password: <br /> <br />
                                <input type="text" name="Password" />
                            </label>

                            <a href="www.forgot.com"><h5>Forgot Password?</h5></a>

                            <button>Login</button>
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

export default Signup