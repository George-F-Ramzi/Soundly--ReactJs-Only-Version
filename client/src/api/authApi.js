import axios from "axios";

export const Discover = async () => {
  const token = localStorage.getItem("token");
  const Discover = "http://localhost:3999/discover";
  const { data } = await axios.get(Discover, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const Artists = async () => {
  const token = localStorage.getItem("token");
  const Artists = "http://localhost:3999/artists";
  const { data } = await axios.get(Artists, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const NavBarData = async () => {
  const token = localStorage.getItem("token");
  const navbar = "http://localhost:3999/navbar";
  const { data } = await axios.get(navbar, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const GetCurrentSong = async (songId, userId) => {
  const token = localStorage.getItem("token");
  const song = `http://localhost:3999/song/${songId}/${userId}`;
  const { data } = await axios.get(song, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const DidIFollow = async (userId) => {
  const token = localStorage.getItem("token");
  const didIFollow = `http://localhost:3999/didIFollow/${userId}`;
  return await axios.get(didIFollow, { headers: { "x-auth-token": token } });
};

export const Follow = async (userId) => {
  const token = localStorage.getItem("token");
  const follow = `http://localhost:3999/follow/${userId}`;
  return await axios.post(follow, {}, { headers: { "x-auth-token": token } });
};

export const UnFollow = async (userId) => {
  const token = localStorage.getItem("token");
  const unFollow = `http://localhost:3999/unfollow/${userId}`;
  return await axios.post(unFollow, {}, { headers: { "x-auth-token": token } });
};

export const DidILike = async (songId) => {
  const token = localStorage.getItem("token");
  const didIFollow = `http://localhost:3999/didILike/${songId}`;
  return await axios.get(didIFollow, { headers: { "x-auth-token": token } });
};

export const Like = async (songId) => {
  const token = localStorage.getItem("token");
  const like = `http://localhost:3999/like/${songId}`;
  return await axios.post(like, {}, { headers: { "x-auth-token": token } });
};

export const DisLike = async (songId) => {
  const token = localStorage.getItem("token");
  const DisLike = `http://localhost:3999/dislike/${songId}`;
  return await axios.delete(DisLike, { headers: { "x-auth-token": token } });
};

export const GetProfile = async (userId) => {
  const token = localStorage.getItem("token");
  const Profile = `http://localhost:3999/getProfile/${userId}`;
  const { data } = await axios.get(Profile, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const GetUploaded = async (userId) => {
  const token = localStorage.getItem("token");
  const uploaded = `http://localhost:3999/uploaded/${userId}`;
  const { data } = await axios.get(uploaded, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const GetLiked = async (userId) => {
  const token = localStorage.getItem("token");
  const Liked = `http://localhost:3999/likedSongs/${userId}`;
  const { data } = await axios.get(Liked, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const UpdateImage = async (image) => {
  const token = localStorage.getItem("token");
  const form = new FormData();
  form.append("photo", image);

  const edit = `http://localhost:3999/editProfile`;

  await axios({
    method: "put",
    url: edit,
    data: form,
    headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
  });
};

export const GetSongData = async (songId) => {
  const token = localStorage.getItem("token");
  const song = `http://localhost:3999/songData/${songId}`;
  const { data } = await axios.get(song, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const DoComment = async (songId, userId, details) => {
  const token = localStorage.getItem("token");
  const comment = `http://localhost:3999/comment/${songId}/${userId}`;
  await axios.post(
    comment,
    { details },
    {
      headers: { "x-auth-token": token },
    }
  );
};

export const GetComments = async (songId) => {
  const token = localStorage.getItem("token");
  const comments = `http://localhost:3999/getComments/${songId}`;
  const { data } = await axios.get(comments, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const InboxData = async () => {
  const token = localStorage.getItem("token");
  const Inbox = `http://localhost:3999/inbox`;
  const { data } = await axios.get(Inbox, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const Upload = async (form) => {
  const token = localStorage.getItem("token");
  const Upload = `http://localhost:3999/upload`;
  await axios({
    method: "post",
    url: Upload,
    data: form,
    headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
  });
};

export const SearchUsers = async (value) => {
  const token = localStorage.getItem("token");
  const users = `http://localhost:3999/search/users/${value}`;
  const { data } = await axios.get(users, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const SearchSongs = async (value) => {
  const token = localStorage.getItem("token");
  const songs = `http://localhost:3999/search/songs/${value}`;
  const { data } = await axios.get(songs, {
    headers: { "x-auth-token": token },
  });
  return data;
};