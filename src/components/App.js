import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./common/Loading";
import { CurrentLevelProvider, LevelListProvider } from "../contex/LevelContex";
import Homepage from "./homepage/Homepage";
function App() {
  return (
    <CurrentLevelProvider>
      <LevelListProvider>
        <BrowserRouter>
          <div className="bg-gray-50 min-h-screen w-full">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/game" element={<Loading />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LevelListProvider>
    </CurrentLevelProvider>
  );
}

export default App;
