import React from "react";

const Frame = ({ id }) => {
  return <div data-testid={id}>{`Frame ${id}`}</div>;
};

export default Frame;
