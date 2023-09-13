import { createReducer } from "@reduxjs/toolkit";
import {
    cargarUsuario,
    signUp,
    signIn,
    signInWithToken,
    logout
} from '../actions/userActions.js';

const initialState = {
    user: null,
    token: null
}

export const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(cargarUsuario, (stateActual, action) => {
      return {
        ...stateActual,
        user: action.payload,
      };
    })
    .addCase(signUp.fulfilled, (stateActual, action) => {
      //   console.log( action);
      return {
        ...stateActual,
        // user: action.payload,

        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(signIn.fulfilled, (stateActual, action) => {
      //   console.log( action);
      return {
        ...stateActual,
        user: action.payload,
      };
    })
    .addCase(signInWithToken.fulfilled, (stateActual, action) => {
      //   console.log( action);
      return {
        ...stateActual,
        user: action.payload,
      };
    })
    .addCase(logout, (stateActual, action) => {
      //   console.log( action);
      return {
        ...stateActual,
        user: null,
        token: null,
      };
    })
);