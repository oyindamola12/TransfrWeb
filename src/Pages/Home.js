import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWhatsapp,faYoutube,faXTwitter,faFacebookF } from "@fortawesome/free-brands-svg-icons";
import './App.css';
import {Link} from 'react-router-dom'

const Home =()=> {

const [openLanguage, setOpenLanguage] = useState(false);
const [expand1, setExpand1] = useState(false);
const [expand2, setExpand2] = useState(false);
const [expand3, setExpand3] = useState(false);
const [language, setLanguage] = useState("ENG");



const openLanguageTrue=()=>{
  setOpenLanguage(!openLanguage)
}

const LanguageEng = () => {
  setLanguage("ENG");
  setOpenLanguage(false);
};

const LanguageYor = () => {
   setLanguage("YOR");
  setOpenLanguage(false);
};


const LanguageIgb = () => {
    setLanguage("IGB");
  setOpenLanguage(false);
};

const LanguageHau = () => {
    setLanguage("HAU");
  setOpenLanguage(false);
};

const LanguageText1 = () => {
  if(language=== 'ENG'){
    return(
      <>
 <p className="tabText">
  <span className="transfr">transfr</span> is
  contact-less tap-to-pay NFC/QR<br />
  enabled instant phone-screen to phone-<br />
  screen mobile money transfer app. It is<br />
  designed extremely easy to use with local <br />
  language options, just for
  <span className="italics"> you.</span>


        </p>


        <p className="textHide">
          <span className="transfr">transfr</span> is
  contact-less tap-to-pay <br />
  NFC/QR enabled instant phone-<br />
  screen to phone-screen mobile<br />
  money transfer app. It is designed<br />
  designed extremely easy to use<br />
  with local language options, just <br />
  for<span className="italics"> you.</span>

        </p>
        <p className="textHide3">
         <span className="transfr">transfr</span> is
  contact-less tap-to-pay NFC/QR<br />
  enabled instant phone-screen to phone-<br />
  screen mobile money transfer app. It is<br />
  designed extremely easy to use with local <br />
  language options, just for
  <span className="italics"> you.</span>

        </p>
</>
    )
}

 if(language=== 'YOR'){
    return(
      <>
 <p className="tabText">
          <span className="transfr">transfr</span> ijẹ banki ori foonu ti o
          le lo lati <br/>f'owo ranṣẹ tabi gba owo lati oju foonu<br/>
           si oju foonu. A ṣe pelu irọrun imulo pẹlu <br/>
           awọn aṣayan ede, fun iwọ nikan.


        </p>


        <p className="textHide">
            <span className="transfr">transfr</span> ijẹ banki ori foonu ti o le<br/>
           lo lati f'owo ranṣẹ tabi gba owo<br/>
           lati oju foonu si oju foonu. A ṣe<br/>
           pelu irọrun imulo pẹlu
           awọn <br/>aṣayan ede, fun iwọ nikan.
        </p>
        <p className="textHide3">
            <span className="transfr">transfr</span> ijẹ banki ori foonu ti o le
           lo lati f'owo ranṣẹ<br/> tabi gba owo
           lati oju foonu si oju foonu. A ṣe
           pelu <br/>irọrun imulo pẹlu
           awọn aṣayan ede, fun iwọ nikan.
        </p>
</>
    )
}

 if(language=== 'HAU'){
    return(
      <>
 <p className="tabText">
          <span className="transfr">transfr</span> banki ne na waya wanda zaku iya<br />amfani da shi don aika kuɗi da karɓar kuɗi<br />
           daga allon-waya zuwa allon-waya. Muna <br />sauƙaƙe
            tare da zaɓuɓɓukan harshe,<br /> kawai a gare ku. 


        </p>


        <p className="textHide">
             <span className="transfr">transfr</span> banki ne na waya wanda<br />
             zaku iyaamfani da shi don aika<br />
             kuɗi da karɓar kuɗi
           daga allon-<br /> waya zuwa allon-waya. Muna<br />  sauƙaƙe
            tare da zaɓuɓɓukan<br />  harshe, kawai a gare ku. 
        </p>
        <p className="textHide3">
          <span className="transfr">transfr</span> banki ne na waya wanda
             zaku iyaamfani<br />  da shi don aika
             kuɗi da karɓar kuɗi
           daga allon-<br /> waya zuwa allon-waya. Muna sauƙaƙe
            tare da <br /> zaɓuɓɓukan harshe, kawai a gare ku.
        </p>
</>
    )
}

 if(language=== 'IGB'){
    return(
      <>
 <p className="tabText">
          <span className="transfr">transfr </span>
          bụ ụlọ akụ ekwentị ị nwere ike iji<br />
          ziga ego, wee nweta ego site na ihun-<br/> ekwentị gaa na ihun ekwentị ọzọ. Anyị <br/>mere ka ọ dị mfe site na nhọrọ asụsụ, <br/>naanị maka gị.


        </p>


        <p className="textHide">
          <span className="transfr">transfr</span> bụ ụlọ akụ ekwentị ị nwere<br /> ike iji ziga ego, wee nweta ego site na ihun ekwentị gaa na ihun ekwentị ọzọ. Anyị mere ka ọ dị mfe site na nhọrọ asụsụ, naanị maka gị.
        </p>
        <p className="textHide3">
         <span className="transfr">transfr </span>
           bụ ụlọ akụ ekwentị ị nwere ike iji ziga ego, <br />wee nweta ego site na ihun ekwentị gaa
          na ihun<br /> ekwentị ọzọ. Anyị mere ka ọ dị mfe site na nhọrọ <br />asụsụ, naanị maka gị.
        </p>
</>
    )
}
};

const LanguageText2 = () => {
  if(language=== 'ENG'){
    return(
      <>
 <p className="tabText2">
          You can pay, accept payments,
          <br /> phone-screen to phone-screen,
          <br /> get alerts in seconds. No bank
          <br /> transfer network <span className="italics">wahala.</span>
        </p>
        <p className="tabText2Hide">
          You can pay, accept payments, phone-screen to <br />
          phone-screen, get alerts in seconds. No bank
          <br /> transfer network <span className="italics">wahala.</span>
        </p>
</>
    )
}

 if(language=== 'YOR'){
    return(
      <>
 <p className="tabText2">
          O le sanwo, gba awọn owo, lati<br/>
          oju foonu si oju foonu, waa si gba<br/>
          awọn alaati ni iṣẹju-aaya. Ko ni si<br/>
          iṣoro nẹtiwọki banki kankan ninu.


        </p>


        <p className="tabText2Hide">
            <span className="transfr">transfr</span>
             ijẹ banki ori foonu ti o le
           lo lati f'owo ranṣẹ<br/> tabi gba owo
           lati oju foonu si oju foonu. A ṣe
           pelu<br/> irọrun imulo pẹlu
           awọn aṣayan ede, fun iwọ nikan.
        </p>

</>
    )
}

 if(language=== 'HAU'){
    return(
      <>
 <p className="tabText">
        Kuna iya biya, karɓar biyan kuɗi,<br/>
        daga allon-waya zuwa allon-waya,<br/>
        kuma ku sami alaati cikin daƙiƙa. Ba<br/>
        za a sami matsalar hanyar sadarwa<br/>
        ta banki a ciki ba.


        </p>


        <p className="textHide">
          Kuna iya biya, karɓar biyan kuɗi,<br/>
        daga allon-waya zuwa allon-waya,<br/>
        kuma ku sami alaati cikin daƙiƙa.<br/> Ba
        za a sami matsalar hanyar <br/>sadarwa
        ta banki a ciki ba.
        </p>
        <p className="textHide3">
            Kuna iya biya, karɓar biyan kuɗi,
        daga allon-waya <br/>zuwa allon-waya,
        kuma ku sami alaati cikin daƙiƙa.<br/> Ba
        za a sami matsalar hanyar sadarwa
        ta banki a<br/> ciki ba.
        </p>
</>
    )
}

 if(language=== 'IGB'){
    return(
      <>
 <p className="tabText">
          Ị nwere ike ịkwụ ụgwọ, nweta ụgwọ,<br/> site na ihun-ekwentị gaa ihun-ekwentị, ma nweta alaati n'ime sekọnd. Onweghị nsogbu netwọkụ<br/> ụlọ akụ ọọbula.


        </p>


        <p className="textHide">
            Ị nwere ike ịkwụ ụgwọ, nweta ụgwọ,<br/> site na ihun-ekwentị gaa ihun-ekwentị, ma nweta alaati n'ime sekọnd. Onweghị nsogbu netwọkụ ụlọ akụ ọọbula.
        </p>
        <p className="textHide3">
  Ị nwere ike ịkwụ ụgwọ, nweta ụgwọ, site na ihun-<br/>
  ekwentị gaa ihun-ekwentị, ma nweta alaati n'ime<br/> sekọnd. Onweghị nsogbu netwọkụ ụlọ akụ ọọbula.
  </p>
</>
    )
}
};

const LanguageDivText1 = () => {
  if(language=== 'ENG'){
    return(
      <>
 <p className="text1A">
            Get free food
            <br />and shopping
            <br />vouchers on
            <br /> the transfr app!
          </p>



</>
    )
}

 if(language=== 'YOR'){
    return(
      <>
 <p className="text1A">
             Ya owo ti koni<br/>  owo ele kankan<br/>  ninu ni kia kia<br/>  lori transfr. 
          </p>



</>
    )
}

 if(language=== 'HAU'){
    return(
      <>
 <p className="text1A">
         Aro kudi ba <br/> tare da wani <br/> riba a kan  <br/>transfr.

          </p>
</>
    )
}

 if(language=== 'IGB'){
    return(
      <>
 <p className="text1A">
Gbaziri ego na-<br/>enweghị mmasị<br/> ọ bụla ozugbo ozugbo na<br/>  transfr.

          </p>
</>
    )
}
};


const LanguageDivText2 = () => {
  if(language=== 'ENG'){
    return(
      <>
    <p className="text1A">
            Send and <br /> accept <span className="italics"> instant</span>
            <br />
            transfers from <br />
            your phone <br /> screen!
          </p>



</>
    )
}

 if(language=== 'YOR'){
    return(
      <>
 <p className="text1A">
       Fi owo ranṣẹ,<br/> detun gba owo<br/>  lẹsẹkẹsẹ lati oju<br/>  foonu rẹ!
          </p>



</>
    )
}

 if(language=== 'HAU'){
    return(
      <>
 <p className="text1A">
     Aika da karɓar<br/> kuɗi mai sauri<br/> daga allon <br/>wayarku!

          </p>
</>
    )
}

 if(language=== 'IGB'){
    return(
      <>
 <p className="text1A">
 Zipu ego, nweta<br/> ego ozugbo <br/> ozugbo site n'<br/> ihun ekwentị gị!

          </p>
</>
    )
}
};

const LanguageDivText3 = () => {
  if(language=== 'ENG'){
    return(
      <>
  <p className="text1A">
            Pay all your
            <br />
            bills, buy data
            <br />
            and airtime.
            <br /> One button!
          </p>



</>
    )
}

 if(language=== 'YOR'){
    return(
      <>
 <p className="text1A">
 San gbogbo <br/> owo ina ati DSTV <br/> rẹ, ra data ati<br/> kirẹditi.  Bọtini<br/> kan!
          </p>



</>
    )
}

 if(language=== 'HAU'){
    return(
      <>
 <p className="text1A">
        Biyan duk <br/> kuɗin wutar na<br/> DSTV nku, siyan<br/> bayanai da kiredit.<br/> Maɓalli ɗaya!

          </p>
</>
    )
}

 if(language=== 'IGB'){
    return(
      <>
 <p className="text1A">
 Kwụọ ụgwọ <br/>okwu na DSTV <br/>gị niile, zụta<br/> data na kredit.<br/> Otu bọtịnụ!

          </p>
</>
    )
}
};

const expand1True = () => {

setExpand1(true)
setExpand2(false);
setExpand3(false);

};

const expand2True = () => {
setExpand2(true)
setExpand1(false);
setExpand3(false);
};

const expand3True = () => {
setExpand3(true)
setExpand2(false);
setExpand1(false);
};

const expand1false = () => {

setExpand1(false);


};

const expand2false = () => {
setExpand2(false);

};

const expand3false = () => {
setExpand3(false)

};

return (
  <body>
  <div className="FirstDiv">
    <div className="second">
  <div className="ImageDiv">
                {openLanguage &&
               <div className="button12">
                 <div className="button1" onClick={openLanguageTrue}>
                 {language}
                <img src="https://tinypic.host/images/2023/12/05/DropDown_Transfr.png" alt="" border="0"className="DropDownArrow" />
              </div>

               <div className="createSpace">
               <div className="languages" onClick={LanguageEng}>ENG</div>
                <div className="languages"  onClick={LanguageYor}>YOR </div>
               <div className="languages"  onClick={LanguageHau}>HAU</div>
               <div className="languages" onClick={LanguageIgb}>IGB </div>
</div>
              </div>
}
      <div className="ImageDivider"></div>


          <img src="https://tinypic.host/images/2023/12/05/Logo_Transfr-1.png" alt="" border="0" className="App-logo"/>
           <div className="buttonDiv">
              <p className="changelanguage">change language: </p>
              <div className="button1" onClick={openLanguageTrue}>
            {language}
                <img src="https://tinypic.host/images/2023/12/05/DropDown_Transfr.png" alt="" border="0" className="DropDownArrow"/>
              </div>
 </div>
</div>
</div>

    <div className="secondDiv2">
      <div className="div1">
{LanguageText1()}




      </div>
      <div className="div2">
{LanguageText2()}
      </div>
      <div className="div3">

        <div className="moveDownload">
          <p className="downloadText">
            download the
            <br />
            transfr app:
          </p>
          <div className="buttonDiv2">
<img src="https://tinypic.host/images/2023/12/05/GooglePlayStore_Transfr.png" alt="" border="0" className="googleAndApple"/>

<img src="https://tinypic.host/images/2023/12/05/AppleStore_Transfr.png" alt="" border="0" className="googleAndApple"/>


          </div>
        </div>
      </div>
    </div>

    <div className="secondDiv3">

    <div className="DivAlign">
        <div className="div4">
         {LanguageDivText1()}

           <p className="text1B">
              To qualify, click <br />
              the arrow below.
            </p>
<img src="https://tinypic.host/images/2023/12/05/ArrowTransfer.png" alt="" border="0" className="clickArrow" onClick={expand1True}/>
</div>
        {expand1 === true ? (
          <div className="div42">
         <div className="closeIconDiv1" onClick={expand1false}>

            <img src="https://tinypic.host/images/2023/12/05/CloseIcon_Transfr.png" alt="X" border="0" className="closeIcon"/>
</div>
            <p className="ExpandText">
              Download the <span className="transfr">transfr</span> app. <br />{" "}
              Then, register easy with only your <br />
              name and phone number. Create <br />
              a unique passcode. <br />
              <br />
              In the menu bar, under Transft Cares, <br />
              apply for giveaway. Select gender, name, <br />
              age, religion, location and you are eligible<br />
              for our periodic free food and free<br />
              shopping vouchers.<br />
              <br />
              Redeemable at all Transfr Merchants;<br />
              reasturants and stores near you.
              <br />
              <br />
              <span className="transfr">
                That easy. Download Transfr now! <br />
              </span>
            </p>
          </div>
        ) : null}

        <div className="div5">
      {LanguageDivText2()}

          <p className="text1B">
            To learn more, click
            <br />
             the arrow below.
          </p>
<img src="https://tinypic.host/images/2023/12/05/ArrowTransfer.png" alt="" border="0" className="clickArrow" onClick={expand2True}/>
 </div>

        {expand2 === true ? (
          <div className="div52">
             <div className="closeIconDiv2" onClick={expand2false}>
              <img src="https://tinypic.host/images/2023/12/05/CloseIcon_Transfr.png" alt="" border="0" className="closeIcon"/>
</div>
            <p className="ExpandText">
              Download the <span className="transfr">transfr</span> app. <br />{" "}
              Then, register easy with only your <br />
              name and phone number. Create <br />
              a unique passcode. <br />
              <br />
              Transact with the transfr app <br />
              for a week. Apply for the transfr <br />
              <span className="italics2"> Zero Interest Loan.</span> Choose loan
              <br />
              <span className="italics2"> Repayment Spread:</span> 7 days,{" "}
              <br />
              15 days or 30 days.
              <br />
              <br />
              Submit.
              <br />
              <br />
              <span className="transfr">
                Get loan credited to your <br />
                account in seconds.
              </span>
            </p>
          </div>
        ) : null}
        <div className="div6">
        {LanguageDivText3()}
          <p className="text1B">
            To learn more, click <br />
           the arrow below.
          </p>

<img src="https://tinypic.host/images/2023/12/05/ArrowTransfer.png" alt="" border="0" className="clickArrow2" onClick={expand3True}/>
</div>

        {expand3 === true ? (
          <div className="div62">
                  <div className="closeIconDiv3" onClick={expand3false}>
   <img src="https://tinypic.host/images/2023/12/05/CloseIcon_Transfr.png" alt="" border="0" className="closeIcon"/>
            </div>
            <p className="ExpandText2">
              Download the <span className="transfr">transfr</span> app. <br />{" "}
              Then, register easy with only your <br />
              name and phone number. Create <br />
              a unique passcode. <br />
              <br />
              Transact with the transfr app <br />
              for a week. Apply for the transfr <br />
              <span className="italics2"> Zero Interest Loan.</span> Choose loan
              <br />
              <span className="italics2"> Repayment Spread:</span> 7 days,{" "}
              <br />
              15 days or 30 days.
              <br />
              <br />
              Submit.
              <br />
              <br />
              <span className="transfr">
                Get loan credited to your <br />
                account in seconds.
              </span>
            </p>
          </div>
        ) : null}
      </div>
      <div className="DivAlign2">
        {expand1 === true ? (
          <div className="div422">
            <div className="createspace">
              <div></div>
              <div className="closeIconMobile" onClick={expand1false}>
             <img src="https://tinypic.host/images/2023/12/05/CloseIcon_Transfr.png" alt="" border="0" className="closeIcon"/>
            </div>
            </div>
             <p className="ExpandText">
              Download the <span className="transfr">transfr</span> app. <br />{" "}
              Then, register easy with only <br />
              your name and phone number. <br />
              Create a unique passcode. <br />
              <br />
              In the menu bar, under  <br />
              Transfr Cares, apply for<br />
              giveaway. Select gender,<br />
              name, age, religion, <br />
              location and you are<br />
              eligible for our periodic<br />
              free food and free <br />
              shopping vouchers.<br />
              <br />
              Redeemable at all Transfr<br />
              Merchants; restaurants and <br />
              stores near you.
              <br />
              <br />
              <span className="transfr">
                That easy. Download <br />
                Transfr now! <br />
              </span>
            </p>

            <div className="">
          <img src="https://tinypic.host/images/2023/12/05/ZeroPercentIllustration_Transfr.png" alt="" border="0"  className="Zero2"/>
            </div>
          </div>
        ) : (
          <div className="div4">
          {LanguageDivText1()}
            <p className="text1B">
              To qualify, click <br />
              the arrow below.
            </p>
<img src="https://tinypic.host/images/2023/12/05/ArrowTransfer.png" alt="" border="0" className="clickArrow" onClick={expand1True}/>


            <div className="">
          <img src="https://tinypic.host/images/2023/12/05/ZeroPercentIllustration_Transfr.png" alt="" border="0"  className="Zero"/>
            </div>
          </div>
        )}

        {expand2 === true ? (
          <div className="div522">
   <div className="createspace">
              <div></div>
              <div className="closeIconMobile" onClick={expand2false}>
              <img src="https://tinypic.host/images/2023/12/05/CloseIcon_Transfr.png" alt="" border="0" className="closeIcon"/>
            </div>
            </div>
             <p className="ExpandText">
              Download the <span className="transfr">transfr</span>  <br />{" "}
              app. Then, register easy
              <br />
              with only your name and  <br />phone number. Create a  <br />unique passcode. <br />
              <br />
              Transact with the transfr <br />
              app for a week. Apply for <br />
              the transfr
              <span className="italics2">
                Zero Interest <br />
                Loan.
              </span>
              Choose loan
              <br />
              <span className="italics2"> Repayment Spread:</span> 7 days,{" "}
              <br />
              15 days or 30 days.
              <br />
              <br />
              Submit.
              <br />
              <br />
              <span className="transfr">
                Get loan credited to your <br />
                account in seconds.
              </span>
            </p>

            <div className="">

              <img src="https://tinypic.host/images/2023/12/05/ArrowIllustration_Transfr.png" alt="" border="0" className="Arrow2"/>
            </div>

          </div>
        ) : (
          <div className="div5">
           {LanguageDivText2()}
            <p className="text1B">
              To learn more, click <br />
              the arrow below.
            </p>

<img src="https://tinypic.host/images/2023/12/05/ArrowTransfer.png" alt="" border="0" className="clickArrow" onClick={expand2True}/>
            <div className="">
              <img src="https://tinypic.host/images/2023/12/05/ArrowIllustration_Transfr.png" alt="ArrowIllustration_Transfr.png" border="0" className="Arrow"/>
            </div>
          </div>
        )}

        {expand3 === true ? (
          <div className="div622">
   <div className="createspace">
              <div></div>
              <div className="closeIconMobile" onClick={expand3false}>
           <img src="https://tinypic.host/images/2023/12/05/CloseIcon_Transfr.png" alt="" border="0" className="closeIcon"/>
            </div>
            </div>
              <p className="ExpandText">
              Download the <span className="transfr">transfr</span>  <br />{" "}
              app. Then, register easy
              <br />
              with only your name and  <br />phone number. Create a  <br />unique passcode. <br />
              <br />
              Transact with the transfr <br />
              app for a week. Apply for <br />
              the transfr
              <span className="italics2">
                Zero Interest <br />
                Loan.
              </span>
              Choose loan
              <br />
              <span className="italics2"> Repayment Spread:</span> 7 days,{" "}
              <br />
              15 days or 30 days.
              <br />
              <br />
              Submit.
              <br />
              <br />
              <span className="transfr">
                Get loan credited to your <br />
                account in seconds.
              </span>
            </p>
            <div className="ImageMargin3">
           <img src="https://tinypic.host/images/2023/12/05/BillsIllustration_Transfr.png" alt="" border="0" className="Bills2"/>
            </div>
          </div>
        ) : (
          <div className="div6">
           {LanguageDivText3()}
            <p className="text1B">
              To learn more, click <br />
              the arrow below.
            </p>

         <img src="https://tinypic.host/images/2023/12/05/ArrowTransfer.png" alt="" border="0" className="clickArrow" onClick={expand3True}/>
            <div className="ImageMargin3">
          <img src="https://tinypic.host/images/2023/12/05/BillsIllustration_Transfr.png" alt="" border="0" className="Bills"/>
            </div>
          </div>
        )}
      </div>

      <div className="ImageMargin">
        <div className="ImageMargin1">

          <img src="https://tinypic.host/images/2023/12/05/ZeroPercentIllustration_Transfr.png" alt="" border="0"  className="Zero"/>
        </div>
        <div className="ImageMargin2">

            <img src="https://tinypic.host/images/2023/12/05/ArrowIllustration_Transfr.png" alt="" border="0" className="Arrow"/>
        </div>
        <div className="ImageMargin3">

          <img src="https://tinypic.host/images/2023/12/05/BillsIllustration_Transfr.png" alt="" border="0" className="Bills"/>
        </div>
      </div>
    </div>

    <div className="secondDiv4">
      <div className="div7">
        <p className="tabText4">
          <span className="transfr">transfr</span> is a contact-less instant
          phone-screen to phone-screen mobile <br />
          money transfer. Designed extremely easy to use with local language{" "}
          <br /> options, just for
          <span className="italics"> you.</span>
        </p>
        <p className="textHide2">
          <span className="transfr">transfr</span> is a contact-less instant
          phone-
          <br />
          screen to phone-screen mobile money
          <br />
          transfer. Designed extremely easy to
          <br />
          use with local language options, just
          <br />
          for <span className="italics"> you.</span>
        </p>
        <p className="tabText2Hide">
          <span className="transfr">transfr</span> is a contact-less instant
          phone-screen to
          <br />
          phone-screen mobile money transfer. Designed
          <br />
          extremely easy to use with local language
          <br />
          options, just for <span className="italics"> you.</span>
        </p>
      </div>
    </div>


      <div className="DisplayTextAndIcon">

       <p className="tabText5">
              <span className="transfr">transfr</span> is simply 'Applepay for the African Informal Economy'. Check here for our  <Link to={'/privacypolicy'} style={{ borderBottomColor:'#4744c4',textDecorationColor:"#4744c4"}}>
               <span className="privacypolicy"> Privacy Policy</span>
               </Link>
            </p>


         <div className="IconDisplay">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="icon"
            // onClick={openLanguageTrue}
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faYoutube} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faWhatsapp} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faXTwitter} className="icon"></FontAwesomeIcon>
        </div>
      </div>

  </div>
  </body>
);
}

export default Home;
