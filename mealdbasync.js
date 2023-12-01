const searchFood = async () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = '';
    if(searchText == ''){
        const searchError = document.getElementById('search-error')
        searchError.style.display = 'block';
    } else{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals)

    // fetch(url)
    // .then(res => res.json())
    // .then(data => displaySearchResult(data.meals))
}
}
const displaySearchResult = meals => {
    const displayText = document.getElementById('display-text')
    const searchResult = document.getElementById('search-result')

    if(meals && meals.length){
        
    
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick ="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
} else {
    // searchResult.innerHTML = '';
    searchResult.textContent ='';
    
        displayText.style.display = 'block';
    
}
}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-detail');
    mealDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div)
}
    
