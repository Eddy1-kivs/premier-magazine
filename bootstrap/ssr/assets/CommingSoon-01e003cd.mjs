import { j as jsxs, a as jsx } from "../app.mjs";
import "react";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
const CommingSoon = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-900 flex flex-col items-center justify-center relative px-4", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30",
        style: {
          backgroundImage: `url("/images/fashion/h.jpg")`
        }
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl text-white font-bold mb-8 z-10", children: "Coming Soon" }),
    /* @__PURE__ */ jsx("p", { className: "text-white text-xl md:text-2xl", children: "We're working hard to bring you something amazing. Stay tuned!" })
  ] });
};
export {
  CommingSoon as default
};
