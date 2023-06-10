import { j as jsxs, F as Fragment, a as jsx } from "../app.mjs";
import { useEffect } from "react";
import { H as Header, F as Footer } from "./Header-31d58b9c.mjs";
import { router } from "@inertiajs/react";
import SnackbarProvider from "react-simple-snackbar";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
const Pricing$1 = (props) => {
  const subscribe = (plan) => {
    router.post("/plans/subscribe", plan, {
      preserveScroll: true,
      preserveState: true
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { class: "relative w-full h-full", children: [
      /* @__PURE__ */ jsx("div", { class: "absolute hidden w-full  lg:block h-96" }),
      /* @__PURE__ */ jsxs("div", { class: "relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20", children: [
        /* @__PURE__ */ jsxs("div", { class: "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12", children: [
          /* @__PURE__ */ jsxs("h2", { class: "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto", children: [
            /* @__PURE__ */ jsxs("span", { class: "relative inline-block", children: [
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  viewBox: "0 0 52 24",
                  fill: "currentColor",
                  class: "absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block",
                  children: [
                    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
                      "pattern",
                      {
                        id: "2c67e949-4a23-49f7-bf27-ca140852cf21",
                        x: "0",
                        y: "0",
                        width: ".135",
                        height: ".30",
                        children: /* @__PURE__ */ jsx("circle", { cx: "1", cy: "1", r: ".7" })
                      }
                    ) }),
                    /* @__PURE__ */ jsx(
                      "rect",
                      {
                        fill: "url(#2c67e949-4a23-49f7-bf27-ca140852cf21)",
                        width: "52",
                        height: "24"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx("span", { class: "relative", children: "Affordable" })
            ] }),
            " ",
            "for everyone"
          ] }),
          /* @__PURE__ */ jsx("p", { class: "text-base text-gray-700 md:text-lg", children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae." })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto", children: props.plans.map((plan, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { class: "p-8 bg-gray-900 rounded", children: [
            /* @__PURE__ */ jsxs("div", { class: "mb-4 text-center", children: [
              /* @__PURE__ */ jsx("p", { class: "text-xl font-medium tracking-wide text-white", children: plan.display_name }),
              /* @__PURE__ */ jsxs("div", { class: "flex items-center justify-center", children: [
                /* @__PURE__ */ jsx("p", { class: "mr-2 text-5xl font-semibold text-white lg:text-4xl", children: plan.display_price }),
                /* @__PURE__ */ jsxs("p", { class: "text-lg text-gray-500", children: [
                  "/ ",
                  plan.display_period
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("ul", { class: "mb-8 space-y-2 flex flex-col justify-center w-full", children: plan.features.map((feature, index2) => /* @__PURE__ */ jsxs("li", { class: "flex items-center", children: [
              /* @__PURE__ */ jsx("div", { class: "mr-3", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  class: "w-4 h-4 text-teal-accent-400",
                  viewBox: "0 0 24 24",
                  strokeLinecap: "round",
                  strokeWidth: "2",
                  children: /* @__PURE__ */ jsx(
                    "circle",
                    {
                      cx: "12",
                      cy: "12",
                      fill: "green",
                      r: "11",
                      stroke: "currentColor"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsx("p", { class: "font-medium text-gray-300", children: feature })
            ] })) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => subscribe(plan),
                class: "inline-flex items-center bg-blue-600  justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none",
                children: "Get Now"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { class: "w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" }),
          /* @__PURE__ */ jsx("div", { class: "w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" }),
          /* @__PURE__ */ jsx("div", { class: "w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" })
        ] })) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const Subscribe = Pricing$1;
function Pricing(props) {
  useEffect(() => {
  });
  return /* @__PURE__ */ jsx(SnackbarProvider, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-50", children: /* @__PURE__ */ jsx(Subscribe, { plans: props.plans }) }) });
}
export {
  Pricing as default
};
