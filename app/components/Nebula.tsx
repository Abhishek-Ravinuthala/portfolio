export default function Nebula() {
  return (
    <>
      {/* Top left glow */}
      <div
        className="absolute h-[700px] w-[700px] rounded-full blur-3xl"
        style={{
          top: "-250px",
          left: "-200px",
          background:
            "radial-gradient(circle, rgba(79, 109, 255, 0.15), transparent 70%)",
        }}
      />

      {/* Top right glow */}
      <div
        className="absolute h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          top: "-150px",
          right: "-150px",
          background:
            "radial-gradient(circle, rgba(90, 150, 255, 0.08), transparent 70%)",
        }}
      />
    </>
  );
}