import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Welcome from "./pages/Welcome.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SingleCard from "./pages/SingleCard";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import MyDecks from "./pages/MyDecks.jsx";
import DeckSelect from "./pages/DeckSelect.jsx";
import CardList from "./pages/CardList.jsx";
import StudyMode from "./pages/StudyMode.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profiles/:username",
        element: <Profile />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/cards/:cardId",
        element: <SingleCard />,
      },
      {
        path: "/decks",
        element: <MyDecks />,
      },
      {
        path: "/deck/:deckId",
        element: <CardList />,
      },
      {
        path: "/study",
        element: <DeckSelect />,
      },
      {
        path: "/study/:deckId",
        element: <StudyMode />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
