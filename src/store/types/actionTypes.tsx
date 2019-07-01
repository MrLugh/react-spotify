import { UserLogged, ArtistSearchResponse, TrackSearchResponse } from "../../models/models";

export const SET_TOKEN = "SET_TOKEN";
interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}

export type TokenActionTypes = SetTokenAction;

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: UserLogged;
}

export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
interface FetchUserErrorAction {
  type: typeof FETCH_USER_ERROR;
}

export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
interface FetchUserPendingAction {
  type: typeof FETCH_USER_PENDING;
}

export type UserActionTypes = FetchUserSuccessAction | FetchUserErrorAction | FetchUserPendingAction;

export type UserActionType = (
  accessToken: string
) => void;

export interface UserState {
  response: UserLogged,
  userPending: boolean,
  userError: boolean,
}

export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
interface SearchArtistsSuccessAction {
  type: typeof FETCH_ARTISTS_SUCCESS;
  payload: ArtistSearchResponse;
}

export const FETCH_ARTISTS_ERROR = "FETCH_ARTISTS_ERROR";
interface SearchArtistsErrorAction {
  type: typeof FETCH_ARTISTS_ERROR;
}

export const FETCH_ARTISTS_PENDING = "FETCH_ARTISTS_PENDING";
interface SearchArtistsPendingAction {
  type: typeof FETCH_ARTISTS_PENDING;
}

export type SearchArtistsActionTypes = SearchArtistsSuccessAction | SearchArtistsErrorAction | SearchArtistsPendingAction;

export type SearchArtistsType = (
  accessToken: string,
  value: string,
  limit?: number,
  offset?: number
) => void;

export interface ArtistSearchState {
  response: ArtistSearchResponse,
  artistPending: boolean,
  artistError: boolean,
}

export const FETCH_TRACKS_SUCCESS = "FETCH_TRACKS_SUCCESS";
interface SearchTracksSuccessAction {
  type: typeof FETCH_TRACKS_SUCCESS;
  payload: TrackSearchResponse;
}

export const FETCH_TRACKS_ERROR = "FETCH_TRACKS_ERROR";
interface SearchTracksErrorAction {
  type: typeof FETCH_TRACKS_ERROR;
}

export const FETCH_TRACKS_PENDING = "FETCH_TRACKS_PENDING";
interface SearchTracksPendingAction {
  type: typeof FETCH_TRACKS_PENDING;
}

export type SearchTracksActionTypes = SearchTracksSuccessAction | SearchTracksErrorAction | SearchTracksPendingAction;

export type SearchTracksType = (
  accessToken: string,
  value: string,
  limit?: number,
  offset?: number
) => void;

export interface TrackSearchState {
  response: TrackSearchResponse,
  trackPending: boolean,
  trackError: boolean,
}