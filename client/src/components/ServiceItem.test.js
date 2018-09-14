import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import ServiceItem from './ServiceItem';

/* It doesn't work with jest: 
    Test suite failed to run

    TypeError: Path must be a string. Received undefined*/

var mockService = {
  name : 'Servicio 1',
  fee : 35,
  currency: "CHF",
  rate: 5
}

var props = {
  service: mockService
};

/* This is Jasmine*/
describe('ServiceItem', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ServiceItem {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

describe('ServiceItem, functionality...', () => {

  var result, span;
  
  beforeEach(()=> {

    result = TestUtils.renderIntoDocument(<ServiceItem {...props} />);
    // span = TestUtils.scryRenderedDOMComponentsWithTag(result, 'span');
    span = TestUtils.scryRenderedDOMComponentsWithClass(result, 'toggleContent');
  });

  it('should have a "span" tag with the className "togglecontent"', ()=> {
    //expect(ReactDOM.findDOMNode(result).textContent).toContain('Show');
    expect(span).not.ToBe(null);
  });

  it('should containt \"Show\" when is shown', ()=> {
    //expect(ReactDOM.findDOMNode(result).textContent).toContain('Show');
    expect(span[0].textContent).toContain('Show');
  });

  it('Toggle content 1: simulate click', ()=> {
    TestUtils.Simulate.click(span[0]);
    expect(ReactDOM.findDOMNode(result).textContent).toContain('Hide');

  });

  it('Toggle content 2: set state manually to isShown:true', ()=> {
    //result.setState({isShown: true});
    // TestUtils.Simulate.click(span[0]);
    // TestUtils.Simulate.click(span[0]);
    console.log(span[0].textContent);
    expect(span[0].textContent).toContain('Hide');
    // expect(ReactDOM.findDOMNode(result).textContent).toContain('Hide');
  });

  it('Toggle content 3: set state manually to isShown:false', ()=> {
    result.setState({isShown: false})
    expect(ReactDOM.findDOMNode(result).textContent).toContain('Show');
  });

});
