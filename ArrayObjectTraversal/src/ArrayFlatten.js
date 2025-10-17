import "./styles.css";

export default function App() {
  const array = [
    1,
    2,
    3,
    [4],
    [5, 6, [7], [8, [9, [10]]]],
    11,
    12,
    13,
    [14, [[[[[15, [16]]]]]]],
    17,
    18,
    [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
  ];

  function flattenArray(depth) {
    function processing(arr, d) {
      return arr.reduce((result, currentValue) => {
        if (d > 0) {
          if (Array.isArray(currentValue)) {
            return result.concat(processing(currentValue, d - 1));
          } else {
            return result.concat(currentValue);
          }
        }
        return result.concat(currentValue);
      }, []);
    }
    return processing(this, depth);
  }
  Array.prototype.flatten = flattenArray;

  const result = array.flatten(15);

  return (
    <div className="App">
      {result.map((data) => {
        return <span style={{ marginRight: "10px" }}>{data}</span>;
      })}
    </div>
  );
}
