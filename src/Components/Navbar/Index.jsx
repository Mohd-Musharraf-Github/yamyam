import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/Index";

export default function Navbar() {
  const { searchParms, setSearchPrams, handleSubmit } = useContext(GlobalContext);
  console.log(searchParms);
  

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Serch Here...."
          value={searchParms}
          onChange={(event) => setSearchPrams(event.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to={"/"} className={"text-gray-500 hover:text-orange-600 duration-300"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"Favourite"} className={"text-gray-500 hover:text-orange-600 duration-300 "}>
            Favorites
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}
