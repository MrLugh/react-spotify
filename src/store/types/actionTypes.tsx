import { UserLogged } from "./models";

export const SET_TOKEN = "SET_TOKEN";
interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}

export type TokenActionTypes = SetTokenAction;

export const FETCH_USER = "FETCH_USER";
interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: UserLogged;
}

export type UserActionTypes = FetchUserAction;
