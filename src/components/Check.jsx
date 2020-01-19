import React from 'react'
import _ from 'lodash'

const Check = ({ notes, content, onChange, onSubmit }) => {
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

export default Check
