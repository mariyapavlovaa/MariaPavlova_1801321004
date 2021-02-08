package uni.pu.fmi;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.fmi.models.SaveScreenModel;

public class saveSteps {

	SaveScreenModel saveScreen = new SaveScreenModel();

	@Given("^Клиентът натиска полето на избрания от него резултат чрез клик\\.$")
	public void selectResult() throws Throwable {
		saveScreen.selectReservationScreen();
	}

	@When("^Въвежда своите имена в полето в отворилия се екземпляр \"([^\"]*)\"$")
	public void addPersonalNames(final String personalNames) throws Throwable {
		saveScreen.addPersonalNames(personalNames);
	}

	@When("^Добавя дата от падащия календар \"([^\"]*)\"$")
	public void selectDate(final String date) throws Throwable {
		saveScreen.addDate(date);
	}

	@When("^Добавя час от менюто с часовника \"([^\"]*)\"$")
	public void selectTime(final String time) throws Throwable {
		saveScreen.addTime(time);
	}

	@When("^Добавя ред и място в даденото поле \"([^\"]*)\"$")
	public void addRowAndSeat(final String rowAndSeat) throws Throwable {
		saveScreen.addRowAndSeat(rowAndSeat);
	}

	@When("^Натиска бутон за запазване$")
	public void addRowAndSeat() throws Throwable {
		saveScreen.clickSaveButton();
	}

	@Then("^Показва съобщение \"([^\"]*)\"\\.$")
	public void checkSaveMessage(String savedReservationMessage) throws Throwable {
		assertEquals(savedReservationMessage, saveScreen.getSaveMessage());
	}

}
