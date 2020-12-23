
const initialState = {
    message: '',
    isUploaded: false,
    imageUrl: '',
}

export default function uploadImage(state = initialState, action) {
    switch (action.type) {
        case 'MESSAGE':
            return {
                ...state,
                message: action.data,
            };
        case 'UPLOAD_RESPONSE':
            return {
                ...state,
                isUploaded: action.data.status,
                imageUrl: action.data.imageUrl
            };
        default:
            return state
    }
}
