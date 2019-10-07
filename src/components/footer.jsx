import React from 'react';

const Footer = () => {
    return (
        <footer className="rtl float-left navbar navbar-dark bg-dark col-md-9 ml-sm-auto col-lg-10 px-4 shadow">
            <div className="copyright">
                <span className="fa fa-copyright m-1">
                    تمامی حقوق این سایت محفوظ میباشید
                </span>
            </div>
            <div className="socialmedia">
                <a
                    className="fa fa-instagram m-1"
                    href="http://instagram.com"
                />
                <a
                    className="fa fa-facebook-official m-1"
                    href="http://facebook.com"
                />
            </div>
        </footer>
    );
};

export default Footer;