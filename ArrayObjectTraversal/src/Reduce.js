export default function App() {
  // Find the number of strings with same length of strings .

  const inputArray = [
    "apple",
    "orange",
    "mango",
    "papaya",
    "banana",
    "pomegranate",
  ];

  const lengths = inputArray.reduce((result, currentString) => {
    const lengthStr = currentString.length;
    if (!result[lengthStr]) {
      result[lengthStr] = 1;
    } else {
      result[lengthStr] = result[lengthStr] + 1;
    }
    return result;
  }, {});

  console.log("heyyy", lengths);
  return <div></div>;
}
