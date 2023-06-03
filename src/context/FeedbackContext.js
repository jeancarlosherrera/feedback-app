import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbackFromContext, setFeedbackFromContext] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 9,
    },
    {
      id: 2,
      text: 'This is the second item from context',
      rating: 6,
    },
  ])

  return (
    <FeedbackContext.Provider value={{ feedbackFromContext }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
