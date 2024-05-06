document.addEventListener("DOMContentLoaded", function() {
    const patient = new Patient("John Doe", 35, "Male", "Hypertension");
    const doctor = new Doctor("Dr. Smith", "Cardiologist");
    const appointment = new Appointment("Jane Smith", "Dr. Johnson", "2024-05-10");

   
    document.getElementById("patientName").textContent = "Name: " + patient.name;
    document.getElementById("patientAge").textContent = "Age: " + patient.age;
    document.getElementById("patientGender").textContent = "Gender: " + patient.gender;
    document.getElementById("patientCondition").textContent = "Condition: " + patient.condition;

  
    document.getElementById("doctorName").textContent = "Name: " + doctor.name;
    document.getElementById("doctorSpecialization").textContent = "Specialization: " + doctor.specialization;

    
    document.getElementById("appointmentPatient").textContent = "Patient: " + appointment.patient;
    document.getElementById("appointmentDoctor").textContent = "Doctor: " + appointment.doctor;
    document.getElementById("appointmentDate").textContent= "Date:" + appointment.doctor;
});
