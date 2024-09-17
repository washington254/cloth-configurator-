import { atom, useAtom } from "jotai";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const colors = [
  "#FF5733", // Red-Orange
  "#3357FF", // Blue
  "#8E44AD", // Purple
  "#FF6F33", // Orange
  "#5D6D7E", // Slate Gray
  "#2980B9", // Blue-Gray
  "#27AE60", // Emerald Green
  "#D35400", // Burnt Orange
  "#7D3C98", // Dark Violet
];


// Atom to store the selected color
export const colorAtom = atom(colors[0]);

// Atom to store the current color index
export const colorIndexAtom = atom(0);

export const UI = () => {
  const [colorIndex, setColorIndex] = useAtom(colorIndexAtom);  // Track the selected color index
  const [color, setColor] = useAtom(colorAtom); // Track the current color

  // Function to change color when clicking next or previous
  const changeColor = (newIndex) => {
    setColorIndex(newIndex);
    setColor(colors[newIndex]);
  };

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        <a className="pointer-events-auto mt-10 ml-10" href="#">
          <img className="w-20" src="/vite.svg" />
        </a>

        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto bg-slate-800/60 rounded-lg flex items-center gap-4 max-w-full px-3 py-2">
            {/* Left arrow button */}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded text-lg uppercase shrink-0 border bg-black/30 text-white ${
                colorIndex === 0 && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => colorIndex > 0 && changeColor(colorIndex - 1)}
              disabled={colorIndex === 0}
            >
              <FaChevronLeft />
            </button>

            {/* Display color options */}
            {colors.map((colorOption, index) => (
              <button
                key={index}
                className={`border-transparent transition-all duration-300 px-7 py-4 rounded text-lg uppercase shrink-0 border ${
                  index === colorIndex ? "bg-white/90 text-black" : "bg-black/30 text-white"
                }`}
                style={{
                  backgroundColor: colorOption,
                  boxShadow: index === colorIndex ? `0 0 15px 5px ${colorOption}` : 'none' // Apply the glow effect here
                }}
                onClick={() => changeColor(index)}
              >
              </button>
            ))}

            {/* Right arrow button */}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded text-lg uppercase shrink-0 border bg-black/30 text-white ${
                colorIndex === colors.length - 1 && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => colorIndex < colors.length - 1 && changeColor(colorIndex + 1)}
              disabled={colorIndex === colors.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
