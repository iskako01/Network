import React from "react";

const Profile = () => {
  return (
    <div className="content">
        <div className="content__top-img">
          <img src="https://media-be.chewy.com/wp-content/uploads/2019/07/05151036/bringing-home-a-pug-1024x563.jpg" />
        </div>
        <div className="profile">
          <div className="profile__avatar">
            <img src="https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2020/01/shutterstock_1268241238-2-768x512.jpg" />
          </div>
          <div className="profile__info">
            <div className="profile__info_title">
              <p>Alisher iskakov</p>
            </div>
            <div className="profile__info_special">
              <div>Date of Birth:</div>
              <div>City:</div>
              <div>Education:</div>
              <div>Web Site:</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
