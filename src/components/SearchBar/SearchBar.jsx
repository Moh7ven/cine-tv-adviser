import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    // la methode trim() supprimer les espaces blancs des deux extrémités d'une chaîne de caractères
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      console.log(e.target.value);
    }
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Search a tv show you like "
      />
    </>
  );
}
