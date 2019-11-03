import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK } from '../types/index';

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
    <form onSubmit={handleAddTask}>
      <input
        autoFocus
        required
        onChange={handleChange}
        type='text'
        name='title'
        value={form.title}
        placeholder='Task'
      />
      <label>Due date: </label>
      <input
        onChange={handleChange}
        type='date'
        name='dueDate'
        value={form.dueDate}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddForm;
