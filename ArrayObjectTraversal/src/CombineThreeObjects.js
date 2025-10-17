export default function App() {
  const duck = {
    hasBill: true,
    feet: "orange",
  };

  const beaver = {
    hasTail: true,
  };

  const otter = {
    hasFur: true,
    feet: "webbed",
  };

  function assign(targetObj, ...sourceObjects) {
    return sourceObjects.reduce((finalObj, currentObj) => {
      return { ...finalObj, ...currentObj };
    }, targetObj);
  }

  const result = assign({}, duck, beaver, otter);
  console.log("first", result);

  //Easier - first coise
  const answer2 = { ...duck, ...beaver, ...otter };
  console.log("second", answer2);

  //Third options
  const answer3 = Object.assign({}, duck);

  return <div className="App"></div>;
}
