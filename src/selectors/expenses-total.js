// Get total amount of given expenses

export default (expenses) => {
  return expenses.reduce((sum, { amount }) => sum + amount, 0);
};