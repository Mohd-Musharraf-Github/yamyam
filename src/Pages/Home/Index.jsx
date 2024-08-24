import { useContext } from "react";
import { GlobalContext } from "../../Context/Index";
import RecipeItem from "../../Components/Recipe-Item/Index";

export default function Home() {
  const { recipeList, Loading } = useContext(GlobalContext);

  if (Loading) {
    <div>
      <h1> Please wait....(*_*)....</h1>
    </div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap center gap-8">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((recipeitem) => (
          <RecipeItem item={recipeitem} key={recipeitem?.id} />
        ))
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold ">
          <h1>!!! (*_*) !!! Please Search Something</h1>
        </div>
      )}
    </div>
  );
}
