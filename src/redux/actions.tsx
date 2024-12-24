import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';
import axios from 'axios';
import { ST_API_KEY } from '../Constants';

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

interface Request {
    name: string;
    apikey: string;
}

export const list = (request: Request) => {
    const GET_QUERY = gql`
  query MyQuery($q: String, $appid: String)   {
    getWeatherNew(appid: $appid, q: $q) {
      name
      weather {
        main
        description
      }
      main {
        temp
      }
    }
  }
`;
 const client = new ApolloClient(
    {
      uri: "https://kandlapalle.us-east-a.ibm.stepzen.net/api/factual-arachnid/__graphql",
      headers: {
        Authorization: `APIKey ${ST_API_KEY}`,
      },
      cache: new InMemoryCache(),
    }
  )
    
    
    return async (dispatch: any) => {

        // try {
        //     const req = `https://api.openweathermap.org/data/2.5/weather?q=${request.name}&appid=${request.apikey}`
        //     console.log(req)
        //     const response = await axios.get(
        //         req
        //     );

        //     const data = response.data;
        //     console.log(data);
        //     dispatch({ type: SUCCESS, payload: data });
        // } catch (error: any) {
        //     const errorMessage = error.response
        //         ? error.response.data.message // Get message from API response if available
        //         : error.message; // Fallback to error.message if response is unavailable

        //     console.error("API Error:", errorMessage);
        //     dispatch({ type: FAILURE, payload: errorMessage });
        // }
        try {
            const response=await client.query({
                query:GET_QUERY,
                variables:{
                    q:request.name,
                    appid:request.apikey
                }
            });
            console.log(response.data);
            dispatch({ type: SUCCESS, payload: response.data.getWeatherNew });

        } catch (error:any) {
                 const errorMessage = error.response
                ? error.response.data.message // Get message from API response if available
                : error.message; // Fallback to error.message if response is unavailable

            console.error("API Error:", errorMessage);
            dispatch({ type: FAILURE, payload: errorMessage });
        }
    };
};
