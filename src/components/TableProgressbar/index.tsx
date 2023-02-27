import Progressbar from "../Progressbar";

export interface List {
  id: number;
  name: string;
  number: number;
}

export default function TableProgressbar({
  title,
  list,
}: {
  title: string;
  list: List[];
}) {
  return (
    <div style={{ width: "100%", marginTop: "38 px" }}>
      <h2
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2 5px",
          fontWeight: 400,
        }}
      >
        <span> {title}</span>
        <span>Match %</span>
      </h2>
      {list.map((item) => (
        <Progressbar text={item.name} percentage={item.number} key={item.id} />
      ))}
    </div>
  );
}
