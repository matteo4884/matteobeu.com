export default function ContainerTextAnimation({ text }) {
  var t = [];
  for (let i = 0; i < 14; i++) {
    t.push(text);
  }
  return (
    <div className="sticky top-0 backdrop-blur-default z-10">
      <div className="overflow-hidden">
        <div className="flex w-max animation-text bg-[#17171700]">
          <div className="--sec-m-font background-rainbow-anim-text font-semibold w-max">
            {t.map((el, i) => {
              return <span key={i}>&nbsp;{el}</span>;
            })}
          </div>
          <div className="--sec-m-font background-rainbow font-semibold w-max">
            {t.map((el, i) => {
              return <span key={i}>&nbsp;{el}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
