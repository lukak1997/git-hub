import "./WhiteCard.css";
import location from "../assets/icon-location.svg";
import twitter from "../assets/icon-twitter.svg";
import github from "../assets/icon-website.svg";
import company from "../assets/icon-company.svg";
import typeScript from './typeScript'



interface WhiteCardProps {
  isDark: boolean;
  mainData: typeScript;
}

function WhiteCard(props: WhiteCardProps) {
  const { isDark, mainData } = props;
  return (
    <div
      className="main-card"
      style={{ backgroundColor: isDark ? "#1E2A47" : "#FEFEFE" }}
    >
      <div className="photo-div">
        <img className="photo1" src={mainData && mainData.avatar_url} alt="datuna" />
      </div>
      <div className="user-div">
        <div className="user-header">
          <p
            className="user-header-text1"
            style={{ color: isDark ? "#FFFFFF" : "#2B3442" }}
          >
            {mainData && mainData.login}
          </p>
          <p
            className="user-header-text2"
            style={{ color: isDark ? "#FFFFFF" : "#697C9A" }}
          >
            {mainData && ` Joined ${mainData.created_at.slice(0,10)}`}
          </p>
        </div>
        <a href={mainData && mainData.blog} target='blank' className="paragraph-text">{mainData && mainData.blog}</a>
        <div className="bio-div">
          <p
            className="bio-div-text1"
            style={{ color: isDark ? "#FFFFFF" : "#697C9A" }}
          >
            {mainData && mainData.bio ? mainData.bio : "This profile has no bio" } 
          </p>
        </div>
        <div
          className="follower-div"
          style={{ backgroundColor: isDark ? "#141D2F" : "#F6F8FF" }}
        >
          <div className="follower-div-text1">
            <p
              className="p-text"
              style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
            >
              Repos
            </p>
            <h1
              className="h1-text"
              style={{ color: isDark ? "#FFFFFF" : "#2B3442" }}
            >
              {mainData && mainData.public_repos}
            </h1>
          </div>
          <div className="follower-div-text2">
            <p
              className="p-text"
              style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
            >
              Followers
            </p>
            <h1
              className="h1-text"
              style={{ color: isDark ? "#FFFFFF" : "#2B3442" }}
            >
              {mainData && mainData.followers}
            </h1>
          </div>
          <div className="follower-div-text3">
            <p
              className="p-text"
              style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
            >
              Following
            </p>
            <h1
              className="h1-text"
              style={{ color: isDark ? "#FFFFFF" : "#2B3442" }}
            >
              {mainData && mainData.following}
            </h1>
          </div>
        </div>
        <div className="information-div">
          <div className="information-div-line1">
            <div className="information-div-item1">
              <img src={location} alt="location" />
              <p
                className="text1"
                style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
              >
                {mainData && mainData.location
                  ? mainData.location
                  : "Not Available"}
              </p>
            </div>
            <div className="information-div-item2">
              <img src={github} alt="github" />
              <p
                className="text3"
                style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
              >
                {mainData && mainData.blog ? mainData.blog : "Not Available"}
              </p>
            </div>
          </div>
          <div className="information-div-line2">
            <div className="information-div-item3">
              <img src={twitter} alt="twitter" />
              <p
                className="text2"
                style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
              >
                {mainData && mainData.twitter_username
                  ? mainData.twitter_username
                  : "Not Available"}
              </p>
            </div>
            <div className="information-div-item4">
              <img src={company} alt="company" />
              <p
                className="text4"
                style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
              >
                {mainData && mainData.company
                  ? mainData.company
                  : "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteCard;

export {};
