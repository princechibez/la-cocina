import React, { useEffect, useState } from 'react';
import hat from '../../assets/hat.png';
import './Loading.scss';

const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let rafId = null;
    let lastRenderTime = Date.now();

    const render = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastRenderTime;
      lastRenderTime = currentTime;

      setPercentage(prevPercentage => {
        const newPercentage = prevPercentage + deltaTime / 10;
        if (newPercentage >= 100) {
          return 100;
        } else {
          return newPercentage;
        }
      });

      rafId = requestAnimationFrame(render);
    };

    const img = document.querySelector('.loading img');
    img.classList.add('animated');

    const app = document.querySelector('.App');
    const observer = new MutationObserver(() => {
      if (app.childElementCount === 0) {
        clearInterval(interval);
        cancelAnimationFrame(rafId);
      }
    });

    observer.observe(app, { childList: true });

    const interval = setInterval(() => {
      const img = document.querySelector('.loading img');
      img.classList.remove('animated');
      void img.offsetWidth;
      img.classList.add('animated');
    }, 2000);

    render();

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className='loading'>
      <img src={hat} alt='' />
      <span>{Math.min(Math.round(percentage), 100)}%</span>
    </div>
  );
};

export default Loading;
