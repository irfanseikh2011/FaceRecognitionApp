import React from "react";

const Rank = ({ times, name }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, you detected ${times} faces today.`}
      </div>
    </div>
  );
};

export default Rank;
