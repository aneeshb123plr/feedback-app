import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

import FeedbackContext from '../context/FeedbackContext';
const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(
    FeedbackContext
  );
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setBtnDisabled(false);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeeback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeeback);
      } else {
        addFeedback(newFeeback);
      }
    }
    setText('');
    setBtnDisabled(true);
  };
  return (
    <Card>
      <form onSubmit={handleClick}>
        <h2> How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
