import {CiSearch} from 'react-icons/ci';

const Search = ({setSearchTerm}) => {
  return (
    <section
      className="bg-white flex gap-3 p-3 rounded-lg overflow-hidden items-center shadow-lg 
                        border border-gray-300 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-400 transition">
      <CiSearch className="text-2xl text-gray-500" />

      <input
        type="text"
        placeholder="Search recipes..."
        className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </section>
  );
};

export default Search;
