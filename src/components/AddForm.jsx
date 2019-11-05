import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ADD_TASK } from '../types/index';

import './styles/AddForm.css';

const AddForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState();

  const handleChange = event => {
    setTask(event.target.value);
  };

  const handleAddTask = event => {
    event.preventDefault();
    dispatch({
      type: ADD_TASK,
      title: task,
      dueDate: dueDate ? dueDate.toDateString() : null
    });
    setTask('');
    setDueDate();
  };

  return (
    <form onSubmit={handleAddTask} className='AddForm'>
      <input
        autoFocus
        required
        onChange={handleChange}
        type='text'
        name='title'
        value={task}
        placeholder='Add task'
        className='AddForm__TaskInput Input'
      />
      <div className='AddForm__Bottom'>
        <label>Due date: </label>

        <DatePicker
          dateFormat='dd/MM/yyyy'
          placeholderText='Click to select a date'
          className='AddForm__DueDateInput Input'
          selected={dueDate}
          onChange={date => setDueDate(date)}
        />
        <button type='submit' className='AddForm__AddButton'>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddForm;
