package uni.pu.fmi;
import java.util.*;

/**
 * 
 */
public class Movie {

    private String name;
    private String language;
    private String director;
    private String country;
    private String year;

	
    /**
     * Default constructor
     */
    public Movie() {
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
    public String getLanguage() {
        return language;
    }

    /**
     * @param language 
     * @return
     */
    public void setLanguage(String language) {
        this.language=language;
    }

    /**
     * @return
     */
    public String getDirector() {
        return director;
    }

    /**
     * @param director 
     * @return
     */
    public void setDirector(String director) {
        this.director=director;
    }

    /**
     * @return
     */
    public String getCountry() {
        return country;
    }

    /**
     * @param country 
     * @return
     */
    public void setCountry(String country) {
      this.country=country;
    }

    /**
     * @param year 
     * @return
     */
    public String getYear() {
    	return year;
        
    }

    /**
     * @return
     */
    public void setYear(String year) {
    	this.year=year;
    }

}