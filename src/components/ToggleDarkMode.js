import { Box, IconButton,  useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

export default function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
  const [darkMode, setdarkMode] = React.useState(false);
  function toggle() {
    toggleColorMode()
    setdarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <Box right={"30px"} pos={"absolute"}>
      {!darkMode ? (
        <IconButton
          icon={<SunIcon />}
          onClick={toggle}
          bg={"#39c0ba"}
          alignSelf={"center"}
          color={'white'}
        />
      ) : (
        <IconButton
          icon={<MoonIcon />}
          onClick={toggle}
          bg={"#22716e"}
          alignSelf={"center"}
        />
      )}
    </Box>
  );
}
