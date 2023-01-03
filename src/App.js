import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { publishPress, useSubscribeString } from "./hooks/useCip";
import { useSubscribeStringParse } from "./hooks/useCipParse";

function App() {
  // const volume = useSelector(state => state.volume);
  // const dispatch = useDispatch();
  // App.defaultProps = {
  //   volumesJson: [
  //     { id: 0, value: 20 },
  //     { id: 1, value: 20 },
  //     { id: 2, value: 20 },
  //     { id: 3, value: 20 },
  //     { id: 4, value: 20 },
  //     { id: 5, value: 20 },
  //     { id: 6, value: 20 },
  //     { id: 7, value: 20 },
  //     { id: 8, value: 20 },
  //     { id: 9, value: 20 },
  //   ],
  // };

  // const TouchUp = publishObject("20", () => {
  //   volumesJson.forEach(slider => {
  //     slider.value += 1;
  //   });
  //   return volumesJson;
  // }); //publish Javascript object
  // const TouchDown = publishObject("21", () => {
  //   volumesJson.forEach(slider => {
  //     slider.value -= 1;
  //   });
  //   return volumesJson;
  // });

  const [TouchStartUp, TouchEndUp] = publishPress("20");
  const [TouchStartDown, TouchEndDown] = publishPress("21");

  const recievedString1 = useSubscribeStringParse("11");
  const recievedString2 = useSubscribeStringParse("12");
  const recievedString3 = useSubscribeStringParse("13");
  const recievedString4 = useSubscribeStringParse("14");
  const recievedString5 = useSubscribeStringParse("15");
  const recievedString6 = useSubscribeStringParse("16");
  const recievedString7 = useSubscribeStringParse("17");
  const recievedString8 = useSubscribeStringParse("18");
  const recievedString9 = useSubscribeStringParse("19");
  const recievedString10 = useSubscribeStringParse("20");

  //  const recievedString = useSubscribeString("10");

  // const sliderChange = (event, newValue, _, id) => {
  //   publishSerial(
  //     "20",
  //     volumesJson.forEach(slider => {
  //       if (slider.id == id) {
  //         slider.value = newValue;
  //       }+

  //     })
  //   );
  // };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "white" }}>Sandbox Project</h1>

      <div className="Sliders">
        <Stack spacing={3}>
          {/* {volumes.map(s => (
            <Slider
              key={s.id}
              sx={{ width: 400 }}
              aria-label="Volume"
              value={s.value}
            />
          ))} */}

          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString1).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString2).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString3).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString4).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString5).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString6).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString7).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString8).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString9).value}
          />
          <Slider
            sx={{ width: 400 }}
            aria-label="Volume"
            value={JSON.parse(recievedString10).value}
          />
        </Stack>
      </div>
      <div className="Buttons">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onTouchStart={TouchStartUp}
            onTouchEnd={TouchEndUp}
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
