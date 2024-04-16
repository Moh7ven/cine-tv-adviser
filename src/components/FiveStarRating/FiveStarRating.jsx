import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";
export function FiveStarRating({ rating }) {
  // Déclarer un tableau d'étoiles (jsx) vide
  const startList = [];

  // Stocker dans une variable le nombre d'etoile pleine
  const starFillCount = Math.floor(rating);

  // Stocker dans une variable si oui ou non il y'a une demi étoiles
  const hasStarHalf = rating - starFillCount >= 0.5;

  // Stocker dans une variable le nombre d'etoile vide
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  // Pusher dans le tableau les étoiles pleines
  for (let i = 1; i <= starFillCount; i++) {
    startList.push(<StarFill key={"star-fill" + i} />);
  }

  // Pusher dans le tableau les demi étoiles (s'il y en a)
  if (hasStarHalf) {
    startList.push(<StarHalf key="star-half" />);
  }

  // Pusher dans le tableau les étoiles vides
  for (let i = 1; i <= emptyStarCount; i++) {
    startList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{startList}</div>;
}
