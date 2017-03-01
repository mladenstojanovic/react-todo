const React = require('react');
const expect = require('expect');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if valid text entered', () => {
    const todoText = 'check mail';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo if invalid text entered', () => {
    const todoText = '';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
