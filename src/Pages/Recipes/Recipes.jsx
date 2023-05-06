import { useEffect, useState } from "react";
import axios from "axios";
import './Recipes.scss'
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import RecipeCard from "../../Components/RecipeCard";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const headers = [
    {
      title: "Breakfast"
    },
    {
      title: "Lunch"
    },
    {
      title: "Dinner"
    },
    {
      title: "Dessert"
    },
    {
      title: "Snacks"
    },
    {
      title: "Beverages"
    },
    {
      title: "Holidays"
    },
    {
      title: "Regional Cusines"
    },
    {
      title: "Special Diets"
    },
  ]

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  const fetchAllRecipes = async () => {
    try {
      const response = await axios("https://lacocina-api.onrender.com/api/v1/recipe/getAllRecipes");
      setRecipes(response.data.data);
      setIsPending(false);
      console.log(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="recipe">

      <Navbar />

      <div className="titles">
          {headers.map((header, index) => (
            <aside>
              <p>{header.title}</p>
            </aside>
          ))}
      </div>

      <button type="button" id="all" className="btn"> Search all Recipes</button>
      <button type="button" id="saved" className="btn"> Saved Recipes </button>

      <div className="container">
          <h3>Recipes you'll love</h3>
          <p>Find a new favorite dish for your table with our collection of recipes.</p>

          <div className="content">
            <Link to={`/recipes/:recipe.Id`} className="rep">
            </Link>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
