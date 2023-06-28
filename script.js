// Get the search button, search input, and meal list
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const mealList = document.getElementById('meal-list');

// Add event listener to the search button
searchButton.addEventListener('click', searchMeal);

// Add event listener to the search input to listen for "Enter" key press
searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchMeal();
  }
});

// Function to search for meals
function searchMeal() {
  const searchValue = searchInput.value.toLowerCase();
  const meals = mealList.getElementsByTagName('li');

  for (let i = 0; i < meals.length; i++) {
    const mealName = meals[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
    if (mealName.includes(searchValue)) {
      meals[i].style.display = 'block';
    } else {
      meals[i].style.display = 'none';
    }
  }
}
