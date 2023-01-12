import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrentLevelProvider } from "../contex/LevelContex";
import Game from "./game/Game";
import Homepage from "./homepage/Homepage";
function App() {
  return (
    <CurrentLevelProvider>
      <BrowserRouter>
        <div className="bg-gray-50 min-h-screen w-full">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/game" element={<Game />} />
            <Route
              path="/leaderboard"
              element={
                <h1 className="h-screen text-2xl flex justify-center items-center">
                  leaderboard
                </h1>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CurrentLevelProvider>
  );
}

export default App;
