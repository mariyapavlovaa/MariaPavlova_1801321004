package uni.pu.fmi;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.fmi.models.SearchScreenModel;

public class searchSteps {

	SearchScreenModel searchScreen = new SearchScreenModel();

	@Given("^�������� �������� ������ �� �������\\.$")
	public void clickSearchButton() throws Throwable {
		searchScreen.clickSearchButton();

	}

	@When("^������� ����� �� �����, ����� ���� �� ������ � ������ �� ������� \"([^\"]*)\"$")
	public void addMovieTitle(final String movieName) throws Throwable {
		searchScreen.setMovieName(movieName);
	}

	@When("^������� ��������� �� ������ �� ������� � ���������� ����������\\.$")
	public void clickMagnifyingGlassButton() throws Throwable {
		searchScreen.clickMagnifyingGlassButton();
	}

	@Then("^����� ��������� \"([^\"]*)\"\\.$")
	public void displayResults(String resultMessage) throws Throwable {
		assertEquals(resultMessage, searchScreen.getSearchMessage());
	}

	@Given("^������� ��������� �� ������ �� ������� ��� ���������� ����������\\.$")
	public void clickSearchButtonWithoutInput() throws Throwable {
		searchScreen.clickSearchButtonWithoutInput();

	}

}
