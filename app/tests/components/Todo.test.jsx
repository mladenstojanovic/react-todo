const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    const todoData = {
      id: 12,
      text: 'sta god',
      completed: true
    };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(12);
  });
});
