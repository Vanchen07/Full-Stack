import React from 'react'

class Footer extends React.Component {

    render() {  
        return(
            <div className='splash-footer'>
                <div className="footer-text">
                    <img src={window.logo} className="footer-logo"/>
                    Pick-a-Table was inspired by the restaurant reservation app OpenTable. This project was created purely for educational purposes. All images used are fron Unsplash.
                </div>
                <h6 className="footer-heading" >Follow me on</h6>
                <div className="footer-social">
                    <div className="footer-social-icons">
                        <a target="_blank" href="https://www.linkedin.com/in/vanessa-chen-/">
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                    </div>
                    <div className="footer-social-icons">
                        <a target="_blank" href="https://github.com/Vanchen07">
                            <i className="fab fa-github fa-lg"></i>
                        </a>
                    </div>
                    <div className="footer-social-icons">
                        <a target="_blank" href="https://angel.co/vanessa-chen-7">
                            <i className="fab fa-angellist fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}   

export default Footer;