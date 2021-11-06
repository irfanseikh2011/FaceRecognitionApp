import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, you detected ${entries} faces today.`}
      </div>
    </div>
  );
};

export default Rank;
