"use client";

import { useState } from "react";
import { Grave } from "../../../../lib/types";

type GraveClientProps = {
  grave: Grave;
};

export default function GraveClient({ grave }: GraveClientProps) {
  const [verified, setVerified] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [relation, setRelation] = useState("");
  const [deathCert, setDeathCert] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !cell || !relation || !deathCert || !reason) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/graves/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          public_id: grave.public_id,
          name,
          email,
          cell,
          relation,
          deathCert,
          reason,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setVerified(true);
      } else {
        console.error("Submission error:", data.error);
        alert("Submission failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Failed to submit request:", err);
      alert("Submission failed. Please try again.");
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "N/A";
    return new Date(date).getFullYear();
  };

  // ✅ Confirmation message after submission
  if (verified) {
    return (
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-white text-center">
        <h1 className="text-3xl font-bold mb-6">Request Submitted</h1>
        <p className="mb-4">
          Your request for the grave information of <strong>{grave.initials} {grave.surname}</strong>,
          buried in <strong>{formatDate(grave.date_of_burial)}</strong>, has been successfully
          recorded in our system.
        </p>
        <p>
          The Baphalane Traditional Council will review your request and provide the information
          to your email.
        </p>
      </div>
    );
  }

  // ✅ Form
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl space-y-5 text-white"
    >
      <h1 className="text-2xl font-bold text-center">
        You are requesting information for <strong>{grave.initials} {grave.surname}</strong>,
        buried in <strong>{formatDate(grave.date_of_burial)}</strong>. May their soul rest in peace.
      </h1>

      <input
        placeholder="Your Name"
        className="w-full p-3 rounded-lg bg-white/20"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email Address"
        className="w-full p-3 rounded-lg bg-white/20"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Cell Phone"
        className="w-full p-3 rounded-lg bg-white/20"
        value={cell}
        onChange={(e) => setCell(e.target.value)}
      />
      <input
        placeholder="Relation to Deceased"
        className="w-full p-3 rounded-lg bg-white/20"
        value={relation}
        onChange={(e) => setRelation(e.target.value)}
      />
      <input
        placeholder="Death Certificate Number"
        className="w-full p-3 rounded-lg bg-white/20"
        value={deathCert}
        onChange={(e) => setDeathCert(e.target.value)}
      />
      <textarea
        placeholder="Reason for requesting grave information"
        className="w-full p-3 rounded-lg bg-white/20"
        rows={4}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold"
      >
        Submit Request
      </button>
    </form>
  );
}