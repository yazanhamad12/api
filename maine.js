async function getPizza() {
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();

    const pizzas = data.recipes;

    const result = pizzas.map(function(pizza) {
        return `
        <div>
            <h2>${pizza.title}</h2>
            <img src='${pizza.image_url}' alt='Pizza Image'>
            <div>
               
            </div>
        </div>
        `;
    }).join('');

    document.querySelector(".data").innerHTML = result;
}

getPizza();
