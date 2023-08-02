import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: contents;
  .bg-orange {
    background-color: #E76B24; 
  }
`;

const Header = () => {
  return <HeaderContainer>
               <nav class="navbar navbar-dark bg-orange">
                    <div class="container">
                        <a class="navbar-brand" href="/">REACT CRUD PACIENTES INUI</a>
                    </div>
                </nav>
        </HeaderContainer>;
};

export default Header;