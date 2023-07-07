const mapping: Record<string, string> = {
  appointments: 'appointment',
  hospitals: 'hospital',
  leads: 'lead',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
