import React from 'react';
import ReactDOM from 'react-dom';
import ProductLayout from '../ProductLayout';
import { BrowserRouter as Router } from "react-router-dom"

import Enzyme, { shallow, render, mount } from 'enzyme';



describe('<ProductLayout /> Component Snapshot test', () => {
    it('should render correctly in "debug" mode', () => {
        const wrapper = shallow(<Router><ProductLayout /></Router>)
        expect(wrapper).toMatchSnapshot();
    });
});

// describe('Testing ProductLayout Component', () => {

//     it('the increment method increments count', () => {
//         const wrapper = mount(<Router><ProductLayout /></Router>)

//         expect(wrapper.instance().state.count).toBe(0)

//         // wrapper.find('button.counter-button').simulate('click')
//         // wrapper.setState({count: 1})
//         wrapper.instance().increment()
//         expect(wrapper.instance().state.count).toBe(1)
//     })
// });

