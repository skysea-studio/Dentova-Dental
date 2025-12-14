import { z } from "zod"
const validatePhoneLength = (value) => {
  if (!value) return true;

  const phoneDigits = value.replace(/\D/g, '');

  return phoneDigits.length >= 10 && phoneDigits.length <= 15;
};


export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string()
    .min(1, "Phone number is required")
    .refine(validatePhoneLength, {
      message: "Phone number must be 10-15 digits"
    }),
  appointment: z.string().min(1, "Select a appointment"),
  doctor: z.string().min(1, "Select a doctor"),
  date: z.string().min(1, "Select a date"),
  time: z.string().min(1, "Select a Time"),
  note: z.string().nullable()
})
