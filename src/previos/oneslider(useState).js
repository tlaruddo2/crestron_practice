import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  const [volume, setVolumne] = useState(50);

  const volumeUp = () => {
    setVolumne(++volume);
    console.log(volume);
  };

  const volumeDown = () => {
    setVolumne(--volume);
    console.log(volume);
  };

  const sliderChange = (event, newValue) => {
    setVolumne(newValue);
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
          <Button variant="contained" onClick={volumeUp}>
            Up
          </Button>
          <Button variant="contained" onClick={volumeDown}>
            Down
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
