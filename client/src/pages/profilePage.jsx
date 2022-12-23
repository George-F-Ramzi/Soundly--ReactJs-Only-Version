import React from "react";
import NavBar from "../elements/navBar";
import { RiEditFill } from "react-icons/ri";
import SongCard from "../elements/songCard";
import SongInPlaylist from "../elements/songInPlaylist";

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <div className="info-container">
        <div className="info__img">
          <img className="img--" src="https://picsum.photos/200/300" />
          <div className="edit__profile">
            <RiEditFill className="edit_icon" size={"28px"} />
          </div>
        </div>
        <h5 className="profile__name">George Fawzi Ramzi</h5>
      </div>
      <div className="status">
        <div className="number">
          <span className="number-value">23k</span>
          followers
        </div>
        <div className="number">
          <span className="number-value">23k</span>
          Following
        </div>
        <div className="number">
          <span className="number-value">23k</span>
          Songs
        </div>
      </div>
      <div className="section">
        <h3 className="section__title">Uploaded Songs</h3>
        <div className="section__grid">
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
      <div className="section">
        <h3 className="section__title">Liked Songs</h3>
        <div className="playist">
          <table>
            <thead>
              <tr>
                <th>:</th>
                <th>
                  <div className="playlist__div">
                    <div className="playlist__img"></div>
                    Song Name
                  </div>
                </th>
                <th className="artist-field">Artist Name</th>
                <th className="likes-field">Likes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
