import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrance from './components/Entrance';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Todo from './components/TodoList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
