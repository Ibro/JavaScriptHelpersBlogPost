class UserHelpers {
  static getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }

  static getCategory(userPoints) {
    return userPoints > 70 ? 'A' : 'B';
  }
}

export default UserHelpers;
