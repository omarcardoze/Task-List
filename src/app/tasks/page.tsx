"use client"
import React, { useState }  from 'react'
import Modal from 'react-modal'
import styles from './tasks.module.css'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addTask } from '../store/task/tasksSlice'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default function Tasks() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const tasks = useAppSelector(state => state.taskReducer.value)
  
  const dispatch = useAppDispatch()

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  setInputValue('')
  if(inputValue.trim() !== '') {
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const task = formData.get('task') as string
    dispatch(addTask(task))
    form.reset()
    closeModal()
  }
}

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskContainer}>
        <button onClick={openModal} className={styles.modalBtn}>New Task</button>
      
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Create task Modal"
          ariaHideApp={false}
      >
        <h2>Create New Task</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input 
            onChange={handleChange} 
            type="text" 
            name="task" 
            autoFocus 
            placeholder='New Task Name' 
            autoComplete='off'
          />
          <button
            disabled={inputValue.trim() === ''}
            style={{ backgroundColor: inputValue.trim() === '' ? '#dbfcff' : '#7aeafc' }}
            type="submit">
              Add
          </button>
        </form>
      </Modal>
      <div className={styles.taskListContainer}>
        {
          tasks.map(task => (
            <div className={styles.card} key={task}>
              <p>{task}</p>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}
