import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleChangeText = (e) => {
    if (text === '') {
      setButtonDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setButtonDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setButtonDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect onSelectProp={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleChangeText}
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
