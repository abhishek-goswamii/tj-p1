import React, { PureComponent } from 'react'
import './Applyipo.css'
import applyipo from '../../Assets/applyipo.png'
import { Link } from 'react-router-dom'


export class Applyipo extends PureComponent {
     render() {
        return (
            <div className='Applyipo'>

                <div className="card1">

                    <div className="text">
                        <h3>Apply to invest in IPOs</h3>
                    </div>

                    <div className="photo">
                        <img src={applyipo} alt="" />
                    </div>
                </div>

                <div className="card2">
                    <h1>IPOs / Takeovers / Buybacks / Delistings</h1>
                    <h2>Current Issue</h2>
                    <div className='table-details'>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Categorie</th> 
                            <th>Types Of Issue</th>
                            <th>Exchange</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Price range</th>
                            <th>Minimum order</th>
                        </tr>
                        <tr>
                            <td>AETHER INDUSTRIES
                                LIMITED</td>
                            <td>AETHER</td>
                            <td>EMP</td>
                            <td>BB (IPO)</td>
                            <td>BSE</td>
                            <td>24-05-2022
                                10:00:00</td>
                            <td>26-05-2022
                                17:00:00</td>
                            <td>610.00-642.00</td>
                            <td>23 <Link to='./Applyipo'><span className='table-span'>Apply IPO</span></Link></td>
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
                            <td></td>
                        </tr>

                    </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default Applyipo