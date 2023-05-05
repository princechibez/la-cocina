import React, { useState, useEffect } from 'react';
import './Features.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Features = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://lacocina-api.onrender.com/api/v1/recipe/getAllRecipes')
      .then(response => {
        // console.log(response.data);
        setRecipes(response.data.data);
        setIsLoading(false);
      })
      .catch(error => {
        // console.error(error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading recipes...</div>;
  }

  if (error) {
    return <div className="error-message">Failed to load recipes: {error.message}</div>;
  }

  return (
    <div className='features'>
      <h1>Featured Recipe</h1>
      <p>Try making meals from our featured recipes</p>

        <div className='container'>
            {Array.isArray(recipes) && recipes.map(recipe => {
                // console.log(recipe); // added console.log statement
                return (
                    <div className='flexItem' key={recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h4>{recipe.title}</h4>
                    <p>{recipe.dishType}</p>
                    </div>
                )
            })}
        </div>


      <Link to='/recipe' className='link'>Get cooking</Link>
    </div>
  );
};

export default Features;
