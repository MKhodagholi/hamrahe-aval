const clr_white = "#ffffff";

const clr_gray10 = "#F8F9FA";
const clr_gray30 = "#EAEAEA";
const clr_gray50 = "#9FA2AB";
const clr_gray70 = "#DFDFDF";

const clr_black80 = "#6C757D";
const clr_black90 = "#343A40";

const clr_blue = "#233EAE";

const clr_green = "";

const clr_yellow = "";

const clr_red = "#DC3545";

const lightTheme = {
  user: {
    background: clr_white,
    border: clr_gray30,
    text: clr_black80,
    title: clr_black90,
    status: { danger: clr_red, success: clr_green, warning: clr_yellow },
  },
  header: {
    search: {
      background: clr_gray10,
      placeholder: clr_gray50,
    },
  },
  footer: {
    text: clr_black80,
    border: clr_gray70,
    input: {
      border: clr_gray70,
      text: clr_black90,
    },
  },
};

export default lightTheme;
