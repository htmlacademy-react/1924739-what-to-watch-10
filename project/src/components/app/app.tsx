import {MainScreen} from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {LoginScreen} from '../../pages/login-screen/login-screen';
import {MyListScreen} from '../../pages/my-list-screen/my-list-screen';
import {ReviewScreen} from '../../pages/submit-review-screen/review-screen';
import {PlayerScreen} from '../../pages/player-scren/player-screen';
import {NotFoundScreen} from '../../pages/not-found-screen/not-found-screen';
import {PrivateRoute} from '../private-route/private-route';
import {FilmScreen} from '../../pages/film-screen/film-screen';
import {Film} from '../../mocks/films';

type AppProps = {
  films: Film[]
}

export const App = ({films}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainScreen films={films}/>}
      />
      <Route path={AppRoute.Login} element={<LoginScreen/>}/>
      <Route path={AppRoute.MyList} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <MyListScreen/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Films}>
        <Route index element={<NotFoundScreen/>}/>
        <Route path={AppRoute.Film}>
          <Route index element={<FilmScreen/>}/>
          <Route path={AppRoute.Review} element={<ReviewScreen/>}/>
        </Route>
      </Route>
      <Route path={AppRoute.Player} element={<PlayerScreen/>}/>
      <Route path='*' element={<NotFoundScreen/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
