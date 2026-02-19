 export function updateSummary(count, price) {
  const summary = document.querySelector("#summary");
  summary.textContent = `${count} seats for a price of ${count * price} kr`;
}

export function populateMovieSelect(movies) {
  const select = document.querySelector("#movie");

  movies.forEach((movie) => {
    const option = document.createElement("option");
    option.value = movie.id;
    option.textContent = `${movie.title} (${movie.price} kr)`;
    option.dataset.price = movie.price;
    select.appendChild(option);
  });
}