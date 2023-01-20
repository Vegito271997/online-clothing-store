import Homepage from './router/Homepage/Homepage.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './router/Navigation/Navigation.component';
import SignIn from './router/SignIn/Sign-in.component';
import Shop from './router/Shop/Shop.component';

const App = () => {
  return (
    <>
      <Routes>
        <Route path ='/' element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path ='/shop' element={<Shop />} />
          <Route path ='/sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
