import UserHelpers from './UserHelpers';

const alice = {
  firstName: 'Alice',
  lastName: 'Gray',
  points: 78,
};

const fullName = UserHelpers.getFullName(alice);
const category = UserHelpers.getCategory(alice);

document.getElementById('fullName').textContent = fullName;
document.getElementById('category').textContent = category;

console.warn(fullName);
console.warn(category);
