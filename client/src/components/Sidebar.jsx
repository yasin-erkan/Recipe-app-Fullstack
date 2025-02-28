import {NavLink} from 'react-router-dom';
import {links} from '../../constants';

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen justify-between items-center md:px-3 py-3 max-md:gap-20 max-md:justify-normal">
      <img
        src="/r_logo.jpg"
        alt="logo"
        className="max-w-[80px] md:max-w-[150px] "
      />

      <nav className="flex flex-col gap-6">
        {links.map((i, key) => (
          <NavLink
            key={key}
            to={i.path}
            className="flex items-center gap-4 py-3 px-4 rounded-lg text-lg text-gray-600 transition duration-300 ease-in-out 
                 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-white shadow-md">
            <span className="text-2xl">{i.icon}</span>
            <span className="max-md:hidden font-semibold">{i.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col items-center gap-5 bg-gray-100 p-4 rounded-lg shadow-lg max-md:hidden">
        <p className="font-semibold text-gray-700 text-lg">Get daily news</p>

        <button
          className="bg-red-500 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 
                     hover:bg-red-400 hover:shadow-md active:scale-95">
          Subscribe
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
