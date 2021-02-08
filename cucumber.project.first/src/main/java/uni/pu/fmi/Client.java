package uni.pu.fmi;
import java.util.*;

/**
 * 
 */
public class Client {
	
    private String firstAndLastNames;
    private String email;
    private String phoneNumber;
    public Set<Reservation> reservations = new HashSet<Reservation>();

    
    /**
     * Default constructor
     */
    public Client() {
    }

   

    
    public String getFirstAndLastNames() {
        return firstAndLastNames;
    }

    /**
     * @param firstAndLastNames 
     * @return
     */
    public void setFirstAndLastNames(String firstAndLastNames) {
      this.firstAndLastNames=firstAndLastNames;
    }

    /**
     * @return
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
      this.email=email;
    }

    /**
     * @return
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * @param phoneNumber 
     * @return
     */
    public void setPhoneNumber(String phoneNumber) {
     this.phoneNumber=phoneNumber;
    }

    /**
     * @return
     */
    public Set<Reservation> getReservations() {
        return reservations;
    }

    /**
     * not null instance of {@link Set}
     */  
    public void setReservations(Set<Reservation> reservations) {
    	this.reservations=reservations;
    }
    
    /**
     * @param reservations not NULL{@link Reservation}
     */
    public void addReservations(Reservation reservation) {
        reservations.add(reservation);
    }

}