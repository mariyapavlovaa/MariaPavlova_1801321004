package uni.pu.fmi;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.pu.fmi.models.SaveScreenModel;

public class saveSteps {

	SaveScreenModel saveScreen = new SaveScreenModel();

	@Given("^�������� ������� ������ �� �������� �� ���� �������� ���� ����\\.$")
	public void selectResult() throws Throwable {
		saveScreen.selectReservationScreen();
	}

	@When("^������� ������ ����� � ������ � ��������� �� ��������� \"([^\"]*)\"$")
	public void addPersonalNames(final String personalNames) throws Throwable {
		saveScreen.addPersonalNames(personalNames);
	}

	@When("^������ ���� �� ������� �������� \"([^\"]*)\"$")
	public void selectDate(final String date) throws Throwable {
		saveScreen.addDate(date);
	}

	@When("^������ ��� �� ������ � ��������� \"([^\"]*)\"$")
	public void selectTime(final String time) throws Throwable {
		saveScreen.addTime(time);
	}

	@When("^������ ��� � ����� � �������� ���� \"([^\"]*)\"$")
	public void addRowAndSeat(final String rowAndSeat) throws Throwable {
		saveScreen.addRowAndSeat(rowAndSeat);
	}

	@When("^������� ����� �� ���������$")
	public void addRowAndSeat() throws Throwable {
		saveScreen.clickSaveButton();
	}

	@Then("^������� ��������� \"([^\"]*)\"\\.$")
	public void checkSaveMessage(String savedReservationMessage) throws Throwable {
		assertEquals(savedReservationMessage, saveScreen.getSaveMessage());
	}

}
