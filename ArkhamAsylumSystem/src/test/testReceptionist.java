package test;

import static org.junit.Assert.*;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.junit.Before;
import org.junit.Test;


public class testReceptionist  {
	String uri;
	@Before
	public void initUri(){
		
		this.uri = "http://localhost:8080/ArkhamAsylumSystem/rest/";
	}

	@Test
	public void testClinicReport() {
		try{
		URL url = new URL(uri+"receptionist/report/clinic/");
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
	public void testClinicalStaffReport() {
		try{
		URL url = new URL(uri+"receptionist/report/clinical_staff/");
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
	public void testAllPatient() {
		try{
		URL url = new URL(uri+"receptionist/report/appointments/");
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
	public void testAllAppointmentsReport() {
		try{
		URL url = new URL(uri+"receptionist/report/all_patients/");
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



