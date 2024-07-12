import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1C1A20",
      light: "#46424F",
      highlight: "#382BF0"
    },
    secondary: {
      main: "#282828"
    },
    text: {
      main: "#FFFFFF",
      disabled: "#AAAAAA",
    },
    success: {
      main: "#00FF38",
    },
    fail: {
      main: "#FF015C",
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
    button: {
      textTransform: 'capitalize'
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingBottom: "0px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          background: theme.palette.primary.light,
          borderRadius: "8px",
          height: "5vh",
          minHeight: "30px",
          maxHeight: "50px",
        }),
        input: ({ theme }) => ({
          color: theme.palette.text.main,
          '::placeholder': {
            color: theme.palette.text.disabled,
            opacity: 1,
          },
        })
      },
    },
    MuiButton: {
      styleOverrides: {
        root: () => (
          {
            borderRadius: "8px",
            width: "8vw",
            color: theme.palette.text.main,
            fontWeight: "650",
            paddingLeft: "0",
            height: "4vh",
            minHeight: "20px",
            maxHeight: "40px",
            background: theme.palette.primary.highlight
          }
        ),
        startIcon: {
          marginRight: '5px',
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          cursor: "default",
          color: theme.palette.text.main,
        }),
      },

    }
  }
})
