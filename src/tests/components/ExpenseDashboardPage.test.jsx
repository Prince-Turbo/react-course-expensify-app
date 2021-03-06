import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Should render dashboard Page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});