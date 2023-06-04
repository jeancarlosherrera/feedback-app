import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackToEdit, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackToEdit.isEditModeOn) {
      setButtonDisabled(false)
      setText(feedbackToEdit.feedbackItem.text)
      setRating(feedbackToEdit.feedbackItem.rating)
      setMessage(feedbackToEdit.feedbackItem.message)
    }
  }, [feedbackToEdit])

  const handleChangeText = ({ target: { value } }) => {
    if (value === '') {
      setButtonDisabled(true)
      setMessage(null)
    } else if (value.trim().length < 10) {
      setButtonDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setButtonDisabled(false)
      setMessage(null)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      feedbackToEdit.isEditModeOn
        ? updateFeedback(feedbackToEdit.feedbackItem.id, newFeedback)
        : addFeedback(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect onSelectProp={setRating} selectedProp={rating} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleChangeText}
            value={text}
          />
          <Button type='submit' isDisabled={buttonDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
