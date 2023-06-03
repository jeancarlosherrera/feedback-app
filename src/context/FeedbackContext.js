import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbackFromContext, setFeedbackFromContext] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedbackFromContext([newFeedback, ...feedbackFromContext])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?'))
      setFeedbackFromContext(feedbackFromContext.filter((el) => el.id !== id))
  }

  return (
    <FeedbackContext.Provider
      value={{ feedbackFromContext, addFeedback, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
