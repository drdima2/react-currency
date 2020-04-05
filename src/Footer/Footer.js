import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-bottom">
                <div className="container">
                    <div className="flex-container">
                        <div className="flex-item">
                            <h1 className="footer-title"><a href="https://itgid.info">2019 &copy React. Lite Level</a></h1>
                            <p> All Rights Reserved</p>
                        </div>
                        <div className="flex-item">
                            <div className="module-body">
                                <ul className="list-unstyled">
                                    <li><a href="/sitemap/" tooltip="Site Map">Site map</a></li>
                                    <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-item">
                            <div className="module-body">
                                <ul className="list-unstyled">
                                    <li><a href="/contact/" tooltip="Contacts">Contacts</a></li>
                                    <li><a href="/d">Warranty</a></li>
                                    <li><a href="/s">About Us</a></li>
                                    <li><a href="/o">Return policy</a></li>
                                    <li><a href="/p">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-bar">
                <div className="flex-container">
                    <div className="flex-item">
                        <ul className="link"></ul>
                    </div>
                    <div className="flex-item">
                        <div className="clearfix payment-methods">
                            <ul>
                                <img src="/skin/default/images/dummy.png"
                                     data-toogle="tooltip" data-placement="top"
                                     data-original-title="wenmoney.ru" alt=""/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
