package uni.pu.fmi;
import java.util.*;

/**
 * 
 */
public class Reservation {

	
	    private int reservationId;
	    private String time;
	    private String date;
	    private String clientFirstAndLastNames;
	    private String rowAndSeat;
	    private String status;
	    public Client client;
	    public Movie movie;
	    public Cinema cinema;
	
	
    /**
     * Default constructor
     */
    public Reservation() {
    }

    /**
     * 
     */
  
    public Movie getMovie() {
        return movie;
    }

    /**
     * @param movie 
     * @return
     */
    public void setMovie(Movie movie) {
      this.movie=movie;
    }

    /**
     * @return
     */
    public Cinema getCinema() { 
        return cinema;
    }

    /**
     * @param cinema 
     * @return
     */
    public void setCinema(Cinema cinema) { 
       this.cinema = cinema;
    }

    /**
     * @return
     */
    public String getTime() {
        return time;
    }

    /**
     * @param time 
     * @return
     */
    public void setDate(String date) {
        this.date=date;
    }
    
    public String getDate() {
        return date;
    }

    /**
     * @param time 
     * @return
     */
    public void setTime(String time) {
        this.time=time;
    }

    /**
     * @return
     */
    public String getClientFirstAndLastNames() {
        return clientFirstAndLastNames;
    }

    /**
     * @param firstAndLastNames 
     * @return
     */
    public void setClientFisrtAndLastNames(String firstAndLastNames) {
        clientFirstAndLastNames= firstAndLastNames;
    }

    /**
     * @return
     */
    public String getRowAndSeat() {
        return rowAndSeat;
    }

    /**
     * @param rowAndSeat 
     * @return
     */
    public void setRowAndSeat(String rowAndSeat) {
       this.rowAndSeat=rowAndSeat;
    }

    /**
     * @return
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status 
     * @return
     */
    public void setStatus(String status) {
       this.status=status;
    }

}