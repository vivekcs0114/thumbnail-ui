/**
 *
 * UploadImage
 *
 */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultAction, UploadImageAction } from './action';
import InputFile from './components/InputFile';
import DropDown from './components/DropDown';
import Button from './components/Button';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  background: #c3e6fc;
  border: 1px solid;
  padding: 15px;
  height: 450px;
`;

const LinkDiv = styled.div`
  padding-top: 20px;
`;

export function UploadImage() {

  const uploadImage = useSelector((state) => state.uploadImage);
  const dispatch = useDispatch();
  const [fileDetail, setFileDetail] = useState({});
  const [resolution, setResolution] = useState('10x10');

  useEffect(() => {
    dispatch(defaultAction());
  }, [dispatch]);

  const onFileUpload = event => {
    const inputFile = {};
    inputFile.file = event.target.files[0];
    inputFile.fileName = event.target.files[0].name;
    setFileDetail(inputFile);
  }

  const onResolutionChange = event => {
    setResolution(event.target.value);
  }

  const onUploadButtonClick = () => {
    if (Object.keys(fileDetail).length > 0) {
      const formData = new FormData();
      formData.append(`${fileDetail.fileName}`, fileDetail.file);
      formData.append(`resolution`, resolution);
      dispatch(UploadImageAction(formData));
    }
  }

  return (
    <Container>
      <InputFile
        onChange={onFileUpload}
      />
      <DropDown
        onChange={onResolutionChange}
      />
      <Button
        onClick={onUploadButtonClick}
      />
      {uploadImage.imageUrl && <LinkDiv>
        Sharable URL <a href={uploadImage.imageUrl}>{uploadImage.imageUrl}</a>
        </LinkDiv>
      }
    </Container>
  );
}

UploadImage.propTypes = {
  message: PropTypes.string,
};

export default UploadImage;
