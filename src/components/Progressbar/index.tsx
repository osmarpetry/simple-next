export default function Progressbar({
  percentage = 70,
  text = "Figma",
}: {
  text?: string;
  percentage: number;
}) {
  const renderProgressBar = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "11.32px",
          background: "#E8E8E9",
          borderRadius: "161.702px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: "#A959F5",
            borderRadius: "161.702px",
          }}
        />
      </div>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <h2
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <span style={{ fontWeight: 400 }}> {text}</span>
        <span style={{ fontWeight: 600 }}>{percentage}%</span>
      </h2>
      {renderProgressBar()}
    </div>
  );
}
