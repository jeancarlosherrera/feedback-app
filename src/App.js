import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?'))
      setFeedback(feedback.filter((el) => el.id !== id))
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedbackProp={feedback} />
        <FeedbackList feedbackProp={feedback} onDeleteProp={deleteFeedback} />
      </div>
    </>
  )
}

export default App
