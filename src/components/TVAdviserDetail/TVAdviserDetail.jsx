import s from "./style.module.css";

export function TVAdviserDetail({ tvAdviser }) {
  return (
    <div>
      <div className={s.title}>{tvAdviser.name}</div>
      <div className={s.rating}>{tvAdviser.vote_average / 2}</div>
      <div className={s.overview}>{tvAdviser.overview}</div>
    </div>
  );
}
