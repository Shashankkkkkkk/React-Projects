import { useState } from "react";

const colors = ["green", "red", "blue"];
const modes = ["light", "dark"];

function App() {
  const [color, setColor] = useState(colors[0]);
  const [mode, setMode] = useState(modes[0]);
  console.log(color);
  return (
    <div
      className={[
        "font-mono bg-primaryBg h-screen flex flex-col justify-center",
        "theme-${color}",
        "theme-${mode}",
      ]
        .filter(Boolean).join(" ")}>
      <div>
        <h1 className="text-3xl font-bold text-center">
          Tailwind Themes
        </h1>
      </div>
    </div>
  );
}

export default App;
