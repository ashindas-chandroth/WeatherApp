import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

interface Request {
    name: string;
    apikey: string;
}

export const list = (request: Request) => {
    return async (dispatch: any) => {
        try {
            const req=`https://api.openweathermap.org/data/2.5/weather?q=${request.name}&appid=${request.apikey}`
            console.log(req)
            const response = await axios.get(
                req
            );

            const data = response.data;
            console.log(data);
            dispatch({ type: SUCCESS, payload: data });
        } catch (error: any) {
            const errorMessage = error.response
                ? error.response.data.message // Get message from API response if available
                : error.message; // Fallback to error.message if response is unavailable

            console.error("API Error:", errorMessage);
            dispatch({ type: FAILURE, payload: errorMessage });
        }
    };
};
