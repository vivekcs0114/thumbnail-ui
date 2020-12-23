/**
 *
 * DropDown
 *
 */

import React from 'react';
import styled from 'styled-components';

const DropDownView = styled.div`
    margin: 20px 20px;
`;

const SelectStyle = styled.select`
    background-color: #fcf8bd;
`;

export function DropDown(props) {

  return (
    <DropDownView>
      <SelectStyle name="resolutions" id="resolutions" onChange={props.onChange}>
        <option value="10x10">10x10</option>
        <option value="20x20">20x20</option>
        <option value="50x50">50x50</option>
      </SelectStyle>
    </DropDownView>
  );
}

export default DropDown;
