import React from 'react';

import Logo from './../../images/logo.png';

import FooterElements from './FooterElements';

const Footer = () => {
    return (
        <>

            <FooterElements.Wrapper>


                <FooterElements.LogoWrapper>

                    <FooterElements.Logo src={Logo} alt='logo' />

                </FooterElements.LogoWrapper>


                <FooterElements.CopyRight>
                    
                    {`© ${(new Date).getFullYear()} Cars. All rights reserved.`}
                    
                </FooterElements.CopyRight>

            </FooterElements.Wrapper>

        </>
    );
}

export default Footer;
