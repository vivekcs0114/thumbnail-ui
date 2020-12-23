/**
 *
 * InputFile
 *
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid;
    width: 50%;
    margin-left: 25%;
`;

const FileInput = styled.input`
  width: 100%;
  height: 150px;
  cursor: pointer;
  padding: 50px;
`;

export function InputFile(props) {

  return (
    <Container>
      <FileInput
        type="file"
        name="upload"
        accept=".jpeg,.png,.jpg"
        onChange={props.onChange}
      />
    </Container>
  );
}

export default InputFile;
