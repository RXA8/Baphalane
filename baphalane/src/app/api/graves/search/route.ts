import { NextResponse } from "next/server";
import pool from "../../../../../lib/db";
import { Grave } from "../../../../../lib/types";
import { RowDataPacket } from "mysql2";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.trim().length === 0) {
    console.warn("No search query provided");
    return NextResponse.json(
      { error: "No search query provided" },
      { status: 400 }
    );
  }

  console.log(`Search query received: "${query}"`);

  try {
    console.log("Formatting search query for FULLTEXT...");

    // Convert "brock les" → "+brock* +les*"
    const formattedQuery = query
      .trim()
      .split(/\s+/)
      .filter(word => word.length > 0)
      .map(word => `+${word}*`)
      .join(" ");

    console.log(`Formatted query: "${formattedQuery}"`);

    console.log("Starting FULLTEXT database query...");

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
          updated_at,
          MATCH(first_name, surname)
              AGAINST (? IN BOOLEAN MODE) AS relevance
      FROM cemetery_graves
      WHERE MATCH(first_name, surname)
            AGAINST (? IN BOOLEAN MODE)
      ORDER BY relevance DESC
      LIMIT 50
      `,
      [formattedQuery, formattedQuery]
    );

    console.log(`Database query finished, retrieved ${rows.length} rows`);

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