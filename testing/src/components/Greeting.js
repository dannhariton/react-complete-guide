import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [text, setText] = useState(false);

  return (
    <div>
      <h2>Hello World!</h2>
      {!text && (
        <Output>
          <p>It's good to see you!</p>
        </Output>
      )}
      {text && (
        <Output>
          <p>Changed!</p>
        </Output>
      )}
      <button onClick={() => setText(true)}>Change Text</button>
    </div>
  );
}

export default Greeting;
