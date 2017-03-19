import React from 'react';

import { shallow } from 'enzyme';
import App from '../src/modules/App';
import {expect} from 'chai';

describe('App', () => {

    it("should contain a main element", function() {
        const wrapper = shallow(<App />);

        expect(wrapper.find('#main').length).to.be.equal(1);
    });

});
