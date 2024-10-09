export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-95 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50 h-screen">
      <div>
        <img
          src="\Infinity@1x-1.0s-200px-200px.svg"
          alt="Loading..."
          className="h-44"
        />
      </div>
    </div>
  );
}
