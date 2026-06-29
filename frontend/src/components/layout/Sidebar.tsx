import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 p-6">
      <div className="mb-8 text-2xl font-bold">
        🚀 JobPilot
      </div>

      <nav className="flex flex-col gap-4">

        <Link to="/">Dashboard</Link>

        <Link to="/profiles">Profiles</Link>

        <Link to="/jobs">Jobs</Link>

        <Link to="/apply">Apply</Link>

        <Link to="/history">History</Link>

        <Link to="/settings">Settings</Link>

      </nav>
    </aside>
  );
}