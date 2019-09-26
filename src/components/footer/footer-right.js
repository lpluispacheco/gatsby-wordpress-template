import React, { Component } from "react"
import Logo from "../../images/main/footer/new-black-full-logo.svg"
import Fb from "../../images/main/footer/fb-ico.svg"
import Ig from "../../images/main/footer/ig-logo.svg"
import Twitter from "../../images/main/footer/twitter-logo.svg"
import { MdPhone } from "react-icons/md"
import { MdEmail } from "react-icons/md"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="svg-up-wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1280"
            height="430"
            viewBox="0 0 1280 430"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V430a96.576,96.576,0,0,1,.64-11.15,94.3,94.3,0,0,1,1.92-10.79C15.71,352.73,78.9,311.48,171,278.48v-.159c116.77-41.85,280-70.44,446.67-97.681,6-1,12-2,18-2.93,47.23-7.71,94.65-15.31,141.23-23.14,3.73-.61,7.45-1.25,11.16-1.87,2.72-.46,5.431-.93,8.131-1.37l7.59-1.291,2.05-.35c5.07-.869,10.139-1.74,15.179-2.62C890.64,135,957.62,122.29,1018.56,108c5.45-1.29,10.86-2.569,16.21-3.88q13.49-3.28,26.54-6.7,7.53-2,14.9-4l1.2-.329c5.65-1.53,11.2-3.1,16.691-4.691,1.2-.329,2.36-.68,3.54-1,81-23.559,145.33-51.53,182.08-86.95l.28-.26V0Z"
              transform="translate(1280 430) rotate(180)"
              fill="#2098d1"
            />
          </svg>
        </div>
        <div className="container-full">
          <div className="container">
            <div className="item-1">
              {/* logo */}
              <img src={Logo} className="nomatives-logo" alt="nomatives logo" />
              <div className="footer-contact">
                <div className="footer-title">Contactanos</div>

                <div className="footer-email">
                  <MdEmail className="email-logo" />
                  {/* <img src={Email} className="email-logo" alt="email icon" /> */}
                  <p className="email">contacto@nomatives.com</p>
                </div>
                <div className="footer-phone">
                  <MdPhone className="phone-logo" />
                  {/* <img src={Phone} className="phone-logo" alt="phone icon" /> */}
                  <p className="phone">+41 76 586 38 95</p>
                </div>
              </div>
            </div>

            <div className="item-2">
              <img src={Fb} className="fb-logo" alt="facebook logo" />
              <img src={Ig} className="ig-logo" alt="instagram logo" />
              <img src={Twitter} className="tw-logo" alt="twitter logo" />
            </div>
            <div className="item-3 text-center">
              <p className="copyright">
                Copyright 2019 © <b>Nomatives</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
