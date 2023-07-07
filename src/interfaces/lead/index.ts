import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LeadInterface {
  id?: string;
  name: string;
  status: string;
  lead_manager_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LeadGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  lead_manager_id?: string;
}
