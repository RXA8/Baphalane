// app/api/graves/request/route.ts
import { NextResponse } from "next/server";
import pool from "../../../../../lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      public_id,
      name,
      email,
      cell,
      relation,
      deathCert,
      reason
    } = body;

    // Basic validation
    if (!public_id || !name || !email || !cell || !relation || !deathCert || !reason) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Insert into database
    await pool.query(
      `
      INSERT INTO grave_requests
      (public_id, requester_name, email, cell_phone, relation_to_deceased, death_certificate_number, reason)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [public_id, name, email, cell, relation, deathCert, reason]
    );

    return NextResponse.json({ success: true, message: "Request submitted successfully" });
  } catch (err) {
    console.error("Failed to insert grave request:", err);
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
  }
}