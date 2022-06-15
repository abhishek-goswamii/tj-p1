import React, { PureComponent } from 'react'
import './SGB.css'
import SGBpic from '../../Assets/SGBpic.png'

export class SGB extends PureComponent {
    render() {
        return (
            <div className='SGB'>
                <div className="card1">

                    <div className="text">
                        <h3>Sovereign Gold Bonds</h3>

                        <p>SGBs are government securities denominated in grams of gold. They are substitutes for holding physical gold. Investors have to pay the issue price in cash and the bonds will be redeemed in cash on maturity. The Bond is issued by Reserve Bank on behalf of Government of India.</p>
                    </div>

                    <div className="photo">
                        <img src={SGBpic} alt="" />
                    </div>
                </div>

                <div className="card2">

                    <h2>Sovereign Gold Bonds</h2>
                    <table>
                        <tr>
                            <th>SGB</th>
                            <th>Trade date</th>
                            <th>Day High</th>
                            <th>Day Low</th>
                            <th>Day Open</th>
                            <th>Day Close</th>
                            <th>Total Volume</th>
                            <th>Total Value</th>
                        </tr>
                        <tr>
                            <td>Tranche 1</td>
                            <td>25-may-22</td>
                            <td>5150</td>
                            <td>5150</td>
                            <td>5150</td>
                            <td>5150</td>
                            <td>1</td>
                            <td>5150</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </table>
                </div>
            </div>
        )
    }
}

export default SGB