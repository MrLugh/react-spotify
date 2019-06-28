import { UserLogged, ArtistSearch } from "./models";

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

export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
interface SearchArtistsAction {
  type: typeof FETCH_ARTISTS_SUCCESS;
  payload: ArtistSearch;
}

export type SearchArtistsActionTypes = SearchArtistsAction;