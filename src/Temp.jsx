import React, { useEffect } from "react";

import { Route, useParams } from "react-router-dom";

const Temp = () => {
  const params = useParams();
  // { key1: value1, key2: value2, ... }

  useEffect(() => {
    // 작업 ...
  });

  useEffect(() => {
    // 작업 ...
  }, []);

  useEffect(() => {
    // 작업 ....
  }, [value]);

  useEffect(() => {
    // 작업 ...
    return {
      // Clean Up!
    };
  }, []);

  const arr = [1, 2, 3];
  arr.map((element, index, array) => {
    console.log(element, index, array);
  });
  //   output
  //   1 0 [1, 2, 3]
  //   2 1 [1, 2, 3]
  //   3 2 [1, 2, 3]

  return (
    <div>
      <Route path="/지정할 pathname/:파라미터이름" element={<></>} />
    </div>
  );
};

export default Temp;
