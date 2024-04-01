import React from "react";
import "../design/landing.css";
import av from "../media/av.jpg";
import logomandi from "../media/logomandi.png";
import crop from "../media/crop.jpg";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <div className="landingpage">
        <div className="head">
          <img src={logomandi} alt="logomandi" className="headimage" />
          <img src={av} alt="av" className="headimage" />
        </div>
        <div className="navcontainer">
          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Products</li>
              <li>Clients</li>
              <li>Contact</li>
              <Link to="/login">
              <li>Login</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="header-containner">
          <img src={crop} alt="crop" className="headcontimage" />
        </div>
        <div className="containeer">
          <div className="card">
            <img src={logomandi} alt="logomandi" className="card__image " />
            <p className="card__name">Admin</p>

         <Link to="/adminlogin"> <button className="btn draw-border">Sign in</button></Link>  
           
          </div>
          <div className="card">
            <img src={logomandi} alt="logomandi" className="card__image " />
            <p className="card__name">Farmer</p>

            <Link to="/farmer"> <button className="btn draw-border">Sign in</button></Link>  
         
          </div>
          <div className="card">
            <img src={logomandi} alt="logomandi" className="card__image " />
            <p className="card__name">Traders</p>
            <Link to="/merchant"> <button className="btn draw-border">Sign in</button></Link>  
            
          </div>

          <table class="parentmar">
            <tr>
              <td class="childmar">NEWS</td>
              <td>
                <marquee>IMPORTANT NEWS RELATED TO EMANDI MARKET ;</marquee>
              </td>
            </tr>
          </table>
        </div>

        <div class="rightcontainer">
          <p>पोर्टल प्रमुख लिंक</p>
          <ul>व्यापारी सत्यापन करें</ul>
          <ul>व्यापारी पंजीयन के लिये यूजर मैनुअल डाउनलोड करें</ul>
          <ul>वाहन की जानकारी खोजें</ul>
          <ul>मंडी अधिनियम संशोधन हेतु सुझाव आमंत्रण सूचना</ul>
          <ul>Download Souda-Patrak User Manual</ul>
          <ul>RFP for Selection of Agency for PMU for AIF</ul>
        </div>
        <div class="rightcontainer">
          <h1>मध्यप्रदेश राज्य कृषि विपणन बोर्ड</h1>
          <p>
            कृषि उत्‍पादन के विपणन में उत्‍पादक कृषकों के हितों को सर्वोपरि रखने
            की राज्‍य शासन की नीति रही है। कृषि उत्‍पादन के नियमित एवं सर्वांगीण
            विकास के लिये, राष्‍ट्रीय कृषि आयोग की अनुशंसा के आधार पर
            मध्‍यप्रदेश राज्‍य कृषि विपणन बोर्ड के गठन का प्रावधान वर्ष 1973 में
            मण्‍डी अधिनियम में किया गया है। वर्ष 1973 से सतत रुप से प्रदेश की
            कृषि उपज मण्डियों के विकास के लिये मण्‍डी बोर्ड निम्‍न उद्वेश्‍यों
            के लिये सतत प्रयत्‍नशील है।
          </p>
          <ul>
            कृषि उत्‍पादन के विक्रेता को प्रतिस्‍पर्धात्‍मक मूल्‍य दिलाना, सही
            तौल के लिये व्‍यवस्‍थायें करना एवं उत्‍पादक को उसी दिन मूल्‍य का
            भुगतान कराना।
          </ul>
          <ul>
            मण्डियों की स्‍थापना के लिये सर्वेक्षण, साईट प्‍लान्‍स एवं मास्‍टर
            प्‍लान का सम्‍पादन।
          </ul>
          <ul>
            मण्‍डी प्रांगणों एवं उपमण्‍डी प्रांगणों में सुचारु विपणन के लिये
            नियोजित तरीके से मूलभूत सुविधायें विकसित करना।
          </ul>
          <ul>वित्‍तीय रुप से कमजोर मण्‍डी समितियों को ॠण अथवा अनुदान देना।</ul>
          <ul>
            मण्‍डी अधिनियम तथा उसके अधीन बनाये गये नियमों तथा उपविधियों के
            उपबंधों को कार्यान्वित करना, सुचारु एवं बेहतर विपणन व्‍यवस्‍था
            स्‍थापित करने के लिये अधिनियम एवं तदाधीन नियमों में आवश्‍यक संशोधन
            के लिये समय समय पर राज्‍य शासन को सुझाव प्रस्‍तुत करना।
          </ul>
        </div>
        
            <footer class="footer-distributed">

            <div class="footer-left">

              <h3>E<span>Mandi</span></h3>

              <p class="footer-links">
                <a href="#" class="link-1">Home</a>
                
                <a href="#">Blog</a>
              
                <a href="#">Pricing</a>
              
                <a href="#">About</a>
                
                <a href="#">Faq</a>
                
                <a href="#">Contact</a>
              </p>

              <p class="footer-company-name">Company Name © 2015</p>
            </div>

            <div class="footer-center">

              <div>
                <i class="fa fa-map-marker"></i>
                <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
              </div>

              <div>
                <i class="fa fa-phone"></i>
                <p>+1.555.555.5555</p>
              </div>

              <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">support@company.com</a></p>
              </div>

            </div>

            <div class="footer-right">

              <p class="footer-company-about">
                <span>About the company</span>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
              </p>

              <div class="footer-icons">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

              </div>

            </div>

            </footer>
      </div>
    </>
  );
};

export default LandingPage;
