import React from "react";
import Magnifier from "react-magnifier";

class Zoomer extends React.Component {
  state = {
    zoom: false
  };

  zoomactivator = () => {
    this.setState({ zoom: true });
  };

  render() {
    return (
      <div>
        <Magnifier
          src={
            "https://img01.ztat.net/article/SE/62/2D/0P/MK/17/SE622D0PM-K17@8.jpg?imwidth=765&filter=packshot"
          }
          width={500}
          mgShape="square"
          zoomFactor="2.0"
          //   mgWidth="200px"
          //   mgHeight="200px"
        />
        ;
      </div>
    );
  }
}

export default Zoomer;
