export const getYear = (d?: string|null) => d ? new Date(d).getFullYear() : undefined;
export const formatDate = (d?: string|null, locale='en-US') => d ? new Date(d).toLocaleDateString(locale) : null;
export const formatRuntime = (mins?: number|null) => mins && mins>0 ? `${Math.floor(mins/60)}h ${mins%60}m` : null;
export const toStars10to5 = (v?: number|null) => Math.max(0, Math.min(10, v ?? 0)) / 2;
