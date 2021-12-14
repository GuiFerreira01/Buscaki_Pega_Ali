import useTgl from 'use-tgl';



export function App() {
  const { enabled, on, off, toggle } = useTgl(true); // => Optional start value

  useEffect(() => {
    toggle(); // => Disable toggle on render
  }, []);

  return enabled ? (
    <div>
      Enabled
      <button type="button" onClick={off}>
        Disable
      </button>
    </div>
  ) : (
    <div>
      Disabled
      <button type="button" onClick={on}>
        Enable
      </button>
    </div>
  );
}