export type LeadType = "demo" | "contact" | "newsletter";

export interface LeadPayload {
  type: LeadType;
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  role?: string;
  phone?: string;
  message?: string;
  interests?: string[];
  locale?: string;
  sourcePath?: string;
  website?: string;
}

export async function submitLead(payload: LeadPayload) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as { error?: string; ok?: boolean };

  if (!response.ok || !data.ok) {
    throw new Error(data.error || "We could not submit your request. Please try again.");
  }

  return data;
}
