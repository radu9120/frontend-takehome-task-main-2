import React from "react";
import * as S from "./styles";
import FacebookIcon from "../assets/social-icons/facebook";
import InstagramIcon from "../assets/social-icons/instagram";
import LinkedInIcon from "../assets/social-icons/linkedin";
import TikTokIcon from "../assets/social-icons/tiktok";
import TwitterIcon from "../assets/social-icons/twitter";
import YouTubeIcon from "../assets/social-icons/youtube";

import BoundedContainer from "../Bounded";

const FooterNew = () => {
  return (
    <S.FooterContainer>
      <BoundedContainer maxWidth="1580px">
        <S.ContentContainer>
          <S.CompanyInfo>
            <S.CompanyLogo>
              <img src="/footer-logo.svg" alt="courtcorrect logo" />{" "}
            </S.CompanyLogo>
            <p>Justice for all.</p>
            <p>
              <a href="mailto:hello@courtcorrect.com">hello@courtcorrect.com</a>
            </p>
            <p>33 Percy St, London W1T 2DF</p>
            <p>020 7867 3925</p>
          </S.CompanyInfo>

          <S.LinksWrapper>
            <S.QuickLinks>
              <h4>Quick Links</h4>
              <a href="/">Home</a>
              <a href="/">Data</a>
              <a href="/">Cases</a>
              <a href="/">Customers</a>
              <a href="/" className="active">
                Search Engine
              </a>
              <a href="/">Custom Fields</a>
              <a href="/">Support</a>
            </S.QuickLinks>

            <S.LegalLinks>
              <h4>Legals</h4>
              <a href="/">Terms & Conditions</a>
              <a href="/">Privacy Policy</a>
              <a href="/">AI Safety Policy</a>
              <a href="/">Cookie Policy</a>
              <a href="/">Compliance Statement</a>
            </S.LegalLinks>
          </S.LinksWrapper>
        </S.ContentContainer>

        <S.FooterBottom>
          <S.BorderLine />
          <S.BottomContent>
            <p>© 2023 CourtCorrect LTD</p>
            <S.SocialMediaIcons>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon width={24} height={24} fill="#6F7170" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon width={24} height={24} fill="#6F7170" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon width={24} height={24} fill="#6F7170" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <TikTokIcon width={24} height={24} fill="#6F7170" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon width={24} height={24} fill="#6F7170" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon width={24} height={24} fill="#6F7170" />
              </a>
            </S.SocialMediaIcons>
          </S.BottomContent>
        </S.FooterBottom>
      </BoundedContainer>
    </S.FooterContainer>
  );
};

export default FooterNew;
