import { useState } from 'react'
import Card from './shared/Card'

const FeedbackForm = () => {
  const [text, setText] = useState('')

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleChangeText}
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
