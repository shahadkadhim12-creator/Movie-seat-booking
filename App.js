 import SeatService from "./SeatService.js";
import { fetchMovies } from "./MovieService.js";
import { updateSummary, populateMovieSelect } from "./ui.js";

const seatService = new SeatService();
const seats = document.querySelectorAll(".seat");
const movieSelect = document.querySelector("#movie");

let currentPrice = 0;

async function init() {
  const movies = await fetchMovies();
  populateMovieSelect(movies);
}

init();

movieSelect.addEventListener("change", (event) => {
  const selectedOption = event.target.selectedOptions[0];
  currentPrice = Number(selectedOption.dataset.price) || 0;

  updateSummary(seatService.getSelectedCount(), currentPrice);
});

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seatService.toggleSeat(seat);
    updateSummary(seatService.getSelectedCount(), currentPrice);
  });
});