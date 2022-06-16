import React from 'react'
import mainimg from '../../assets/images/depository_img/main_depository_img.png'
import './depository.css'
const Depository = () => {
    return (
        <>
            <div className='depository_top'>

                <div className='depository_top_txt'>
                    <h1>Depository</h1>
                    <p>A depository can be an organization, bank, or institution that holds securities and assists in the trading of securities. A depository provides security and liquidity in the market, uses money deposited for safekeeping to lend to others, invests in other securities, and offers a funds transfer system.</p>
                </div>

                <div className='depository_top_img'>
                    <img src={mainimg} alt="" />
                </div>
            </div>

            <div className='depository_page_data'>

                <div className='depository_page_data_p1'>
                    <div className='depository_page_data_comps'>
                        <h3>Open</h3>
                        <p>1055.00</p>
                    </div>
                    <div className='depository_page_data_comps'>
                        <h3>High</h3>
                        <p>1,064.00</p>
                    </div>
                    <div className='depository_page_data_comps'>
                        <h3>Low</h3>
                        <p>1,015.00</p>
                    </div>
                </div>

                <div className='depository_page_data_p2'>

                    <div className='depository_page_data_comps'>
                        <h3>Mkt cap</h3>
                        <p>1,096TCr</p>
                    </div>
                    <div className='depository_page_data_comps'>
                        <h3>P/Eratio</h3>
                        <p>35.26</p>
                    </div>
                    <div className='depository_page_data_comps'>
                        <h3>Div Yield</h3>
                        <p>-     </p>
                    </div>

                </div>

                <div className='depository_page_data_p3'>

                    <div className='depository_page_data_comps'>
                        <h3>52-wk high</h3>
                        <p>1,734.40</p>
                    </div>
                    <div className='depository_page_data_comps'>
                        <h3>Op52-wk low</h3>
                        <p>883.20</p>
                    </div>
                   
                </div>

            </div>

            <div className='what_is_depository'>
                <div className='what_is_depository_part1'>

                    <div className='what_is_depository_part1_heading'><h1>What is depository ?</h1></div>
                    <div className='what_is_depository_part1_heading_des'>
                        <p>As investors, we are profound with the concept of trading securities. These securities are safeguarded at a particular place. This place is known as 'depository'. A depository can be a bank or a Demat account. There are two main types of depositories CDSL and NSDL.
                            <br />
                            <br />
                            The term depository alludes to a facility where something is kept for storage or
                            safeguarding. It is an organization that acknowledges money deposits from clients,
                            for example, a bank or saving associations. A depository can be an association,
                            bank, or establishment that holds securities and aids the exchanging of securities.
                        </p>
                    </div>

                </div>
                <div className='what_is_depository_part1'>
                    <div className='what_is_depository_part1_heading'><h1>What are CDSL and NSDL?</h1></div>
                    <div className='what_is_depository_part1_heading_des'>
                        <p>NSDL is short for ‘National Securities Depository’, whereas CDSL stands for ‘Central
                            Depository Services’ Limited. They are national share depositories fused by the market
                            sectors controller Securities and Exchange Board of India (SEBI). They hold your shares,
                            debentures, mutual funds, etc. Every one of the depositories is connected
                            to one stock trade.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Depository