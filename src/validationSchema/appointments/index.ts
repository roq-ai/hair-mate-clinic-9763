import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  status: yup.string().required(),
  patient_coordinator_id: yup.string().nullable(),
  medical_staff_id: yup.string().nullable(),
});
