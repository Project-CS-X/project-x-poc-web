import React, { useState } from 'react'
import './Lesson.scss'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
import LessonFooter from '../../components/LessonFooter/LessonFooter'
import lessonStructure from '../../assets/test-data.json'

function Lesson() {
  const [ currentLesson, setCurrentLesson ] = useState(lessonStructure.pages[0])
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const setNewPage = index => {
    setCurrentIndex(index)
    setCurrentLesson(lessonStructure.pages[index])
  }

  return (
    <div className="lessonPage">
      <NavigationMenu sectionName={currentLesson.sectionName}/>
      <div className="lessonContent">
        {
          currentLesson.columns.map( (column, i) => (
            <div key={i} className="lessonColumn" style={{ flexGrow: column.span }}>
              <p>{column.title}</p>
            </div>
          ))
        }
      </div>
      <LessonFooter setNewPage={setNewPage} pageName={currentLesson.pageName} currentIndex={currentIndex} pageCount={lessonStructure.pages.length}/>
    </div>
  )
}
export default Lesson
