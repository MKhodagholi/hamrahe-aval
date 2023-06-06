import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

const DARK_MODE = "dark_mode";
const LIGHT_MODE = "light_mode";

const theme = {
  [DARK_MODE]: darkTheme,
  [LIGHT_MODE]: lightTheme,
};

export { DARK_MODE, LIGHT_MODE };
export default theme;
