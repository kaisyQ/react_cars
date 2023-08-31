import React from 'react';

import {NavLink} from 'react-router-dom';

import MessageElements from './MessageElements';

const Message = () => {
    return (
        <>
            <MessageElements.Title>
                There is nothing here...
            </MessageElements.Title>  

            <NavLink to={'/'}>
                
                <MessageElements.BtnWrapper>
                    
                    <MessageElements.BackHomeButton>
                        Back to Home
                    </MessageElements.BackHomeButton>
                
                </MessageElements.BtnWrapper>
            
            </NavLink>      
        </>
    );
}


export default Message;