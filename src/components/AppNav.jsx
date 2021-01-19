import React from 'react'
import styled from 'styled-components'

const AppNav = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 14px;
  font-size: 22px;
  background-color: #ffffff;

  > div .beta-badge {
    color: #ffffff;
    line-height: 1;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 25px;
    margin-left: 8px;
    font-weight: 700;
    display: inline-block;
    background-color: orange;
    transform: translateY(-12px);
  }
`;

export default () => {
  return (
    <AppNav>
      <div style={{ color: '#6a0dad' }}>
        Emoji<strong>Finder</strong>
        <span className="beta-badge">Beta</span>
      </div>
    </AppNav>
  )
}