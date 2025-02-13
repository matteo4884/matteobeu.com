export default function MarginContainer({ children, extraClass }) {
  return (
    <div className={`w-[90%] laptop:w-[95%] mx-auto ${extraClass}`}>
      {children}
    </div>
  );
}
