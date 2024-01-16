import axios from "axios";
class MovieDataService {
  getAll(page = 0) {
    return axios.get(`https://lvz-web-development-movie-reviews-app.onrender.com/api/v1/movies?page=${page}`); //http://localhost:5000/api/v1/movies?page=${page}
  }
  get(id) {
    return axios.get(`https://lvz-web-development-movie-reviews-app.onrender.com/api/v1/id/${id}`); //http://localhost:5000/api/v1/movies/id/${id}
  }
  find(query, by = "title", page = 0) {
    return axios.get(
      `https://lvz-web-development-movie-reviews-app.onrender.com/api/v1/movies?${by}=${query}&page=${page}`
    ); //http://localhost:5000/api/v1/movies?${by}=${query}&page=${page}
  }
  createReview(data) {
    return axios.post("https://lvz-web-development-movie-reviews-app.onrender.com/api/v1/movies/review", data); //http://localhost:5000/api/v1/movies/review
  }
  updateReview(data) {
    return axios.put("https://lvz-web-development-movie-reviews-app.onrender.com/api/v1/movies/review", data); //http://localhost:5000/api/v1/movies/review
  }
  deleteReview(id, userId) {
    return axios.delete("https://lvz-web-development-movie-reviews-app.onrender.com/api/v1/movies/review", { //http://localhost:5000/api/v1/movies/review
      data: { review_id: id, user_id: userId },
    });
  }
  getRatings() {
    return axios.get("https://lvz-web-development-movie-reviews-app.onrender.com/api/v1/movies/ratings"); //http://localhost:5000/api/v1/movies/ratings
  }
}
export default new MovieDataService();
