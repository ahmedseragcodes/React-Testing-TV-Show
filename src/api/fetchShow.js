import React from "react";
import axios from "axios";


export const fetchShow = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        console.log("formatSeasons FILE, successfully fetched from API", res)
        return res;
      })
      .catch((err)=>{
        console.log("formatSeasons FILE, unsuccessfully fetched from API", err);
        return err;
      })
  };