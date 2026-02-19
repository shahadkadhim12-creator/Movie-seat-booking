 import Movie from "./Movie.js";

const API_URL = "http://localhost:3000/movies";
const FALLBACK_URL = "../data/movies.json";

export async function fetchMovies() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API not available");
    }

    const data = await response.json();
    return data.map((movie) => new Movie(movie));
  } catch (error) {
    const response = await fetch(FALLBACK_URL);
    const data = await response.json();
    return data.map((movie) => new Movie(movie));
  }
}