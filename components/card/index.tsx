export default function Card(props: any) {
  const { children } = props;
  return (
    <div className="flex flex-col items-center p-10 m-5">
      <div className={`"w-20 h-20 bg-red-600 rounded-lg p-5 capitalize"`}>
        {children}
      </div>
    </div>
  );
}
