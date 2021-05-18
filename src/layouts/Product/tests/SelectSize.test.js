import React from 'react';
import ReactDOM from 'react-dom';
import SelectSize from '../Details/SelectSize';

import Enzyme, { shallow, render, mount } from 'enzyme';


describe('<SelectSize /> Sub-Component Snapshot test', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<SelectSize debug />);
        expect(component).toMatchSnapshot();
    });
});

describe('Testing <SelectSize /> Sub-Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = mount(<SelectSize />);
        jest.clearAllMocks();
    });

    it('testing the select size title', () => {
        expect(wrapper.find('h3.select-size-title').text()).toBe('SELECT SIZE');
        expect(wrapper.find('h3.select-size-title').props().children).toEqual('SELECT SIZE');
    })

    it('validate by classNames', () => {

        //Simulate Click the button with 39 class
        wrapper.find('div.size-circle-key-39').simulate('click')

        console.log(wrapper.find('div.size-circle-key-39').props())

        //onClick Expecting the selected div to have class - selected-class
        expect(wrapper.find('div.size-circle-key-39').props().className).toMatch(/selected-class/)
        expect(wrapper.find('div.size-circle-key-39').prop('className')).toMatch(/selected-class/)

        //onClick Expecting the selected div to not have class - not-selected
        expect(wrapper.find('div.size-circle-key-39').props().className).not.toMatch(/not-selected/)
        expect(wrapper.find('div.size-circle-key-39').prop('className')).not.toMatch(/not-selected/)

    })


    it('validate by background color', () => {

        //Simulate Click the button with 39 class
        wrapper.find('div.size-circle-key-39').simulate('click')

        console.log('----------------------------------------------')
        console.log(wrapper.find('div.size-circle-key-39').props())
        console.log(wrapper.find('div.size-circle-key-39').get(0))
        console.log('----------------------------------------------')

        // this will only work if style is a react prop like in the case of inline-styling 
        expect(wrapper.find('div.size-circle-key-39').prop('style')).toHaveProperty('textAlign', 'center');

        // External css - YET TO FIND OUT
        // expect(wrapper.find('div.size-circle-key-39').prop('style')).toHaveProperty('color', 'deeppink');
    })

    // it('validate by states', () => {

    //     //Simulate Click the button with 39 class
    //     wrapper.find('div.size-circle-key-39').simulate('click')

    //     // Works only for class components
    //     // console.log(wrapper.state())
    // })



    // it('when button is clicked it calls the "toggle" function', () => {
    //     const spy = jest.spyOn(wrapper, 'handleSelectSize');
    //     wrapper.instance().forceUpdate();
    //     wrapper.find('div.size-circle-key-39').simulate('click');
    //     expect(spy).toHaveBeenLastCalledWith();
    // });
});


describe('<SelectSize /> Sub-Component Snapshot test props', () => {
    it('testing passing custom props and validating by classes', () => {
        const wrapper = mount(<SelectSize sizes={['XS','S','M','L','XL']} />);
         //Simulate Click the button with 39 class
         wrapper.find('div.size-circle-key-M').simulate('click')

         console.log(wrapper.find('div.size-circle-key-M').props())
 
         //onClick Expecting the selected div to have class - selected-class
         expect(wrapper.find('div.size-circle-key-M').props().className).toMatch(/selected-class/)
         expect(wrapper.find('div.size-circle-key-M').prop('className')).toMatch(/selected-class/)
         //onClick Expecting the un-selected div to have class - not-selected
         expect(wrapper.find('div.size-circle-key-S').prop('className')).toMatch(/not-selected/)


 
         //onClick Expecting the selected div to not have class - not-selected
         expect(wrapper.find('div.size-circle-key-M').props().className).not.toMatch(/not-selected/)
         expect(wrapper.find('div.size-circle-key-M').prop('className')).not.toMatch(/not-selected/)

    });
});


