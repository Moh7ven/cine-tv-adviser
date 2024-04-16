import s from "./style.module.css";

import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

export function TVAdviserDetail({ tvAdviser }) {
  const rating = tvAdviser.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{tvAdviser.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={s.rating}>{rating}</div>
      </div>
      <div className={s.overview}>{tvAdviser.overview}</div>
    </div>
  );
}
