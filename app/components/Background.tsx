export default function Background() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light/40 via-navy to-navy-dark" />
    </div>
  );
}