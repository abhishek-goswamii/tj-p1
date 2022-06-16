import React from 'react'
import './general_insurance.css'
import insurance_topimg from '../../assets/images/general_insurance/general_insurance_topimg.png'
import up_triangle from '../../assets/images/general_insurance/up_triangle.png'

const GeneralInsurance = () => {
    return (
        <>

            <div className='insurance_top'>

                <div className='insurance_top_txt'>
                    <h1>General Insurance</h1>
                    <p>General Insurance Corporation of India Limited abbreviated as GIC Re is an Indian nationalised reinsurance company. It is under the ownership of Ministry of Finance, Government of India.</p>
                </div>

                <div className='insurance_top_img'>
                    <img src={insurance_topimg} alt="" />
                </div>

            </div>

            <div className='insurance_mid'>

                <div className='insurance_mid_title'><h1>General Insurance</h1></div>

                <div className='insurance_mid_performance'>

                    <div className='insurance_mid_performance1'>
                        <h1>Performance</h1>
                    </div>
                    <div className='insurance_mid_performance2'>

                        <div className='insurance_mid_performance2_low'>
                            <h2>Today Low</h2> <h3>110.60</h3>
                        </div>
                        <div className='insurance_mid_performance2_bar'>
                            <div></div>
                            <p className='insurance_up_triangle_today'><img src={up_triangle} alt="" /></p>
                        </div>
                        <div className='insurance_mid_performance2_high'>
                            <h2>Today High</h2> <h3>115.45</h3>

                        </div>
                    </div>
                    <div className='insurance_mid_performance3'>

                    </div>

                </div>

                <div className='insurance_mid_performance'>

                    <div className='insurance_mid_performance2'>

                        <div className='insurance_mid_performance2_low'>
                            <h2>52W Low</h2> <h3>110.60</h3>
                        </div>

                        <div className='insurance_mid_performance2_bar'>
                            <div></div>
                            <p className='insurance_up_triangle_52w'><img src={up_triangle} alt="" /></p>

                        </div>

                        <div className='insurance_mid_performance2_high'>
                            <h2>52W High</h2> <h3>115.45</h3>

                        </div>

                    </div>

                    <div className='insurance_mid_performance3'>
                        <div className='insurance_mid_performance3_child'>

                            <div className='insurance_mid_performance3_child_div'>
                                <h3>Open Price</h3>
                                <p>110.60</p>
                            </div>

                            <div className='insurance_mid_performance3_child_div'>
                                <h3>Prev.Close</h3>
                                <p>110.20</p>
                            </div>

                            <div className='insurance_mid_performance3_child_div'>
                                <h3>Volume</h3>
                                <p>986348</p>
                            </div>

                            <div className='insurance_mid_performance3_child_div'>
                                <h3>Value</h3>
                                <p>11.24 cr</p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='about_insurance'>
                    <div className='about_insurance1'><h1>About General Insurance</h1></div>
                    <div className='about_insurance2'><p>General Insurance Corporation of India Limited abbreviated as GIC Re is an
                        Indian nationalised reinsurance company. It is under the ownership of Ministry
                        of Finance , Government of India. It was incorporated on 22 November 1972
                        under Companies Act, 1956. GIC Re has its registered office and headquarters
                        in Mumbai. It was the sole nationalised reinsurance company in the Indian
                        insurance market until the insurance market was open to foreign reinsurance
                        players by late 2016 including companies from Germany, Switzerland and France.
                        GIC Re's shares are listed on BSE Limited and National Stock Exchange of India Ltd.</p></div>
                </div>

            </div>

        </>
    )
}

export default GeneralInsurance