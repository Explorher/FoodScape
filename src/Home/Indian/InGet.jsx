import React from 'react'
import './InGet.css'

export default function InGet() {
  return (
    <div class='bo'>


<div class="containerr">
        <div class="lefft-section">
            <img src="your-image.jpg" alt="Dish Image"/>
        </div>
        <div class="right-section">
            <div class="top-right">
                <div class="servings">
                    <div class="servings-label">Servings:</div>
                    <div class="servings-input-container">
                        <button class="servings-button">-</button>
                        <input type="number" id="servings-input" value="1" min="1"/>
                        <button class="servings-button">+</button>
                    </div>
                </div>
                <div class="ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
                        
                    </ul>
                </div>
            </div>
            <div class="bottom-right">
                <p>
                    Here is the paragraph where you describe the recipe or provide further instructions. 
                    Add as much detail as necessary to fill out this section.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}
