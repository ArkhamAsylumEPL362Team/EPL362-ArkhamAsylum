package test;

import static org.junit.Assert.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class testClinicalStaff {

	private String URL;

	@Before
	public void setUp() throws Exception {
		
		this.URL= "http://localhost:8080/ArkhamAsylumSystem/rest/clinicalstaff_service/get/";
	}
	@Test
	public void testTreatments() {

		try{
			URL url = new URL(URL+"Treatmentmeds/");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(false);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "text/plain");

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));
			String output;
			System.out.println("Output from Server:\n");
			while ((output = br.readLine()) != null) {
				System.out.println(output);
			}
			conn.disconnect();
			
		  } catch (Exception e) {
			e.printStackTrace();
			fail("No Access to server");
		  }
		
	}
	
	@Test
	public void testDeceased() {
		
		try{
			URL url = new URL(URL+"Deceased/");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(false);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "text/plain");

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));
			String output;
			System.out.println("Output from Server:\n");
			while ((output = br.readLine()) != null) {
				System.out.println(output);
			}
			conn.disconnect();
			
		  } catch (Exception e) {
			e.printStackTrace();
			fail("No Access to server");
		  }
		
	}
	
	@Test
	public void testMedicine() {
		
	
		try{
			URL url = new URL(URL+"Medicine/");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(false);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "text/plain");

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));
			String output;
			System.out.println("Output from Server:\n");
			while ((output = br.readLine()) != null) {
				System.out.println(output);
			}
			conn.disconnect();
			
		  } catch (Exception e) {
			e.printStackTrace();
			fail("No Access to server");
		  }
		
	}
	
	@Test
	public void testNonUpdated() {
	
		try{
			URL url = new URL(URL+"NonUpdatedMedicalRecord/");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(false);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "text/plain");

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));
			String output;
			System.out.println("Output from Server:\n");
			while ((output = br.readLine()) != null) {
				System.out.println(output);
			}
			conn.disconnect();
			
		  } catch (Exception e) {
			e.printStackTrace();
			fail("No Access to server");
		  }
		
	}
	
	@Test
	public void testUpdated() {
	
		try{
			URL url = new URL(URL+"UpdatedMedicalRecord/");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(false);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "text/plain");

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));
			String output;
			System.out.println("Output from Server:\n");
			while ((output = br.readLine()) != null) {
				System.out.println(output);
			}
			conn.disconnect();
			
		  } catch (Exception e) {
			e.printStackTrace();
			fail("No Access to server");
		  }
		
	}

	
}
