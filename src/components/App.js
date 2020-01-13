import React, { useState, useEffect } from 'react'
import { database } from '../firebase'
import _ from 'lodash'

function App() {
  const [content, setContent] = useState({
    title: '',
    body: '',
    notes: {},
  })
  const [notes, setNotes] = useState({})

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
    database.push(note)
    setContent({
      title: '',
      body: '',
    })
  }

  useEffect(() => {
    database.on('value', snap => {
      setNotes(snap.val())
    })
  }, [])

  const renderNotes = () => {
    return _.map(notes, (note, key) => (
      <div key={key}>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
      </div>
    ))
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 offset-3">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  onChange={onChange}
                  type="text"
                  name="title"
                  value={content.title}
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                />
              </div>
              <div>
                <textarea
                  onChange={onChange}
                  type="text"
                  name="body"
                  value={content.body}
                  className="form-control no-border"
                  placeholder="content..."
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12" type="submit">
                  SAVE
                </button>
              </div>
            </form>
            <div>{renderNotes()}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
