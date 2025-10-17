export default function App() {
  //create a function where it will say Time over after count of 10 it should tickle after 1 sec each

  function TimeBomb(start, delay) {
    const timer = setInterval(() => {
      if (start === 0) {
        console.log("Time Over!!");
        return () => clearInterval(timer);
      }
      console.log(start);
      start--;
    }, delay * 1000);
  }
  TimeBomb(10, 1);
  return <div className="App"></div>;
}
