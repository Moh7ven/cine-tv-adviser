import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-advise";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVAdviserDetail } from "./components/TVAdviserDetail/TVAdviserDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVAdviserListItem } from "./components/TVAdviserListItem/TVAdviserListItem";
import { TVAdviserList } from "./components/TVAdviserList/TVAdviserList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVAdviser, setCurrentTVAdviser] = useState();

  const [recommendationList, setRecommendationList] = useState([]);

  const fetchPopular = async () => {
    const popular = await TVShowAPI.fetchPopular();
    setCurrentTVAdviser(popular[0]);
  };

  const fetchRecommendations = async (tvAdviserId) => {
    const recommendations = await TVShowAPI.fetchRecommendations(tvAdviserId);
    if (recommendations.length > 10) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentTVAdviser) {
      fetchRecommendations(currentTVAdviser.id);
    }
  }, [currentTVAdviser]);
  function setCurrentTVAdviserFromRecommendation(tvAdviser) {
    alert(JSON.stringify(tvAdviser));
  }

  console.log(recommendationList);
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
            {/* <input style={{ width: "100%" }} type="text" /> */}
            <SearchBar />
          </div>
        </div>
      </div>
      <div className={s.tv_advise_detail}>
        {currentTVAdviser && <TVAdviserDetail tvAdviser={currentTVAdviser} />}
      </div>
      <div className={s.recommendations}>
        {recommendationList && recommendationList.length > 0 && (
          <TVAdviserList
            onClickItem={setCurrentTVAdviser}
            tvAdviserList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
