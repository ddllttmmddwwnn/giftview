export function isValidGiftId(id: string): boolean {
  const idPattern = /^gift-\d+$/;
  return idPattern.test(id);
}