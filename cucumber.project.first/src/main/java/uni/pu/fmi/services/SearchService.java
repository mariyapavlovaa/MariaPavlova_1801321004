package uni.pu.fmi.services;

import java.util.ArrayList;
import java.util.List;

import uni.pu.fmi.Movie;

public class SearchService {

	public static String search(String movieName) {
		if (movieName == null) {
			return "Въведете името на филма";
		}

		List<Movie> movies = getMovies();
		boolean isMovieExist = movies.stream().anyMatch(movie -> movie.getName().equals(movieName));
		return isMovieExist ? "MovieResultsAreFine" : "Неналични прожекции";
	}

	public static List<Movie> getMovies() {
		Movie movie = new Movie();
		movie.setName("Harry Potter");
		ArrayList<Movie> movies = new ArrayList<Movie>();
		movies.add(movie);
		return movies;
	}
}
