import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbackFromContext, setFeedbackFromContext] = useState(FeedbackData)

  const [feedbackToEdit, setFeedbackToEdit] = useState({
    feedbackItem: {},
    isEditModeOn: false,
  })

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedbackFromContext([newFeedback, ...feedbackFromContext])
  }

  //Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?'))
      setFeedbackFromContext(feedbackFromContext.filter((el) => el.id !== id))
  }

  //Selects item to be uptaded
  const selectFeedbackToEdit = (feedbackItem) => {
    setFeedbackToEdit({
      feedbackItem,
      isEditModeOn: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbackFromContext,
        feedbackToEdit,
        addFeedback,
        deleteFeedback,
        selectFeedbackToEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
