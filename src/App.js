import Header from './components/Header';
// import FeedbackData from './data/feedbackdata';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutLink from './components/AboutLink';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        <AboutLink />
      </Router>
    </FeedbackProvider>
  );
};

export default App;
