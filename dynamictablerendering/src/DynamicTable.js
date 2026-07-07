export default function ({ data }) {
  if (data.length === 0) return <p>No data found</p>;
  return (
    <div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          {Object.keys(data[0]).map((key) => {
            return (
              <th
                key={key}
                style={{
                  border: "1px solid black",
                  background: "lightblue",
                }}
              >
                {key.toUpperCase()}
              </th>
            );
          })}
        </thead>
        <tbody>
          {data.map((rdata, ind) => (
            <tr key={ind}>
              {Object.values(rdata).map((item, ind) => {
                return (
                  <td
                    key={ind}
                    style={{
                      border: "1px solid black",
                    }}
                  >
                    {item}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
