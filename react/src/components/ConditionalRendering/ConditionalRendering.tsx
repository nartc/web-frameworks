import { useState } from "react";

const ConditionalRendering: React.FC = () => {
  const [x, setX] = useState(7);

  return (
    <>
      {x > 10 ? (
        <p>{x} is greater than 10</p>
      ) : 5 > x ? (
        <p>{x} is less than 5</p>
      ) : (
        <p>{x} is between 5 and 10</p>
      )}
    </>
  );
};

export default ConditionalRendering;
