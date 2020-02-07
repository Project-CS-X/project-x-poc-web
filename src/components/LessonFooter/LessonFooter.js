import React from 'react'
import './LessonFooter.scss'

function LessonFooter( props ) {
  return (
    <div className="footer">
      
      <div className="buttonHolder">
        {
          props.currentIndex > 0 ? <button onClick={() => props.setNewPage(props.currentIndex - 1)}>Previous Page</button> : null
        }
      </div>
      <div className="pageTitleHolder">
        <p>{props.pageName}</p>
      </div>
      <div className="buttonHolder">
        {
          props.currentIndex < props.pageCount - 1 ? <button onClick={() => props.setNewPage(props.currentIndex + 1)}>Next Page</button> : null
        }
      </div>
    </div>
  )
}

export default LessonFooter
