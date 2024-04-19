import { useEffect, useState } from "react";
import { RadioGroup, Switch } from "@headlessui/react";

const colors = ["green", "red", "blue"];
const modes = ["light", "dark"];

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(stickyValue);
    }
  }, [key, setValue]);

  return [value, (v) => {
    localStorage.setItem(key, v);
    setValue(v);
}];
}

function App() {
  const [color, setColor] = useStickyState(colors[0], 'theme-color');
  const [mode, setMode] = useStickyState(modes[0],'theme-mode');
  return (
    <div
      className={[
        'font-mono bg-primaryBg h-screen flex flex-col justify-center',
         color && 'theme-${color}',
         mode && 'theme-${mode}',
      ]
        .filter(Boolean).join(' ')}>
      <div className="mx-auto bg-neutralBg text-onNeutralBg border-8 border-onNeutralBg p-5 max-w-lg">
  <h1 className="text-3xl font-bold text-center">
    Tailwind Themes
  </h1>

  <RadioGroup value={color} onChange={setColor}>
    <RadioGroup.Label className="block mt-5">Select a color:</RadioGroup.Label>
    <div className="flex justify-between space-x-8 mt-2">
      {colors.map((c) => (
        <RadioGroup.Option className="checked:text-onPrimaryBg checked:bg-primaryBg ring-4 checked:ring-primary not-checked:ring-onNeutralBg h-20 w-full flex justify-center items-center font-bold uppercase cursor-pointer"
         key={c} value={c}>
          {c}
        </RadioGroup.Option>
      ))}
    </div>
  </RadioGroup>

  <Switch.Group>
      <div className="mt-10">
        <Switch.Label className="block">Enable dark mode:</Switch.Label>
        <Switch 
            className="bg-neutralBg relative inline-flex w-11 h-6 rounded-full items-center"
            checked={mode === "dark"} onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          <span className="h-4 w-4 bg-neutralBg rounded-full inline-block transform transition not-checked: translate-x-1 checked: translate-x-6"/>
          </Switch>
      </div>
    
  </Switch.Group>
</div>

    </div>
  );
}

export default App;
