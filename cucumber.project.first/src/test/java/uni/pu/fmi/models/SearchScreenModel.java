package uni.pu.fmi.models;

import uni.pu.fmi.services.SearchService;

public class SearchScreenModel {

	private String message;
	private String movieName;

	public void clickSearchButton() {
		message = SearchService.search(movieName);
	}

	public void setMovieName(final String movieName) {
		this.movieName = movieName;
	}

	public void clickMagnifyingGlassButton() {
		message = SearchService.search(movieName);

	}

	public String getSearchMessage() {
		return message;
	}
	
	public void clickSearchButtonWithoutInput() {
	}
}
