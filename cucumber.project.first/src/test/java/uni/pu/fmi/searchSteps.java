package uni.pu.fmi;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.fmi.models.SearchScreenModel;

public class searchSteps {

	SearchScreenModel searchScreen = new SearchScreenModel();

	@Given("^Клиентът стартира бутона за търсене\\.$")
	public void clickSearchButton() throws Throwable {
		searchScreen.clickSearchButton();

	}

	@When("^Въвежда името на филма, който иска да намери в полето за търсене \"([^\"]*)\"$")
	public void addMovieTitle(final String movieName) throws Throwable {
		searchScreen.setMovieName(movieName);
	}

	@When("^Натиска лупичката на бутона за търсене с въведената информация\\.$")
	public void clickMagnifyingGlassButton() throws Throwable {
		searchScreen.clickMagnifyingGlassButton();
	}

	@Then("^Вижда съобщение \"([^\"]*)\"\\.$")
	public void displayResults(String resultMessage) throws Throwable {
		assertEquals(resultMessage, searchScreen.getSearchMessage());
	}

	@Given("^Натиска лупичката на бутона за търсене без въведената информация\\.$")
	public void clickSearchButtonWithoutInput() throws Throwable {
		searchScreen.clickSearchButtonWithoutInput();

	}

}
