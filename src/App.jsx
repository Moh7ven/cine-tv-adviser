import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-advise";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVAdviserDetail } from "./components/TVAdviserDetail/TVAdviserDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVAdviserListItem } from "./components/TVAdviserListItem/TVAdviserListItem";

export function App() {
  const [currentTVAdviser, setCurrentTVAdviser] = useState();

  const fetchPopular = async () => {
    const popular = await TVShowAPI.fetchPopular();
    setCurrentTVAdviser(popular[0]);
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  function setCurrentTVAdviserFromRecommendation(tvAdviser) {
    alert(JSON.stringify(tvAdviser));
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVAdviser
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTVAdviser.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title=" Cine TV Adviser"
              image={logo}
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_advise_detail}>
        {currentTVAdviser && <TVAdviserDetail tvAdviser={currentTVAdviser} />}
      </div>
      <div className={s.recommendations}>
        {currentTVAdviser && (
          <TVAdviserListItem
            onClick={setCurrentTVAdviserFromRecommendation}
            tvAdviser={currentTVAdviser}
          />
        )}
      </div>
    </div>
  );
}
