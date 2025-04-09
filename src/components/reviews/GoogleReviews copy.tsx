import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-df9a3746-d686-43ca-a047-34d98fdd4351"
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfsightWidget;
