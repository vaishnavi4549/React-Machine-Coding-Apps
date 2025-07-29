import { directory } from "../data/data.jsx";
export const Structure = () => {
  console.log(directory);
  if (directory.isFolder) {
    return (
      <div>
        <div>📁{directory.name}</div>
        <div style={{ margin: "10px" }}>
          {directory.items.map((item) => {
            return (
              <span>
                📁{item.name}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span>🗎{directory.name}</span>;
  }
};