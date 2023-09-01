import Flowers1 from "./images/Flowers1.jpg";
import Flowers2 from "./images/Flowers2.jpg";
import Flowers3 from "./images/Flower3.jpg";
import Flowers4 from "./images/Flowers4.jpg";

import "./Flowers.css";

const imageMap = {
  Flowers1,
  Flowers2,
  Flowers3,
  Flowers4,
};

function Flowers({ flowersName }) {
  console.log(imageMap[flowersName]);
  return (
    <div className="flowersimg">
      <img src={imageMap[flowersName]} alt="Flowers" className="flowers"></img>
    </div>
  );
}

export default Flowers;
