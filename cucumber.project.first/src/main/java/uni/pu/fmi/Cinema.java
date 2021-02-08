package uni.pu.fmi;
import java.util.*;

/**
 * 
 */
public class Cinema {
	
	    private int cinemaId;
	    private String name;
	    private String location;
	    private Date workingTime;
	

    /**
     * Default constructor
     */
    public Cinema() {
    }
    
    /**
     * 
     */
    
  
    public String getName() {
        return name;
    }

    /**
     * @param name 
     * @return
     */
    public void setName(String name) {
        this.name=name;
    }

    /**
     * @return
     */
    public String getLocation() {
       
        return location;
    }

    /**
     * @param location 
     * @return
     */
    public void setLocation(String location) {
       this.location=location;

    }

    /**
     * @return
     */
    public Date getWorkingTime() {
       
        return workingTime;
    }

    /**
     * @param workingTime 
     * @return
     */
    public void setWorkingTime(Date workingTime) {
       this.workingTime=workingTime;
    }

}