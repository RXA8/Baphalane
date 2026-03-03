// lib/types.ts
export interface Grave {
  id: number;
  first_name: string;
  surname: string;
  date_of_birth: string | null;
  date_of_death: string | null;
  date_of_burial: string | null;
  section: string;
  row_number: number;
  position_in_row: number;
  grave_reference: string;
  gps_location: string | null;
  _gps_location_latitude: number | null;
  _gps_location_longitude: number | null;
  _gps_location_altitude: number | null;
  _gps_location_precision: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}