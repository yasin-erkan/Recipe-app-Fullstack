import React from 'react';

const Sort = ({setOrder}) => {
  return (
    <select
      className="rounded-md p-2 border border-gray-300 shadow-sm text-gray-700 transition duration-200 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-orange-400 hover:border-orange-400"
      defaultValue=""
      onChange={e => setOrder(e.target.value)}>
      <option value="" disabled>
        Sort by Time
      </option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
};

export default Sort;
