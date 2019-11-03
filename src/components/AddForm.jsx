import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK } from '../types/index';

import './styles/AddForm.css';

const AddForm = () => {
  const initialForm = { title: '', dueDate: '' };
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  let taskId = 8;

  const handleAddTask = event => {
    event.preventDefault();
    dispatch({
      type: ADD_TASK,
      id: taskId,
      title: form.title,
      dueDate: form.dueDate
    });
    setForm(initialForm);
  };

  return (
    <header className='Header'>
      <form onSubmit={handleAddTask} className='AddForm'>
        <input
          autoFocus
          required
          onChange={handleChange}
          type='text'
          name='title'
          value={form.title}
          placeholder='Task'
          className='AddForm__TaskInput'
        />
        <div className='AddForm__Bottom'>
          <label>Due date: </label>
          <input
            onChange={handleChange}
            type='date'
            name='dueDate'
            value={form.dueDate}
            className='AddForm__DueDateInput'
          />
          <button type='submit' className='AddForm__AddButton'>
            Add
          </button>
        </div>
      </form>
    </header>
  );
};

export default AddForm;
