import React from 'react';
import '../../css/Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className='footer'>

            <div className="title">
                <h2>WEBSITE TITLE</h2>
                <p>ⒸPhoto, Inc. 2019. We Love Our Users!</p>
            </div>

            <div className="footer-right">
                <div className="footer-buttons-container">
                    <Link className="button" to='/'><p>HOME</p></Link>
                    <Link className="button" to='/category'><p>CATEGORY</p></Link>
                    <Link className="button" to='/reservations'><p>RESERVATIONS</p></Link>
                    <Link className="button" to='/contactus'><p>CONTACT US</p></Link>
                </div>
                <div className="footer-right-second">
                    <div className='frs-1'>
                        <p className='footeremaillogo'></p>loremipsum@gmail.com
                    </div>
                    <div className="frs-2">
                        <button className='regibutton'>REGISTER</button>
                        <button className='loginbutton'>LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;