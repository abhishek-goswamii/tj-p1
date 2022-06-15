import React, { PureComponent } from 'react'
import './Advisory.css'
import pic1 from '../../Assets/pic1.png'
import horzline from '../../Assets/horzline.png'
import Ellipse from '../../Assets/Ellipse.png'
import screen from '../../Assets/screen.png'

export class Advisory extends PureComponent {
  render() {
    return (
      <div className='Advisory'>
        <div className="card1">

          <div className="text">
            <h3>Advisory for Investors</h3>

            <p>Statements about latest
              rules and regulations set by
              regulatory authoritie</p>

          </div>

          <div className="photo">
            <img src={pic1} alt="" />
          </div>
        </div>

        <div className="card2">

          <h1>Attention Investors!</h1>
          <br /><br /><br /><br />
          <div className="card">
            <div className="crd">
              <p>Beware of fixed/guaranteed
                /regular returns</p>
            </div>

            <div className="crd">
              <p>Do not keep funds idle with
                the Stock Broker</p>
            </div>

            <div className="crd">
              <p>Brokers are not permitted to accept
                transfer of securities as margin</p>
            </div>

            <div className="crd">
              <p>Always keep your contact details viz.
                Mobile number/Email ID updated </p>
            </div>

          </div>
          <h2><img src={horzline} alt="" /></h2>
          <h6><img src={Ellipse} alt="" /></h6>

        </div>

        <div className="card3">
          <h2>Beware of fixed/guaranteed
            /regular returns</h2>

          <img src={screen} alt="" />

          <p>Beware of fixed/guaranteed/regular returns/ capital protection schemes. Brokers or their authorized persons or any of their associates are not authorized to offer fixed/guaranteed/regular returns/ capital protection on your investment or authorized to enter into any loan agreement with you to pay interest on the funds offered by you. </p>

          <p>Please note that in case of default of a member claim for funds or securities given to the broker under any arrangement/ agreement of indicative return will not be accepted by the relevant Committee of the Exchange as per the approved norms.</p>
        </div>

      </div>
    )
  }
}

export default Advisory