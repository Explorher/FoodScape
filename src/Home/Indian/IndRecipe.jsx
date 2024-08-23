import React, { useEffect, useState } from 'react';
import './IndRecipe.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust path if necessary
import { Link } from 'react-router-dom'
export default function IndRecipe() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const collectionRef = collection(db, 'food');
        const querySnapshot = await getDocs(collectionRef);
        const dishesData = querySnapshot.docs.map(doc => doc.data());
        setDishes(dishesData);
        console.log(dishesData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div className="recipe-container">
      {dishes.map((food, index) => (
        <div key={index} className="recipe-card">
          <div className="image-container">
            <img src={food.imageURL} alt="Dish" />
          </div>
          <div className="content">
            <h2 className="recipe-title">
              Delicious {food.name}
              <img src={food.type} alt="Additional" className="additional-image" />
            </h2>
            <p className="recipe-about">{food.About}</p>
            {/* <p className="recipe-recipe">{food.recipe}</p> */}
          </div>
          <div className="button-container">
           <Link to="/InGet"> <button className="get-recipe-button">Get Recipe</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}
