export interface Grave {
  // Public display fields
  initials: string;
  surname: string;
  date_of_burial: Date | null;
  public_id: string; // unique identifier for routing/public use
}