import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import useWindowDimensions from "./../../hook/getWindowDimensions";

export default function Modal({ setSidebar, isOpen }) {
  const { width } = useWindowDimensions();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar(open);
  };

  return (
    <>
      {width < 768 && (
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="h-full"
          >
            <div className="logo text-3xl h-16 bg-gray-50 flex items-center px-4">
              {isOpen ? "Qubartech" : "Q"}
            </div>

            <div className="overflow-x-auto h-[calc(100%-4rem)]">
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>ghgh</div>
              <div>gjh</div>
            </div>
          </Box>
        </Drawer>
      )}
    </>
  );
}
