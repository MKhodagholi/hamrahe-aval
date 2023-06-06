import React, { useEffect } from "react";
import UserManagementPage from "./pages/UserManagement/UserManagementPage";
import { fetchUsers } from "./store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme, { DARK_MODE, LIGHT_MODE } from "./theme/theme";
import GlobalStyled from "./theme/GlobalStyled";
import Layout from "./components/Layout/Layout";

function App() {
  const { currentPage, userPerPage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, per_page: userPerPage }));
  }, [currentPage, dispatch, userPerPage]);

  const themeMode = LIGHT_MODE;

  const themUse =
    themeMode === DARK_MODE ? theme[DARK_MODE] : theme[LIGHT_MODE];

  return (
    <ThemeProvider theme={themUse}>
      <Layout>
        <UserManagementPage />
        <GlobalStyled />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
