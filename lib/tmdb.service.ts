"use server";

const BASE = process.env.TMDB_BASE_URL;
const KEY  = process.env.TMDB_API_KEY;

type FetchInit = RequestInit & { next?: { revalidate?: number; tags?: string[] } };

export async function tmdb(path: string, init: FetchInit = {}) {
    const res = await fetch(`${BASE}${path}`, {
        ...init,
        headers: {
            "Authorization": `Bearer ${KEY}`,
            "Content-Type": "application/json",
            ...(init.headers || {}),
        },

        next: { revalidate: 3600, ...(init.next || {}) },
    });
    if (!res.ok) throw new Error(`TMDB ${res.status}`);
    return res.json();
}
