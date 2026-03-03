import { NextResponse } from "next/server";
import pool from "../../../../../lib/db";
import { Grave } from "../../../../../lib/types";
import { RowDataPacket } from "mysql2";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    console.warn("No search query provided");
    return NextResponse.json(
      { error: "No search query provided" },
      { status: 400 }
    );
  }

  console.log(`Search query received: "${query}"`);
  try {
    console.log("Starting database query...");

    const [rows] = await pool.query<RowDataPacket[]>(
      `
      SELECT id, first_name, surname, date_of_birth, date_of_death, date_of_burial,
             section, row_number, position_in_row, grave_reference,
             gps_location, _gps_location_latitude, _gps_location_longitude,
             _gps_location_altitude, _gps_location_precision,
             notes, created_at, updated_at
      FROM cemetery_graves
      WHERE first_name LIKE ? OR surname LIKE ?
      `,
      [`%${query}%`, `%${query}%`]
    );

    console.log(`Database query finished, retrieved ${rows.length} rows`);

    // Cast rows to Grave[] safely
    const graves: Grave[] = rows as Grave[];

    console.log("Returning results to client");
    return NextResponse.json(graves);
  } catch (err) {
    console.error("Database query failed:", err);
    return NextResponse.json(
      { error: "Database error" },
      { status: 500 }
    );
  }
}