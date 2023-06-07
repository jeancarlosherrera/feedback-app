import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbackFromContext, setFeedbackFromContext] = useState([])

  const [feedbackToEdit, setFeedbackToEdit] = useState({
    feedbackItem: {},
    isEditModeOn: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  //Fetch feedback
  const fetchFeedback = async () => {
    const res = await fetch('/feedback?_sort=id&_order=desc')
    const data = await res.json()
    setFeedbackFromContext(data)
  }

  //Add feedback
  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await res.json()

    setFeedbackFromContext([data, ...feedbackFromContext])
  }

  //Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedbackFromContext(feedbackFromContext.filter((el) => el.id !== id))
    }
  }

  //Select item to be uptaded
  const selectFeedbackToEdit = (feedbackItem) => {
    setFeedbackToEdit({
      feedbackItem,
      isEditModeOn: true,
    })
  }

  //Update feedback
  const updateFeedback = async (id, updatedItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })

    const data = await res.json()

    setFeedbackFromContext(
      feedbackFromContext.map((el) => (el.id === id ? data : el))
    )

    setFeedbackToEdit({
      item: {},
      edit: false,
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
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
