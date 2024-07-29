import './Feedback.css';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
    return (
        <div>
            <ul className="feedbackList">
                <li className='good'>Good: {good}</li>
                <li className='neutral'>Neutral: {neutral}</li>
                <li className='bad'>Bad: {bad}</li>
                <li>Total: {totalFeedback}</li>
                <li>Positive: {positiveFeedback}</li>
            </ul>
        </div>
    )
}

export default Feedback;