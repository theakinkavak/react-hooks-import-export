import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde"
// import { trees, wildlife } from "./parks/RockyMountain"
// import * as RMFunctions from "./parks/RockyMountain"
import { trees as parkTrees, wildlife as parkWildlife } from "./parks/RockyMountain"

export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  // console.log(RMFunctions.trees)
  // RMFunctions.wildlife();
  
  console.log(parkTrees);
  parkWildlife();

  return (
    <div>
      <MesaVerde />
    </div>
  );
};
