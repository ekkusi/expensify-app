import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('Should return 0 with no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('Should add up a single expense correctly', () => {
  const result = selectExpensesTotal([expenses[1]]);
  expect(result).toBe(109500);
});

test('Should add up multiple expenses correctly', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});