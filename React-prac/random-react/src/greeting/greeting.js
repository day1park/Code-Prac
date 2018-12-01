import React from "react";

const Greeting = props => {
  const { name, age } = props;
  return (
    <p>
      welcome {name} please add a gym routine, to increse your power level to
      over {age} !!
    </p>
  );
};

export default Greeting;
