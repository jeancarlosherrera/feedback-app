import Card from './shared/Card'

const FeedbackItem = ({ feedbackItemProp }) => {
  return (
    <Card>
      <div className='num-display'>{feedbackItemProp.rating}</div>
      <div className='text-display'>{feedbackItemProp.text}</div>
    </Card>
  )
}

export default FeedbackItem
