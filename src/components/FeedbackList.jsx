import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) return <p>No feedback yet!!</p>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  /*
   return (
    <div className="feedback-list">
      {feedbacks.map((feedback, index) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
  */
};

FeedbackList.defaultProps = {
  feedbacks: [],
};

// FeedbackList.propTypes = {
//   feedbacks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
//   handleDelete: PropTypes.func.isRequired,
// };

export default FeedbackList;
