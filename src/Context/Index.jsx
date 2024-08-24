import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParms, setSearchPrams] = useState("");
  const [loading, setLoading] = useState("false");
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailData, setRecipeDetailData] = useState(null);
  const [FavouriteList, setFavouriteList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParms}`
      );
      const data = await res.json();
      

      if (data?.data?.recipes) {
        
        
        setRecipeList(data?.data?.recipes);
        console.log( `inside ${recipeList}`);
        setLoading(false);
        setSearchPrams("");
        navigate("/");  
      }


    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchPrams("");
    }

    ;
  }

  function handleAddToFavourite(getCurrentRecipe){
    console.log(`favurite${getCurrentRecipe}`);
     const copyFavouriteList = [...FavouriteList]
     const getid = copyFavouriteList.findIndex((item)=> item.id === getCurrentRecipe.id)
     console.log(`getid${getid}`);

     if(getid===-1){copyFavouriteList.push(getCurrentRecipe)}
     else{
      copyFavouriteList.splice(getid);
     }
     
     setFavouriteList(copyFavouriteList);
  }

  console.log(FavouriteList);
  

  return (
    <GlobalContext.Provider
      value={{
        searchParms,
        setSearchPrams,
        handleSubmit,
        loading,
        setLoading,
        recipeList,
        setRecipeList,
        recipeDetailData,
        setRecipeDetailData,
        FavouriteList,
        navigate,
        handleAddToFavourite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
