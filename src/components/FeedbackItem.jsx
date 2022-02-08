import PropTypes from 'prop-types';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" onClick={() => editFeedback(feedback)} />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};
export default FeedbackItem;
