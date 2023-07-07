import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  status: string;
  patient_coordinator_id?: string;
  medical_staff_id?: string;
  created_at?: any;
  updated_at?: any;

  user_appointment_patient_coordinator_idTouser?: UserInterface;
  user_appointment_medical_staff_idTouser?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  patient_coordinator_id?: string;
  medical_staff_id?: string;
}
