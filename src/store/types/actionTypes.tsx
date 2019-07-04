import {
  UserLogged,
  ArtistsSearchResponse,
  TracksSearchResponse,
  Artist,
  ArtistAlbums,
} from "../../models/models";

// token
export const SET_TOKEN = "SET_TOKEN";
interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}

export type SetTokenActionType = (url: string) => void;

export type TokenActionTypes = SetTokenAction;

// user
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

export type UserActionTypes =
  | FetchUserSuccessAction
  | FetchUserErrorAction
  | FetchUserPendingAction;

export type UserActionType = (accessToken: string) => void;

export interface UserState {
  response: UserLogged;
  userPending: boolean;
  userError: boolean;
}

// artists
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
interface SearchArtistsSuccessAction {
  type: typeof FETCH_ARTISTS_SUCCESS;
  payload: ArtistsSearchResponse;
}

export const FETCH_ARTISTS_ERROR = "FETCH_ARTISTS_ERROR";
interface SearchArtistsErrorAction {
  type: typeof FETCH_ARTISTS_ERROR;
}

export const FETCH_ARTISTS_PENDING = "FETCH_ARTISTS_PENDING";
interface SearchArtistsPendingAction {
  type: typeof FETCH_ARTISTS_PENDING;
}

export type SearchArtistsType = (
  accessToken: string,
  value: string,
  limit?: number,
  offset?: number
) => void;

export interface ArtistsSearchState {
  response: ArtistsSearchResponse;
  artistsPending: boolean;
  artistsError: boolean;
}

// artist
export const FETCH_ARTIST_SUCCESS = "FETCH_ARTIST_SUCCESS";
interface SearchArtistSuccessAction {
  type: typeof FETCH_ARTIST_SUCCESS;
  payload: Artist;
}

export const FETCH_ARTIST_ERROR = "FETCH_ARTIST_ERROR";
interface SearchArtistErrorAction {
  type: typeof FETCH_ARTIST_ERROR;
}

export const FETCH_ARTIST_PENDING = "FETCH_ARTIST_PENDING";
interface SearchArtistPendingAction {
  type: typeof FETCH_ARTIST_PENDING;
}

export type SearchArtistType = (accessToken: string, id: string) => void;

export interface ArtistSearchState {
  response: Artist;
  artistPending: boolean;
  artistError: boolean;
}

export type SearchArtistsActionTypes =
  | SearchArtistsSuccessAction
  | SearchArtistsErrorAction
  | SearchArtistsPendingAction
  | SearchArtistSuccessAction
  | SearchArtistErrorAction
  | SearchArtistPendingAction;

// tracks
export const FETCH_TRACKS_SUCCESS = "FETCH_TRACKS_SUCCESS";
interface SearchTracksSuccessAction {
  type: typeof FETCH_TRACKS_SUCCESS;
  payload: TracksSearchResponse;
}

export const FETCH_TRACKS_ERROR = "FETCH_TRACKS_ERROR";
interface SearchTracksErrorAction {
  type: typeof FETCH_TRACKS_ERROR;
}

export const FETCH_TRACKS_PENDING = "FETCH_TRACKS_PENDING";
interface SearchTracksPendingAction {
  type: typeof FETCH_TRACKS_PENDING;
}

export type SearchTracksActionTypes =
  | SearchTracksSuccessAction
  | SearchTracksErrorAction
  | SearchTracksPendingAction;

export type SearchTracksType = (
  accessToken: string,
  value: string,
  limit?: number,
  offset?: number
) => void;

export interface TracksSearchState {
  response: TracksSearchResponse;
  tracksPending: boolean;
  tracksError: boolean;
}

// albums
export const FETCH_ARTIST_ALBUMS_SUCCESS = "FETCH_ARTIST_ALBUMS_SUCCESS";
interface SearchArtistAlbumsSuccessAction {
  type: typeof FETCH_ARTIST_ALBUMS_SUCCESS;
  payload: ArtistAlbums;
}

export const FETCH_ARTIST_ALBUMS_ERROR = "FETCH_ARTIST_ALBUMS_ERROR";
interface SearchArtistAlbumsErrorAction {
  type: typeof FETCH_ARTIST_ALBUMS_ERROR;
}

export const FETCH_ARTIST_ALBUMS_PENDING = "FETCH_ARTIST_ALBUMS_PENDING";
interface SearchArtistAlbumsPendingAction {
  type: typeof FETCH_ARTIST_ALBUMS_PENDING;
}

export type SearchArtistAlbumsActionTypes =
  | SearchArtistAlbumsSuccessAction
  | SearchArtistAlbumsErrorAction
  | SearchArtistAlbumsPendingAction;

export type SearchArtistAlbumsType = (
  accessToken: string,
  id: string,
  limit?: number,
  offset?: number
) => void;

export interface ArtistAlbumsState {
  response: ArtistAlbums;
  artistAlbumsPending: boolean;
  artistAlbumsError: boolean;
}

// player
export const SET_PLAYER = "SET_PLAYER";
interface SetPlayerAction {
  type: typeof SET_PLAYER;
  payload: string;
}

export type SetPlayerActionType = (url: string) => void;

export type SetPlayerActionTypes = SetPlayerAction;
