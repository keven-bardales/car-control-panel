import { DateValue } from "./date-value.interface";

export interface BaseInterface {
  id: number;
  createdAt: DateValue;
  updatedAt: DateValue;
  isDeleted: DateValue;
}
