import { NavLink } from "react-router-dom";
import { navigation } from "@/config/navigation";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-zinc-950 px-4 py-6">
      <div className="mb-10 px-3">
        <h1 className="text-2xl font-bold tracking-tight">
          🚀 JobPilot
        </h1>

        <p className="text-sm text-zinc-500">
          AI Career Copilot
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              <Icon size={18} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}