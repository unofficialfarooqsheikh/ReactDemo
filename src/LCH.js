import react, { useState, useEffect } from "react";

const LCH = () => {
  const [message, setMessage] = useState("");
  const [childShown, setChildShown] = useState(true);

  return (
    <>
      <h1>Topic Wahi, {message}</h1>
      <button onClick={() => setMessage("Implementation Nayi")}>
        Topic Wahi?
      </button>
      {/* <div>
        {childShown ? <Child /> : null}
        <button
          onClick={() =>
            setChildShown((prev) => {
              return !prev;
            })
          }
        >
          toggle child
        </button>{" "}
      </div> */}
    </>
  );
};

const Child = () => {
  const [count, setCount] = useState(999);

  // Similar to componentDidMount
  useEffect(() => {
    console.log("I Will Run only once after Component Mounted");
    setCount(0);
  }, []);

  // Similar to componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default LCH;
