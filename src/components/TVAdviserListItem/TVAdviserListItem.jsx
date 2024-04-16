import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVAdviserListItem({ tvAdviser, onClick }) {
  return (
    <div onClick={() => onClick(tvAdviser)} className={s.container}>
      <img
        className={s.img}
        src={SMALL_IMG_COVER_BASE_URL + tvAdviser.backdrop_path}
        alt={tvAdviser.name}
      />
      <div className={s.title}>{tvAdviser.name}</div>
    </div>
  );
}
