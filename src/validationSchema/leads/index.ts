import * as yup from 'yup';

export const leadValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  lead_manager_id: yup.string().nullable(),
});
