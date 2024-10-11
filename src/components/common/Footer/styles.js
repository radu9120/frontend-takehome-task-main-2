import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f5f9f5;
  padding: 20px 40px;
  z-index: 999;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const CompanyInfo = styled.div`
  flex: 1;

  p {
    color: #333;
    font-size: 14px;
    margin: 5px 0;
    line-height: 1.6;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 12px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CompanyLogo = styled.div`
  margin-bottom: 10px;

  img {
    width: 220px;
    height: 32px;

    @media (max-width: 768px) {
      width: 180px;
      height: auto;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  flex: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: row; /* Aligns them side by side */
    justify-content: space-between;
    margin-top: 20px;
    width: 100%; /* Ensures full width for better spacing */
  }
`;

export const QuickLinks = styled.div`
  text-align: right;

  h4 {
    color: #333;
    font-weight: 600;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      text-align: left; /* Align left on mobile */
    }
  }

  a {
    display: block;
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin-bottom: 8px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  a.active {
    font-weight: bold;
  }
`;

export const LegalLinks = styled(QuickLinks)`
  @media (max-width: 768px) {
    text-align: left; /* Keep the alignment consistent */
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
`;

export const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #6f7170;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 10px;

  svg {
    color: #333;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #008347;
    }

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
