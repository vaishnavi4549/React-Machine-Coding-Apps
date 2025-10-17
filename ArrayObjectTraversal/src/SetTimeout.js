export default function App() {
  function callAfterDelay(array) {
    let interval = 0;
    array.forEach((ele) => {
      interval += ele;
      const timer = setTimeout(() => {
        console.log(ele);
      }, interval * 1000);

      return () => clearTimeout(timer);
    });
  }

  const array = [1, 4, 8, 2, 5, 3];

  callAfterDelay(array);

  return <div className="App"></div>;
}
