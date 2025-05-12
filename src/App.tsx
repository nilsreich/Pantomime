import { useSnapshot } from "valtio";
import { store } from "./store";

function App() {
  const snap = useSnapshot(store);

  return (
    <>
      <div className="text-4xl">Hallo</div>
      <div>{snap.counter}</div>
      <button
        onClick={() => {
          store.counter += 1;
        }}
      >
        Increment
      </button>
    </>
  );
}

export default App;
