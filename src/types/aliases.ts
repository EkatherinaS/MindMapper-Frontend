type DateISODate = `${number}-${number}-${number}`;
type DateISOTime = `${number}:${number}:${number}.${number}`;

export type DateISO = `${DateISODate}T${DateISOTime}Z`;
export type Id = number | string;
