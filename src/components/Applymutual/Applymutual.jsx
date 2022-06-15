import React, { PureComponent } from 'react'
import './Applymutual.css'
import Ellipse1 from '../../Assets/Ellipse1.png'
import Ellipse2 from '../../Assets/Ellipse2.png'

export class Applymutual extends PureComponent {
    render() {
        return (
            <div className='Applymutual'>
                <div className="card1">
                    <h1>FUND PROFILE</h1>
                </div>

                <div className="card2">
                    <div className="card">
                        <h2>Mutual Funds Profile</h2>
                    </div>

                    <table>
                        <tr>
                            <th>Fund House</th>
                            <th>Incep date</th>
                            <th>Fund Type</th>
                            <th>No Sch Open</th>
                            <th>No Sch Close</th>
                            <th>Date &nbsp;&nbsp;&nbsp;</th>
                            <th>Total Assests</th>
                        </tr>
                        <tr>
                            <td className='red'>Baroda BNP Paribas Asset
                                Management India Pvt. Ltd.</td>
                            <td>4-Nov 2003</td>
                            <td>Pvt. Sector - Joint
                                Ventures ( Foreign)</td>
                            <td>188</td>
                            <td>21</td>
                            <td>31-March-2022</td>
                            <td>21375</td>
                        </tr>
                        <tr>
                            <td className='red'></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='red'></td>
                            <td></td>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='red'></td>
                            <td></td>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='red'></td>
                            <td></td>
                            <td> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <br /><br />
                <p><img src={Ellipse1} alt="" /></p>

                <div className="card3">

                    <h2>Didn’t Find what you
                        were Looking For?</h2>

                    <h5>Contact Support</h5>
                    <br /><br /><br /><br />
                </div>
                <h6><img src={Ellipse2} alt="" /></h6>
            </div>
        )
    }
}

export default Applymutual