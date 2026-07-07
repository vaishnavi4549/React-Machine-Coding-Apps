import "./styles.css";
import DynamicTable from "./DynamicTable";

export default function App() {
  const data = [
    { id: 1, name: "Vaishnavi", age: 25 },
    { id: 2, name: "Varsha", age: 33 },
  ];

  return (
    <div className="App">
      <DynamicTable data={data} />
    </div>
  );
}
