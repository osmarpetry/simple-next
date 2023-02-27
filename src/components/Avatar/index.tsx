import Image from "next/image";

import AvatarImg from "@/assets/img/user-avatar.png";

export default function Avatar({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image alt={`Avatar of: ${title}`} src={AvatarImg} />
      <h2 style={{ fontWeight: 700, fontSize: "40px", margin: "10px 0" }}>
        {title}
      </h2>
      <h3 style={{ fontWeight: 400, fontSize: "24px", margin: 0 }}>
        {description}
      </h3>
    </div>
  );
}
