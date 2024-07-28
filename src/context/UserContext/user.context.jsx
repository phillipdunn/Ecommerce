// USING REDUER NOW
import { createContext, useEffect, useReducer } from 'react';
import { createUserDocFromAuth, onAuthStateChangedListener } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer';
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return new Error(`Unsupported action type: ${type} in user reducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  //      state object  disp fnct
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
// *** DEPRICATED, USING REDUCER INSTEAD ***
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
