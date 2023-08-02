import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: contents;
`;

const Footer = () => {
  return <FooterContainer>
            <footer class="footer mt-auto py-3 bg-light">
                    <div class="container">
                        <span class="text-muted"><center>Proyecto Inui 2023</center></span>
                    </div>
            </footer>
        </FooterContainer>;
};

export default Footer;