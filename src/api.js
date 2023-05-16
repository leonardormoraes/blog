export const API_URL = 'http://localhost:5500';

export function GET_POSTS() {
    return {
        url: `${API_URL}`,
        options: {
            method: 'GET',
        },
    }
}

export function GET_POST(id) {
    return {
        url: `${API_URL}/posts/${id}`,
        options: {
            method: 'GET',
        },
    }
}