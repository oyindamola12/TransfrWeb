import React from 'react'
import './App.css';
// import logo from "/img/Logo_Transfr.png"
const Download=()=> {


  const handleImageClick = () => {
    alert("Image clicked!");
  };

  const handleImageClick2 = () => {
    alert("Coming soon!");
  };

  return (
     <div className="FirstDiv">
       <div className="second">
      <div className="secondDiv">
        <div className="ImageDiv">

          <img src="https://tinypic.host/images/2023/12/05/Logo_Transfr-1.png" alt="Logo_Transfr-1.png" border="0"  className="App-logo"/>



        </div>
      </div>
 <div className="ImageDivider"></div>
    </div>

      <div className="secondDiv2Download">
      <div className="div1Download">
        <p className="tabText">
          <span className="transfr">Transfr</span> is a contact-less / tap-to-pay instant
          phone-
          <br />
          screen to phone-screen mobile money transfer app.
          <br />
          On it, you get weekly free food and free shopping
          <br />
          vouchers. Redeemable at all Transfr Merchants;<br /> restaurants and stores closest to you.
          {/* <span className="italics"> you.</span> */}

        </p>
        <p className="textHide">
          <span className="transfr">Transfr</span> is a contact-less / tap-to-pay <br />
          instant phone-screen to phone-screen mobile money transfer app.<br /> On it, you get weekly free food and free shopping vouchers.
          Redeemable at all Transfr Merchants; restaurants<br /> and stores closest to you.
          {/* <span className="italics"> you.</span> */}

        </p>
        <p className="textHide3">
          <span className="transfr">Transfr</span> is a contact-less / tap-to-pay instant
          phone-
          <br />
          screen to phone-screen mobile money transfer app.
          <br />
          On it, you get weekly free food and free shopping
          <br />
          vouchers. Redeemable at all Transfr Merchants;<br /> restaurants and stores closest to you.
          {/* <span className="italics"> you.</span> */}

        </p>
      </div>

      <div className="div3">

        <div className="moveDownload2">
          <p className="downloadText">
            download the
            <br />
            transfr app:
          </p>
          <div className="buttonDiv2" style={{ marginLeft:-7}}>
<img src="https://tinypic.host/images/2025/05/26/GoogleStore_Logos.png"  alt="GooglePlayStore_Transfr.png" border="0" className="googleAndApple"  onClick={handleImageClick}/>

<img src="https://tinypic.host/images/2025/05/26/AppleStore_Logos.png"  alt="AppleStore_Transfr.png" border="0" className="googleAndApple" onClick={handleImageClick2}/>


          </div>
        </div>
      </div>
    </div>

{/* <a href='https://me-qr.com' border='0'><img src='https://cdn2.me-qr.com/qr/85122723.png?v=1701983341' alt='Create qr code for free'/></a><a href='https://me-qr.com' border='0' ></a> */}
    </div>
  )
}

export default Download