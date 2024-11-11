import { BaseInterface } from "../../../../../shared/interfaces/api/base-interface";
import { DateValue } from "../../../../../shared/interfaces/api/date-value.interface";

export interface Driver extends BaseInterface {
  name: string;
  dni: string;
  birthdate: DateValue;
}
