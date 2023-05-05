import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import RecipeCard from "../../Components/RecipeCard";

const Recipes = () => {
  return (
    <div>
      <Navbar />

      <div className="py-12 lg:px-24 md:pl-14 px-8 overflow-x-hidden">
        {/* recipe filter navbar */}
        <div>
          <ul className="list-none flex justify-between cursor-pointer space-x-2">
            <li className="flex items-center">
              <span className="inline-block font-medium">Breakfast</span>
              <span className="text-[#646464] inline-block pl-[.25em]">|</span>
            </li>
            <li className="flex items-center pl-1">
              <span className="inline-block font-medium">Lunch</span>
              <span className="text-[#646464] inline-block pl-[.25em]">|</span>
            </li>
            <li className="flex items-center pl-1">
              <span className="inline-block font-medium">Dinner</span>
              <span className="text-[#646464] inline-block pl-[.25em]">|</span>
            </li>
            <li className="flex items-center pl-1">
              <span className="inline-block font-medium">Dessert</span>
              <span className="text-[#646464]  sm: inline-block pl-[.25em]">|</span>
            </li>
            <li className="flex items-center pl-1">
              <span className="inline-block font-medium">Snacks</span>
              <span className="text-[#646464] inline-block pl-[.25em]">|</span>
            </li>
            <li className="flex items-center pl-1">
              <span className="inline-block font-medium">Beverages</span>
              <span className="text-[#646464] inline-block pl-[.25em]">|</span>
            </li>
            <li className="flex items-center pl-1">
              <span className="inline-block font-medium">Holidays</span>
              <span className="text-[#646464] inline-block pl-[.25em]">|</span>
            </li>
            <li className="flex items-center pl-1">
              <span className="inline-block font-medium">Regional&nbsp;Cuisines</span>
              <span className="text-[#646464] inline-block pl-[.25em]">|</span>
            </li>
            <li className="flex items-center pl-1">
              <span className="inline-block font-medium">Special&nbsp;Diets</span>
              <span className="text-[#646464] inline-block pl-[.25em]">|</span>
            </li>
          </ul>
        </div>
        <div className="flex my-6 py-6  md:space-x-16 space-x-4 font-semibold">
          <button
            type="button"
            className="text-[#DA0A0A] md:w-[328px] md:h-[64px] h-auto w-auto text-lg md:text-xl px-8 py-3 border-[#DA0A0A] border rounded-xl cursor-pointer"
          >
            Search all recipes
          </button>
          <button
            type="button"
            className="text-xl md:w-[328px] md:h-[64px] w-auto h-auto px-8 py-3 bg-[#FBCD08] rounded-xl cursor-pointer"
          >
            Saved recipes
          </button>
        </div>
        <div className="my-2 py-6">
          <div>
            <h3 className="font-[700] text-[24px] leading-[33px]">Recipes You'll Love</h3>
            <p className="text-lg font-[400] text-[18px] leading-[25px]">
              Find a new favorite dish for your table with our collection of recipes.
            </p>
          </div>

          <div className="py-6 my-6 grid lg:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
            <RecipeCard
              title="Recipes Ready in Under 30 Minutes"
              description="From Dan Dan Noodles to savory seafood dishes, these quick and easy recipes are perfect for busy days"
            />
            <RecipeCard
              title="Best Vegan Recipes"
              description="Add the power of plants to your plate with delicious, nutritious recipes, filled with veggies and plant‑based favorites"
            />
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
            <RecipeCard
              title="Recipes Ready in Under 30 Minutes"
              description="From Dan Dan Noodles to savory seafood dishes, these quick and easy recipes are perfect for busy days"
            />
            <RecipeCard
              title="Best Vegan Recipes"
              description="Add the power of plants to your plate with delicious, nutritious recipes, filled with veggies and plant‑based favorites"
            />
          </div>
        </div>
        <div className="my-2 py-6">
          <div>
            <h3 className="font-[700] text-[24px] leading-[33px]">Breakfast</h3>
            <p className="text-lg font-[400] text-[18px] leading-[25px]">
              Find a new favorite dish for your table with our collection of recipes.
            </p>
          </div>

          <div className="py-6 my-6 grid lg:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
            <RecipeCard
              title="Recipes Ready in Under 30 Minutes"
              description="From Dan Dan Noodles to savory seafood dishes, these quick and easy recipes are perfect for busy days"
            />
            <RecipeCard
              title="Best Vegan Recipes"
              description="Add the power of plants to your plate with delicious, nutritious recipes, filled with veggies and plant‑based favorites"
            />
          </div>
        </div>
        <div className="my-2 py-6">
          <div>
            <h3 className="font-[700] text-[24px] leading-[33px]">Lunch</h3>
            <p className="text-lg font-[400] text-[18px] leading-[25px]">
              Find a new favorite dish for your table with our collection of recipes.
            </p>
          </div>

          <div className="py-6 my-6 grid lg:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
            <RecipeCard
              title="Recipes Ready in Under 30 Minutes"
              description="From Dan Dan Noodles to savory seafood dishes, these quick and easy recipes are perfect for busy days"
            />
            <RecipeCard
              title="Best Vegan Recipes"
              description="Add the power of plants to your plate with delicious, nutritious recipes, filled with veggies and plant‑based favorites"
            />
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
          </div>
        </div>
        <div className="my-2 py-6">
          <div>
            <h3 className="font-[700] text-[24px] leading-[33px]">Dinner</h3>
            <p className="text-lg font-[400] text-[18px] leading-[25px]">
              Find a new favorite dish for your table with our collection of recipes.
            </p>
          </div>

          <div className="py-6 my-6 grid lg:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
            <RecipeCard
              title="Recipes Ready in Under 30 Minutes"
              description="From Dan Dan Noodles to savory seafood dishes, these quick and easy recipes are perfect for busy days"
            />
            <RecipeCard
              title="Best Vegan Recipes"
              description="Add the power of plants to your plate with delicious, nutritious recipes, filled with veggies and plant‑based favorites"
            />
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
          </div>
        </div>{" "}
        <div className="my-2 py-6">
          <div>
            <h3 className="font-[700] text-[24px] leading-[33px]">Dessert & Snacks</h3>
            <p className="text-lg font-[400] text-[18px] leading-[25px]">
              Find a new favorite dish for your table with our collection of recipes.
            </p>
          </div>

          <div className="py-6 my-6 grid lg:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
            <RecipeCard
              title="Recipes Ready in Under 30 Minutes"
              description="From Dan Dan Noodles to savory seafood dishes, these quick and easy recipes are perfect for busy days"
            />
            <RecipeCard
              title="Best Vegan Recipes"
              description="Add the power of plants to your plate with delicious, nutritious recipes, filled with veggies and plant‑based favorites"
            />
          </div>
        </div>
        <div className="my-2 py-6">
          <div>
            <h3 className="font-[700] text-[24px] leading-[33px]">Beverages</h3>
            <p className="text-lg font-[400] text-[18px] leading-[25px]">
              Find a new favorite dish for your table with our collection of recipes.
            </p>
          </div>

          <div className="py-6 my-6 grid lg:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
            <RecipeCard
              title="Recipes by Main Ingredient"
              description=" Whether you prefer chicken, beef, seafood or veggies, you’ll love our delicious recipes
          starring your favorites"
            />
            <RecipeCard
              title="Recipes Ready in Under 30 Minutes"
              description="From Dan Dan Noodles to savory seafood dishes, these quick and easy recipes are perfect for busy days"
            />
            <RecipeCard
              title="Best Vegan Recipes"
              description="Add the power of plants to your plate with delicious, nutritious recipes, filled with veggies and plant‑based favorites"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
