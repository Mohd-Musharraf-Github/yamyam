import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/Index";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const {
    setRecipeList,
    recipeDetailData,
    setRecipeDetailData,
    FavouriteList,
    handleAddToFavourite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetail() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      console.log(`data ${data?.data}`);

      if (data?.data) {
        setRecipeDetailData(data?.data);
      }
    }
    getRecipeDetail();
  }, []);

  console.log(`recipe Detail Data${recipeDetailData}`);

  return (
    <div className="className = container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm text-cyan-700 font-medium">
            {recipeDetailData?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {recipeDetailData?.recipe?.title}
          </h3>
          <button
            onClick={() => handleAddToFavourite(recipeDetailData?.recipe)}
            className="p-3 px-8 bg-black text-white rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-sm"
          >
            {FavouriteList &&
            FavouriteList.length > 0 &&
            FavouriteList.findIndex(
              (item) => item.id === recipeDetailData?.recipe?.id
            ) !== -1
              ? <p className="text-red-300">Remove From Favourite</p>
              : <p className="text-green-300"> Remove From Favourite</p>}
          </button>
          <div>
            <span className="text-2xl text-black text font-semibold">
              Ingrident:
            </span>
            <ul className="flex flex-col gap-3">
              {recipeDetailData?.recipe?.ingredients.map((ingredients) => (
                <li>
                  <span className="text-2xl font-semibold text-black">
                    {ingredients.quantity}
                    {ingredients.unit}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {ingredients.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
