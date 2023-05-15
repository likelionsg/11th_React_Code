import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [state, setState] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    console.log("rendering...");
  });

  useEffect(() => {
    console.log("ref change");
  }, [ref.current]);

  useEffect(() => {
    console.log("state change");
  }, [state]);

  return (
    <div>
      <button onClick={() => (ref.current = ref.current + 1)}>ref +</button>
      <button onClick={() => setState(state + 1)}>state +</button>

      <p>ref: {ref.current}</p>
      <p>state: {state}</p>
    </div>
  );
};

export default Ref;
