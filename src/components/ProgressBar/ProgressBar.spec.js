import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import ProgressBar from './ProgressBar';

configure({adapter: new Adapter()});

describe('ProgressBar', () => {
    
    test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
        const wrapper = shallow(<ProgressBar percent={50} width={500}/>);
        const progressBar = wrapper.instance();
        
        const width = progressBar.getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(250);
    });
});