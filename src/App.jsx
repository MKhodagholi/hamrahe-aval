import React, { useEffect } from "react";
import UserManagementPage from "./pages/UserManagement/UserManagementPage";
import { fetchUsers } from "./store/user-slice";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme, { DARK_MODE, LIGHT_MODE } from "./theme/theme";
import GlobalStyled from "./theme/GlobalStyled";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  const themeMode = DARK_MODE;

  const themUse =
    themeMode === DARK_MODE ? theme[DARK_MODE] : theme[LIGHT_MODE];

  return (
    <div>
      <ThemeProvider theme={themUse}>
        <UserManagementPage />
        <GlobalStyled />
      </ThemeProvider>
    </div>
  );
}

export default App;
