class Patient {
    patient (name, age, gender, condition) 
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.condition = condition;
    }
}

class Doctor {
    doctor (name, specialization) 
    {
        this.name = name;
        this.specialization = specialization;
    }
}

class Appointment {
    appointment (patient, doctor, date) 
    {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
    }
}
