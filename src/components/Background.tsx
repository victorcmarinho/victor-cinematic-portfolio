import { AbsoluteFill } from "remotion";

export const Background: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle, #1a1a1a 0%, #000000 100%)",
        width: "100%",
        height: "100%",
      }}
    />
  );
};
