/** The six services. `id` doubles as icon name, translation-key prefix and page anchor. */
export const SERVICE_IDS = ['plumbing', 'electrical', 'painting', 'maintenance', 'hvac', 'cleaning'] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];
