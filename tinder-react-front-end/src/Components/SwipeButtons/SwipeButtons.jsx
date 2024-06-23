import React from "react";
import Style from "./SwipeButtons.module.css";

// material-ui icon import
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";

const SwipeButtons = () => {
  const swiped = () => {};

  return (
    <div className={Style.SwipeButtons}>
      <IconButton onClick={swiped} className={Style.SwipeButtons__Repeat}>
        <ReplayIcon fontSize="large" />
      </IconButton>

      <IconButton onClick={swiped} className={Style.SwipeButtons__Left}>
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton onClick={swiped} className={Style.SwipeButtons__Right}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
