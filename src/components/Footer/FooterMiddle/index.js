import "./style.scss"
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.png';
import img6 from '../../../assets/img6.png';
import img7 from '../../../assets/img7.png';
import img8 from '../../../assets/img8.png';

import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import linkedin from '../../../assets/linkedin.svg';
import youtube from '../../../assets/youtube.svg';
import facebookLike from '../../../assets/facebook-like.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const FooterMiddle = () => {
    const peopleImages = [img1, img2, img3, img4, img5, img6, img7, img8];
    const socialMedia = [facebook, instagram, linkedin, youtube];
    const informationInfo = ["Seed utrices purus non.", "Sodales sodales.", "Curabitur pretium dui vitae", "Donec gravida mi in nisl.", "Faucibus leo condimentrum.", "Donec et lorem suscipit."];
    const contactInfo = ["Leo Store", "Leopards media", "KVM Rpad, 4590GH", "+1 489-8888-0099", "mail@email.com"]
    return (
        <div className="footer-middle">
            <div className="container">
                <div className="footer-middle__wrapper">
                    <article className="footer-middle__facebook">
                        <h3 className="footer-middle__title">facebook</h3>
                        <p className="footer-middle__facebook-members">20000 Members</p>
                        <button className="footer-middle__btn-like" type="button">
                            <img className="footer-middle__btn-img" src={facebookLike} />
                        </button>
                        <div className="footer-middle__img-wrapper">
                            {peopleImages.map((img, i) => <img key={i} className="footer-middle__img" src={img}/>
                            )}
                        </div>
                        <p className="footer-middle__facebook-txt">facebook Social plugin</p>
                    </article>
                    <article className="footer-middle__twitter">
                        <h3 className="footer-middle__title">from twitter</h3>
                        <div className="footer-middle__twitter-info">
                            <div className="footer-middle__twitter-item">
                                <div className="footer-middle__wrap-img">
                                    <svg fill="#39a0b9" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
                                </div>
                                <p className="footer-middle__twitter-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            </div>
                            <div className="footer-middle__twitter-item">
                                <div className="footer-middle__wrap-img">
                                    <svg fill="#39a0b9" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
                                </div>
                                <p className="footer-middle__twitter-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            </div>
                        </div>
                    </article>
                    <article className="footer-middle__information">
                        <h3 className="footer-middle__title">information</h3>
                        <div className="footer-middle__information-list">
                            {informationInfo.map((txt, i) => {
                                return (
                                    <div key={i} className="footer-middle__information-item">
                                        <FontAwesomeIcon className="footer-middle__arrow" icon={faAngleRight} /> 
                                        <p className="footer-middle__text-info">{txt}</p> 
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                    <article className="footer-middle__contact">
                        <h3 className="footer-middle__title">contact us</h3>
                        {contactInfo.map((txt, i) => <p className="footer-middle__text text-contact" key={i}>{txt}</p>)}
                        <div className="footer-middle__social-networks">
                            {socialMedia.map((icon, i) => <a key={i} className="footer-middle__social-networks-link" href="#">
                            <img className="footer-middle__social-networks-icon" src={icon}/>
                            </a>)} 
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default FooterMiddle;