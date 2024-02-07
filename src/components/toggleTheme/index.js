import React, { useContext, useEffect } from "react";
import { StyledButton } from "../../styles/styledButton";
import { ThemeContext } from "../../contexts/theme-context";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      toggleTheme(savedTheme);
    }
  }, [toggleTheme]);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    toggleTheme(newTheme);
  };

  return (
    <StyledButton onClick={handleToggleTheme}>
      Change Themes
    </StyledButton>
  );
};
