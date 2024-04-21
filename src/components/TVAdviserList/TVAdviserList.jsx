import s from "./style.module.css";
import { TVAdviserListItem } from "../TVAdviserListItem/TVAdviserListItem";

export function TVAdviserList({ tvAdviserList, onClickItem }) {
  return (
    <>
      <div className={s.title}>You make also like : </div>
      <div className={s.list}>
        {tvAdviserList.map((tvAdviser) => {
          return (
            <span className={s.tv_adviser_list_item}>
              <TVAdviserListItem
                key={tvAdviser.id}
                tvAdviser={tvAdviser}
                onClick={onClickItem}
              />
            </span>
          );
        })}
      </div>
    </>
  );
}
