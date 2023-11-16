import {
  useState,
  useContext,
  ReactNode,
  FC,
  createContext,
  useCallback,
  useMemo,
} from "react";
import { darkConfig, lightConfig } from "./themeConfig";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import ColorInterface from "./ColorInterface";

type ModeType = "dark" | "light";

const fontFamily = ["Roboto", "sans-serif"].join(",");

export const themeSettings = (mode: ModeType) => {
  const colors = mode === "dark" ? darkConfig : lightConfig;
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily,
      fontSize: 12,
      h1: { fontFamily, fontSize: 40 },
      h2: { fontFamily, fontSize: 32 },
      h3: { fontFamily, fontSize: 24 },
      h4: { fontFamily, fontSize: 20 },
      h5: { fontFamily, fontSize: 16 },
      h6: { fontFamily, fontSize: 14 },
    },
  };
};

type ContextValue = {
  colors: ColorInterface;
  toggleThemeMode: () => void;
  mode: ModeType;
};

const ThemeContext = createContext<null | ContextValue>(null);
const { Provider } = ThemeContext;

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ModeType>("dark");

  const toggleThemeMode = useCallback(
    () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    [mode]
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const colors = useMemo(
    () => (mode === "dark" ? darkConfig : lightConfig),
    [mode]
  );

  return (
    <Provider value={{ toggleThemeMode, colors, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default ThemeProvider;
