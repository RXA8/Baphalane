import { NextResponse } from "next/server";
import pool from "../../../../../lib/db";
import { RowDataPacket } from "mysql2";

// Convert full name to initials
function getInitials(fullName: string): string {

  if (!fullName) return '';

  return fullName
    .trim()
    .split(/\s+/)
    .map(name => name[0].toUpperCase())
    .join('.');

}

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  if (!query.trim()) return NextResponse.json([]);

  try {

    const formattedQuery = query
      .trim()
      .split(/\s+/)
      .map(word => `+${word}*`)
      .join(" ");

    const [rows] = await pool.query<RowDataPacket[]>(`
      SELECT 
          public_id,
          first_name,
          surname,
          date_of_burial
      FROM cemetery_graves
      WHERE MATCH(first_name, surname) AGAINST (? IN BOOLEAN MODE)
      ORDER BY MATCH(first_name, surname) AGAINST (? IN BOOLEAN MODE) DESC
      LIMIT 50
    `, [formattedQuery, formattedQuery]);

    const results = rows.map(row => ({
      public_id: row.public_id,
      initials: getInitials(row.first_name),
      surname: row.surname,
      date_of_burial: row.date_of_burial
    }));

    return NextResponse.json(results);

  } catch (err) {

    console.error("Search failed:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });

  }

}