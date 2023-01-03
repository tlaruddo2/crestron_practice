import { useState } from "react";

import { useSubscribeString } from "./useCip";

export const useSubscribeStringParse = joinNumber => {
  const recievedString = useSubscribeString(joinNumber);

  return recievedString === "" ? `{"value": 20}` : recievedString;
  //   const [volumes, setVolumes] = useState([
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
  //   ]);

  //   const recievedString = useSubscribeString(joinNumber);
  //   try {
  //     const updateVolume = JSON.parse(recievedString);
  //     volumes.filter(v => v.id !== updateVolume.id);
  //     volumes.push(updateVolume);
  //     volumes.sort((a, b) => a.id - b.id);

  //     setVolumes(volumes);
  //     return { volumes, recievedString };
  //   } catch {
  //     return { volumes, recievedString };
  //   }
};
