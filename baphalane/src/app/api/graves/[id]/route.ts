import { NextResponse } from "next/server";
import pool from "../../../../../lib/db";
import { Grave } from "../../../../../lib/types"
import { RowDataPacket } from "mysql2";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "No grave ID provided" }, { status: 400 });
  }

  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `
      SELECT 
          id,
          first_name,
          surname,
          date_of_birth,
          date_of_death,
          date_of_burial,
          section,
          row_number,
          position_in_row,
          grave_reference,
          gps_location,
          _gps_location_latitude,
          _gps_location_longitude,
          _gps_location_altitude,
          _gps_location_precision,
          notes,
          created_at,
          updated_at
      FROM cemetery_graves
      WHERE id = ?
      LIMIT 1
      `,
      [id]
    );

    if ((rows as Grave[]).length === 0) {
      return NextResponse.json({ error: "Grave not found" }, { status: 404 });
    }

    const grave: Grave = (rows as Grave[])[0];
    return NextResponse.json(grave);

  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}