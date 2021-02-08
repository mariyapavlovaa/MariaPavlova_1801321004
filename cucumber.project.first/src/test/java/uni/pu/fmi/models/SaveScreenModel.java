package uni.pu.fmi.models;

import uni.pu.fmi.services.SaveService;

public class SaveScreenModel {

	private String saveMessage;
	private String personalNames;
	private String rowAndSeat;
	private String date;
	private String time;

	public void clickSaveButton() {
		saveMessage = SaveService.save(personalNames, time, date, rowAndSeat);
	}

	public void addPersonalNames(final String personalNames) {
		this.personalNames = personalNames;
	}

	public void addDate(final String date) {
		this.date = date;

	}

	public void addTime(final String time) {
		this.time = time;
	}

	public void addRowAndSeat(final String rowAndSeat) {
		this.rowAndSeat = rowAndSeat;

	}

	public void selectReservationScreen() {
		System.out.println("Намираме се на екрана за резервации.");
	}

	public String getSaveMessage() {
		return saveMessage;
	}

}
