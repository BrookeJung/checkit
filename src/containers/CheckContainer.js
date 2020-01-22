import React, { useState, useEffect, useCallback } from 'react'
import Check from '../components/Check'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes, saveNote, delNote } from '../modules/check'

const CheckContainer = () => {
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()
  const onSaveNote = useCallback(note => dispatch(saveNote(note)), [dispatch])
  const onDelNote = useCallback(id => dispatch(delNote(id)), [dispatch])
  const [content, setContent] = useState({
    title: '',
    body: '',
    notes: {},
  })

  const onChange = e => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    const note = {
      title: content.title,
      body: content.body,
    }
    onSaveNote(note)
  }

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return (
    <Check
      notes={notes}
      content={content}
      onChange={onChange}
      onSubmit={onSubmit}
      onDelNote={onDelNote}
    />
  )
}

export default React.memo(CheckContainer)
