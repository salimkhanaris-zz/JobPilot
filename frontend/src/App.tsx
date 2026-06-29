import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import Dashboard from "@/pages/Dashboard";
import Profiles from "@/pages/Profiles";
import Jobs from "@/pages/Jobs";
import Apply from "@/pages/Apply";
import History from "@/pages/History";
import Settings from "@/pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;