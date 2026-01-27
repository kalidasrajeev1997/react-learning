// useState ---> hook --> function by react
import { useState, useEffect, useRef } from "react";
import { useCutomHook } from "./useCustomHook";
// hooks
// useState ---> state management ----> variable management

const App = () => {
  const [data, setData] = useState([]);
  const ref = useRef();
  const { width, height } = useCutomHook();

  console.log("width:", width, "height:", height);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(
          "https://api.sampleapis.com/cartoons/cartoons2D",
        );
        const json = await resp.json();
        setData(json);
      } catch (err) {
        setData(err.message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    ref.current.style = "background-color: lightgray";
  }, [data]);

  return (
    <div ref={ref}>
      {/* <h2>Count: {state}</h2> */}
      {/* <button onClick={updateCount}>increment</button> */}
      {data.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} width={300} heigh={300} />
            <p>Episodes: {item.episodes}</p>
            {item.creator.map((c) => {
              return <p>Creator: {c}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

// {
//     "title": "Spongebob Squarepants",
//     "year": 1999,
//     "creator": [
//         "Stephen Hillenburg"
//     ],
//     "rating": "TV-Y",
//     "genre": [
//         "Comedy",
//         "Family"
//     ],
//     "runtime_in_minutes": 23,
//     "episodes": 272,
//     "image": "https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7",
//     "id": 1
// }

export default App;
