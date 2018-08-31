import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('Should render ExpensesSummary correctly with no expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenseCount={0}
      expensesTotal={selectExpensesTotal([])}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenseCount={1}
      expensesTotal={selectExpensesTotal([expenses[1]])}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenseCount={expenses.length}
      expensesTotal={selectExpensesTotal(expenses)}
    />
  );
  expect(wrapper).toMatchSnapshot();
});