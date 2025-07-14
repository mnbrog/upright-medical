import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
  background: #EAECEF;
  color: #334D6E;
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; {new Date().getFullYear()} Upright Medical Solutions. All Rights Reserved.</p>
  </FooterWrapper>
);

export default Footer;
