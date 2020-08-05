import * as React from "react";
import * as style from "./style.scss";


const errorImg = "https://placehold.it/256x256"

interface Props {
  message: string;
}

export const ErrorComponent = (props: Props) => {
  return (
    <div id={style.errorPage}>
      <span>{props.message}</span>
      <img src={errorImg} className={style.center}></img>
    </div>
  );
};
