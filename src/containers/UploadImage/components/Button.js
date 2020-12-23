/**
 *
 * Button
 *
 */

import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.input`
  cursor: pointer;
  background-color: #fcf8bd;
`;

export function Button(props) {

  return (
    <div>
      <ButtonStyle
        type="button"
        value="Generate Thumbnail"
        onClick={props.onClick}
      />
    </div>
  );
}

export default Button;
