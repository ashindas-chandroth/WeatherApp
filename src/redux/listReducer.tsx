import { SUCCESS } from "./actions";
import { FAILURE } from "./actions";

const initialState = {
  data: null,
  error: null
}

const listReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FAILURE:
      return { ...state, data: null, error: action.payload };
    default:
      return state;
  }
}

export default listReducer;