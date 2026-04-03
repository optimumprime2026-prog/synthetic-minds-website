const submissions = new Map<string, number[]>();

const WINDOW_MS = 15 * 60 * 1000;
const LIMIT = 5;

export function checkRateLimit(identifier: string) {
  const now = Date.now();
  const existing = submissions.get(identifier) ?? [];
  const recent = existing.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recent.length >= LIMIT) {
    return { allowed: false };
  }

  recent.push(now);
  submissions.set(identifier, recent);
  return { allowed: true };
}
