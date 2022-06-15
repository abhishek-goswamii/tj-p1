import React from 'react'
import pancard_topimg from '../../assets/images/pan_card/pancard_top_img.png'
import ballimg from '../../assets/images/pan_card/half_ball_img.png'
import ballimg2 from '../../assets/images/pan_card/ball2.png'
import './pan_card.css'
const PanCard = () => {
    return (
        <>
            <div className='depository_top'>

                <div className='depository_top_txt'>
                    <h1>PAN Card Application</h1>
                    <p>A PAN card is an essential document for any Indian citizen for proof of identity and more importantly for all your tax purposes. The Income Tax Department of India has made PAN card applications easier over the years with the help of the internet.</p>
                </div>

                <div className='depository_top_img'>
                    <img src={pancard_topimg} alt="" />
                </div>

            </div>

            <div className='what_is_depository'>
                <div className='what_is_depository_part1'>

                    <div className='what_is_depository_part1_heading'><h1>How to apply for pan card</h1></div>
                    <div className='what_is_depository_part1_heading_des'>
                        <p>Application of a PAN card can be done online as well as through offline methods. To apply for the card online, you can visit the official website of Protean eGov Technologies Limited (formerly NSDL) and fill in the required details. You can also visit the website of UTIIISL to do so. For offline application, you will be required to download the application form and submit it to the agency of your choice.
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
                    <div className='what_is_depository_part1_heading'><h1>Online Process to apply for pan card</h1></div>
                    <div className='what_is_depository_part1_heading_des'>

                        <p> <span className='pancard_span'>Step-1</span>   In order to apply for a PAN card online, you will have to visit the website of         Protean eGov Technologies Limited(formerly NSDL) where you can fill in the information which needs to be submitted.
                        </p>

                        <br />
                        <br />
                        <p>
                        <span className='pancard_span'>Step-2</span> Click on the option 'Apply Online' on the top left corner since you are a new applicant.
                            <br />
                            <br />
                            In the drop-down, you can select one from the three options which are:
                            New PAN – Indian Citizen
                            New PAN – Foreign Citizen
                            Changes or Correction on Existing PAN/Re-print of PAN card.
                        </p>
                        <br />
                        <br />
                        <p>
                        <span className='pancard_span'>Step-3</span> Once done, you will need to select the 'Category'. The category list includes options such as individual, company, an associate of individuals, Hindu Undivided Family, Trust, Limited Liability Partnership, local authority, etc.
                        </p>
                        <br />
                        <br />
                        <p><span className='pancard_span'>Step-4</span> After choosing any one of the following options, you will need to fill in your details.

                            The information must be provided for these sections:</p>

                        <br />
                        <br />
                        <p>Title
                            Last name <br />
                            First name <br />
                            Middle name <br />
                            Date of Birth <br />
                            Email ID <br />
                            Phone number<br />
                        </p>

                        <br />
                        <br />
                        <p><span className='pancard_span'>Step-5</span> After providing the required information, you will have to re-type a captcha code and then click on 'Submit'.</p>
                        <br />
                        <br />
                        <p><span className='pancard_span'>Step-6</span> After submitting, the website provides you with a 15-digit acknowledgement number and the page must be printed</p>
                    </div>
                </div>
            </div>

            <div className='pan_card_bottom'>

                <div className='pan_card_bottom_d1'>
                    <img src={ballimg} alt="" />
                </div>
                <div className='pan_card_bottom_d2'>
                    <h1>Didn’t Find what you <br />
                        were Looking For?</h1>
                    <button>Contact Support</button>
                </div>
                <div className='pan_card_bottom_d3'>
                    <img src={ballimg2} alt="" />
                </div>


            </div>
        </>
    )
}

export default PanCard