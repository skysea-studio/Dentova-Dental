import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema } from "../schemas/appointment-form";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useState } from "react";
export function AppointmentForm() {
  const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      appointment: "",
      doctor: "",
      date: "",
      time: "",
      note: "",
    }
  });

  function onSubmit(data) {
    console.log(data);
    reset();
    setPhone("");
  }

  return (
    <section className="book-appointment">
      <h2>Book An Appointment</h2>
      <p>
        Dentova offers modern, reliable, and comfortable dental care tailored to
        your needs. Book your appointment and take the first step toward a
        healthier smile.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="appointment-form" autoComplete="off">
        <div>


          <label>
            <h6>Full Name*</h6>
            <input type="text" {...register("fullName")} placeholder="Enter your name" />
            {errors.fullName && <span>{errors.fullName.message}</span>}
          </label>

          <label>
            <h6>Phone Number</h6>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="US"
              value={phone}
              onChange={(value) => {
                setPhone(value);
                setValue("phone", value, { shouldValidate: true });
              }}

              maxLength={20}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </label>

          <label>
            <h6>Type of Appointment*</h6>
            <select {...register("appointment")}>
              <option value=""></option>
              <option value="cleaning">Cleaning</option>
              <option value="implant">Implant</option>
            </select>
            {errors.appointment && <span>{errors.appointment.message}</span>}
          </label>

          <label>
            <h6>Preferred Dentist*</h6>
            <select {...register("doctor")}>
              <option value=""></option>
              <option value="dr-smith">Dr. Adam Reynolds</option>
              <option value="dr-micheal">Dr. Michael Harris</option>
              <option value="dr-daniel">Dr. Daniel Carter</option>

            </select>
            {errors.doctor && <span>{errors.doctor.message}</span>}
          </label>

          <label>
            <h6>Preferred Date*</h6>
            <input type="date" {...register("date")} />
            {errors.date && <span>{errors.date.message}</span>}
          </label>

          <label>
            <h6>Preferred Time*</h6>
            <select {...register("time")}>
              <option value="">Select time</option>
              <option value="08:00">08:00 AM</option>
              <option value="08:30">08:30 AM</option>
              <option value="09:00">09:00 AM</option>
              <option value="09:30">09:30 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="11:30">11:30 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="13:30">01:30 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="14:30">02:30 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="15:30">03:30 PM</option>
              <option value="16:00">04:00 PM</option>
              <option value="16:30">04:30 PM</option>
              <option value="17:00">05:00 PM</option>
              <option value="17:30">05:30 PM</option>
              <option value="18:00">06:00 PM</option>

            </select>
            {errors.time && <span>{errors.time.message}</span>}

          </label>

          <label>
            <h6>Note</h6>
            <textarea {...register("note")} placeholder="Enter a description..."></textarea>
          </label>
        </div>
        <button>Book Appointment</button>
      </form>
    </section>
  );
}
