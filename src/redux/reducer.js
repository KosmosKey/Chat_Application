import { roomId } from "./actions";
import { ADD_NAME, ROOM_ID } from "./types";

const initalState = {
  user: null,
  roomId: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        user: action.payload,
      };

    case ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
