// Utility function to get the initials from a full name
export function getInitials(fullName: string): string {
  const names = fullName.split(' ');
  if (names.length === 0) return '';
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
}
