package uni.pu.fmi.services;

import java.util.ArrayList;
import java.util.List;

import uni.pu.fmi.Reservation;

public class SaveService {

	
	public static String save(String personalNames,String time,String date, String rowAndSeat) {
		if (personalNames == null) {
			return "Въведете правилните си лични имена";
		}
		if (time == null) {
			return "Въведете коректното време";
		}
		if (date == null) {
			return "Въведете коректната дата";
		}
		if (rowAndSeat == null) {
			return "Въведете коректните ред и място";
		}



		
		List<Reservation> reservations= getReservations();
		boolean reservationExist = reservations.stream()
				.anyMatch(reservation ->
		(reservation.getClientFirstAndLastNames().equals(personalNames))
			&& (reservation.getTime().equals(time))
			&& (reservation.getDate().equals(date))
			&& reservation.getRowAndSeat().equals(rowAndSeat));
		
		if(reservationExist) {
			return "Успешна резервация с цялата информация";
		}
		
		boolean reservationNameExist = reservations.stream()
				.anyMatch(reservation -> reservation.getClientFirstAndLastNames().equals(personalNames));
		if(!reservationNameExist) {
			return "неуспешна резервация поради грешно име";
		}
		
		boolean reservationTimeExist = reservations.stream()
				.anyMatch(reservation -> reservation.getTime().equals(time));
		if(!reservationTimeExist) {
			return "неуспешна резервация поради грешен час";
		}
		
		boolean reservationDateExist = reservations.stream()
				.anyMatch(reservation -> reservation.getDate().equals(date));
		if(!reservationDateExist) {
			return "неуспешна резервация поради грешна дата";
		}
		
		boolean reservationRowExist = reservations.stream()
				.anyMatch(reservation -> reservation.getRowAndSeat().equals(rowAndSeat));
		if(!reservationRowExist) {
			return "неуспешна резервация поради грешно място";
		}
		
		return null;
	}
	
	

	public static List<Reservation> getReservations(){
		Reservation reservation = new Reservation();
		reservation.setClientFisrtAndLastNames("Мария Павлова");
		reservation.setTime("20:00");
		reservation.setDate("01.02.2021");
		reservation.setRowAndSeat("7,17");
		ArrayList<Reservation> reservations = new ArrayList<Reservation>();
		reservations.add(reservation);
		return reservations;
	}

}
