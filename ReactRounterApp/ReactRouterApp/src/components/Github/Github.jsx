import React from 'react'
import  { useState, useEffect } from 'react';
import styled from 'styled-components';

const Github= ({ message='Thank You' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const ThankYouContainer = styled.div`
    display: none;
    opacity: 0;
    transition: opacity 0.5s;
    text-align: center;
    margin-top: 20px;

    &.visible {
      display: block;
      opacity: 1;
    }
  `;

    return (
        <ThankYouContainer className={isVisible ? 'visible' : ''}>
            <h2>{message}</h2>
        </ThankYouContainer>
    );
};

export default Github;

