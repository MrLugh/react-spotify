const spotify_client_id = "62cefaf3d081421989a8124e0ce0bada";

export const SPOTIFY = {
  authorize: `https://accounts.spotify.com/authorize?client_id=${spotify_client_id}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/`,
  api: "https://api.spotify.com/v1",
};

export const DEFAULT_PERSON_AVATAR_IMAGE_URL =
  "https://png.pngtree.com/svg/20161212/f93e57629c.svg";
export const DEFAULT_ALBUM_AVATAR_IMAGE_URL =
  "http://pwaimg.listenlive.co/TRITONRADIOMUSIC_779321_config_default_cover_image_1430930895.png";
