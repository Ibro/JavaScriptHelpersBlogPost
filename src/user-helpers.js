export function getUserFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

export function getUserCategory(userPoints) {
  return userPoints > 70 ? 'A' : 'B';
}
