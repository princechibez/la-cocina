import React, { useEffect, useState } from "react";
import hat from "../../assets/hat.png";
import "./Loading.scss";
import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";

const CircularProgressWithLabel = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress size={70} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          fontSize={14}
          fontWeight={600}
          component="div"
          sx={{ color: "#FFFFFF" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let rafId = null;
    let lastRenderTime = Date.now();

    const render = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastRenderTime;
      lastRenderTime = currentTime;

      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + deltaTime / 10;
        if (newPercentage >= 100) {
          return 100;
        } else {
          return newPercentage;
        }
      });

      rafId = requestAnimationFrame(render);
    };

    const img = document.querySelector(".loading img");
    img.classList.add("animated");

    const app = document.querySelector(".App");
    const observer = new MutationObserver(() => {
      if (app.childElementCount === 0) {
        clearInterval(interval);
        cancelAnimationFrame(rafId);
      }
    });

    observer.observe(app, { childList: true });

    const interval = setInterval(() => {
      const img = document.querySelector(".loading img");
      img.classList.remove("animated");
      void img.offsetWidth;
      img.classList.add("animated");
    }, 2000);

    render();

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="loading">
      <img src={hat} alt="Loader Image" />
      <CircularProgressWithLabel
        value={Math.min(Math.round(percentage), 100)}
      />
      {/* <span>{Math.min(Math.round(percentage), 100)}%</span> */}
    </div>
  );
};

export default Loading;
