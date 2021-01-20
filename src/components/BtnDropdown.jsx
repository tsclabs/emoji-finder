import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { onClickOutside } from '../shared/utils.js'

const Holder = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: -4px;
  z-index: 5;
  background-color: #ffffff;
  width: 100px;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

  ul {
    margin: 0;
    list-style: none;
    li {
      margin: 0;
      padding: 8px 14px;
      &:hover {
        cursor: pointer;
        background-color: #eeeeee;
      }
    }
  }
`;

export default function BtnDropdown (props) {
  const [ dropdownVisible, setDropdownVisible ] = useState(false);
  const dropdownRef = useRef(null);
  
  const toggleDropdown = state => {
    setDropdownVisible(state !== undefined ? state : !dropdownVisible);
  }
  
  onClickOutside(dropdownRef, () => {
    toggleDropdown(false);
  });
  
  return (
    <Holder>
      <div className={props.btnClass} onClick={toggleDropdown}>
        {props.btnContent}
      </div>
      
      {dropdownVisible && 
        <Dropdown ref={dropdownRef} onClick={() => toggleDropdown(false)}>
          {props.children}
        </Dropdown>
      }
    </Holder>
    )
  }