import axios from 'axios';

export const defaultAction = () =>
    dispatch => {
        dispatch({
            type: 'MESSAGE',
            data: 'Hello, It is working now.'
        })
    };

export const UploadImageAction = (data) => {
    const uploadState = {
        imageUrl: '',
        status: false
    }
    return function(dispatch) {
        axios.post('http://localhost:8000/api/upload/', data)
        .then((response) => {
            uploadState.imageUrl = response.data.data;
            uploadState.status = true;
            dispatch({
                type: 'UPLOAD_RESPONSE',
                data: uploadState
            });
        })
        .catch((error) => {
            dispatch({
                type: 'UPLOAD_RESPONSE',
                data: uploadState
            });
            console.error('There was an error!', error);
        })
    }
}
