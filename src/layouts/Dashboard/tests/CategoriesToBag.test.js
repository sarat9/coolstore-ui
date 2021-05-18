import * as React from "react";
import { render, mount } from 'enzyme';
import { BrowserRouter as Router } from "react-router-dom"
import CategoriesToBag from "../CategoriesToBag";



describe('Testing CategoriesToBag Component', () => {
    test("check if heading is correct", () => {
        const defaultValue = "Amazing Categories To Bag";
        const wrapper = render(<Router><CategoriesToBag /></Router>);
        expect(wrapper.find('.textBannerTitle').text()).toMatch(/Categories To Bag/);
        expect(wrapper.find('.textBannerTitle').text()).not.toMatch(/Wrong Match/);
        expect(wrapper.find('.textBannerTitle').text()).toBe(defaultValue);
    });

    it('should render two headings <h4>', () => {
        let wrapper = mount(
            <Router>
                <CategoriesToBag />
            </Router>);
        expect(wrapper.find('.text-banner-container').children().length).toBe(2);
    });
});

