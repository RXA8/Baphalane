import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    __weatherwidget_init?: () => void;
  }
}

const RustenburgWeatherWidget = () => {
  const widgetRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const scriptId = 'weatherwidget-io-js';

    const initializeWidget = () => {
      if (typeof window.__weatherwidget_init === 'function') {
        window.__weatherwidget_init();
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      script.async = true;
      script.onload = initializeWidget;
      document.body.appendChild(script);
    } else {
      initializeWidget();
    }
  }, []);

  return (
    <div className="w-full">
      <a
        ref={widgetRef}
        className="weatherwidget-io block w-full "
        href="https://forecast7.com/en/n25d6527d26/rustenburg/"
        data-label_1="RUSTENBURG"
        data-label_2="WEATHER"
        data-icons="Climacons Animated"
        data-days="7"
        data-theme="blue-mountains"
      >
        RUSTENBURG WEATHER
      </a>
    </div>
  );
};

export default RustenburgWeatherWidget;
