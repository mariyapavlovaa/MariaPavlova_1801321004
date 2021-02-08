package uni.pu.fmi.services;

import java.util.ArrayList;
import java.util.List;

import uni.pu.fmi.Reservation;

public class SaveService {

	
	public static String save(String personalNames,String time,String date, String rowAndSeat) {
		if (personalNames == null) {
			return "�������� ���������� �� ����� �����";
		}
		if (time == null) {
			return "�������� ���������� �����";
		}
		if (date == null) {
			return "�������� ���������� ����";
		}
		if (rowAndSeat == null) {
			return "�������� ���������� ��� � �����";
		}



		
		List<Reservation> reservations= getReservations();
		boolean reservationExist = reservations.stream()
				.anyMatch(reservation ->
		(reservation.getClientFirstAndLastNames().equals(personalNames))
			&& (reservation.getTime().equals(time))
			&& (reservation.getDate().equals(date))
			&& reservation.getRowAndSeat().equals(rowAndSeat));
		
		if(reservationExist) {
			return "������� ���������� � ������ ����������";
		}
		
		boolean reservationNameExist = reservations.stream()
				.anyMatch(reservation -> reservation.getClientFirstAndLastNames().equals(personalNames));
		if(!reservationNameExist) {
			return "��������� ���������� ������ ������ ���";
		}
		
		boolean reservationTimeExist = reservations.stream()
				.anyMatch(reservation -> reservation.getTime().equals(time));
		if(!reservationTimeExist) {
			return "��������� ���������� ������ ������ ���";
		}
		
		boolean reservationDateExist = reservations.stream()
				.anyMatch(reservation -> reservation.getDate().equals(date));
		if(!reservationDateExist) {
			return "��������� ���������� ������ ������ ����";
		}
		
		boolean reservationRowExist = reservations.stream()
				.anyMatch(reservation -> reservation.getRowAndSeat().equals(rowAndSeat));
		if(!reservationRowExist) {
			return "��������� ���������� ������ ������ �����";
		}
		
		return null;
	}
	
	

	public static List<Reservation> getReservations(){
		Reservation reservation = new Reservation();
		reservation.setClientFisrtAndLastNames("����� �������");
		reservation.setTime("20:00");
		reservation.setDate("01.02.2021");
		reservation.setRowAndSeat("7,17");
		ArrayList<Reservation> reservations = new ArrayList<Reservation>();
		reservations.add(reservation);
		return reservations;
	}

}
