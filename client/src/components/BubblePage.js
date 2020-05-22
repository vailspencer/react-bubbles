import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../utils/AxiosWithAuth.js';


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

const updateColor = () => {
  setUpdate(!update)
}

useEffect(() => {
  axiosWithAuth()
  .get('/colors')
  .then((response) => setColorList(response.data))
  .catch((err) => console.error(err));
}, [update]);


  return (
    <>
      <ColorList colors={colorList} updateColor={updateColor} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
