import user from "../types/User";

export function Header()
{
    return (
        <header className="bg-indigo-600 text-white p-4 shadow-lg flex justify-between items-center">
          <div className="text-xl font-semibold tracking-wide">
            <h1>Fancy App</h1>
          </div>
    
          <div className="flex items-center space-x-4">
            <span className="text-lg font-medium">{user.name} {user.lastname}</span>
            <img
              className="w-10 h-10 rounded-full"
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt="User Avatar"
              />
          </div>
    
          <nav>
            <ul className="flex space-x-6">
              <li><a className="hover:text-indigo-200 transition-colors" href="/">Home</a></li>
              <li><a className="hover:text-indigo-200 transition-colors" href="/add">Add Project</a></li>
              <li><a className="hover:text-indigo-200 transition-colors" href="/edit/1">Edit Project</a></li>
            </ul>
          </nav>
        </header>
      );
}