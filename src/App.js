import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((el) => el.id !== id))
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedbackProp={feedback} onDeleteProp={deleteFeedback} />
      </div>
    </>
  )
}

export default App
