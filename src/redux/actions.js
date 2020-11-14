import { ADD_NAME, ROOM_ID } from "./types";

export const login = (user) => ({
  type: ADD_NAME,
  payload: user,
});

export const roomId = (roomId) => ({
  type: ROOM_ID,
  payload: roomId,
});
