import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, changeByAmount } from "../volumneSlice";
import {
  publishAnalog,
  publishPress,
  useSubscribeAnalog,
} from "../hooks/useCip";

function App() {
  // const volume = useSelector(state => state.volume);
  // const dispatch = useDispatch();

  const [TouchStartUp, TouchEndUp] = publishPress("20");
  const [TouchStartDown, TouchEndDown] = publishPress("21");

  const volume = useSubscribeAnalog("10");

  const volumeUp = () => {
    //dispatch(increment());
    console.log(volume);
  };

  const volumeDown = () => {
    // dispatch(decrement());
    console.log(volume);
  };

  const sliderChange = (event, newValue) => {
    publishAnalog("10", newValue);
    // dispatch(changeByAmount(newValue));
    console.log(volume);
  };

  return (
    <div style={{ padding: 20 }} className="App">
      <h1>Sandbox Project</h1>
      <div className="Slider">
        <Slider
          sx={{ width: 400 }}
          aria-label="Volume"
          value={volume}
          onChange={sliderChange}
        />
      </div>
      <div className="Buttons">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onTouchStart={TouchStartUp}
            onTouchEnd={TouchEndUp}
            onClick={() => console.log(volume)}
          >
            Up
          </Button>
          <Button
            variant="contained"
            onTouchStart={TouchStartDown}
            onTouchEnd={TouchEndDown}
          >
            Down
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
