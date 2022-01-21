import React from 'react'
import './footer.css'
import logo from '../../images/amazon.png'


function Footer() {


    return (
        <div>
            <footer>
                <section className='footer-container'>
                    <button className='backButton' onClick={(e)=>{
                        e.preventDefault()
                        window.scrollTo(0, 0)
                    }}>Back to top</button>
                    <div className="footerContent">
                        <img src={logo} alt="" className="footer-logo" />
                    </div>
                    <div className="footer-policy">
                        <p className='footer-policy-text'>Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer
