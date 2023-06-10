import { j as jsxs, F as Fragment, a as jsx } from "../app.mjs";
import { useState } from "react";
import { Link } from "@inertiajs/react";
const footer = "";
const Footer = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "box logo", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "../images/fashion/logo.png",
            className: "logo",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsx("p", { children: "Premier magazine is an amazing magazine that gives you the latest news on fashion" }),
        /* @__PURE__ */ jsx("i", { className: "fa fa-envelope" }),
        /* @__PURE__ */ jsx("span", { children: " hello@beautiful.com " }),
        " ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("i", { className: "fa fa-headphones" }),
        /* @__PURE__ */ jsx("span", { children: " +91 60521488" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "box", children: [
        /* @__PURE__ */ jsx("h3", { children: "SPORT" }),
        /* @__PURE__ */ jsxs("div", { className: "item", children: [
          /* @__PURE__ */ jsx("img", { src: "../images/hero/hero1.jpg", alt: "" }),
          /* @__PURE__ */ jsx("p", { children: "Google To Boost Android Security In Few Days" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "item", children: [
          /* @__PURE__ */ jsx("img", { src: "../images/hero/hero2.jpg", alt: "" }),
          /* @__PURE__ */ jsx("p", { children: "Cespedes play the winning Baseball Game" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "box", children: [
        /* @__PURE__ */ jsx("h3", { children: "CRICKET" }),
        /* @__PURE__ */ jsxs("div", { className: "item", children: [
          /* @__PURE__ */ jsx("img", { src: "../images/hero/hero3.jpg", alt: "" }),
          /* @__PURE__ */ jsx("p", { children: "US Promises to give Intel aid to locate the soldiers" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "item", children: [
          /* @__PURE__ */ jsx("img", { src: "../images/hero/hero1.jpg", alt: "" }),
          /* @__PURE__ */ jsx("p", { children: "Renewable energy dead as industry waits for Policy" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "legal  ", children: /* @__PURE__ */ jsx("div", { className: "container flexSB", children: /* @__PURE__ */ jsx("p", { children: "© all rights reserved" }) }) })
  ] });
};
const Footer$1 = Footer;
const header = "";
const Header = () => {
  useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages = [
    { title: "Home", url: "/" },
    { title: "Pricing", url: "/plans/pricing" },
    { title: "Contact us", url: "/contact" }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { class: "bg-gray-500", children: /* @__PURE__ */ jsx("div", { class: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8", children: /* @__PURE__ */ jsxs("div", { class: "relative flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { class: "flex items-center", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/",
          "aria-label": "Company",
          title: "Company",
          class: "inline-flex items-center mr-8 ",
          children: [
            /* @__PURE__ */ jsxs(
              "svg",
              {
                class: "w-8 text-teal-accent-400",
                viewBox: "0 0 24 24",
                strokeLinejoin: "round",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                fill: "none",
                stroke: "currentColor",
                children: [
                  /* @__PURE__ */ jsx("rect", { x: "3", y: "1", width: "7", height: "12" }),
                  /* @__PURE__ */ jsx("rect", { x: "3", y: "17", width: "7", height: "6" }),
                  /* @__PURE__ */ jsx("rect", { x: "14", y: "1", width: "7", height: "6" }),
                  /* @__PURE__ */ jsx("rect", { x: "14", y: "11", width: "7", height: "12" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                href: "/",
                class: "ml-2 text-xl font-bold tracking-wide text-yellow-500 uppercase",
                children: "Company"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("ul", { class: "md:flex items-center hidden space-x-8 lg:flex", children: pages.map((page, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        Link,
        {
          href: page.url,
          "aria-label": "Our product",
          title: "Our product",
          class: "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400",
          children: page.title
        },
        index
      ) })) })
    ] }),
    /* @__PURE__ */ jsxs("ul", { class: "md:flex items-center hidden space-x-8 lg:flex", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        Link,
        {
          href: "/login",
          "aria-label": "Sign in",
          title: "Sign in",
          class: "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400",
          children: "Sign in"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        Link,
        {
          href: "/register",
          class: "inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none",
          "aria-label": "Sign up",
          title: "Sign up",
          children: "Sign up"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "lg:hidden", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Open Menu",
          title: "Open Menu",
          class: "p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline",
          onClick: () => setIsMenuOpen(true),
          children: /* @__PURE__ */ jsxs(
            "svg",
            {
              class: "w-5 text-gray-600",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  }
                )
              ]
            }
          )
        }
      ),
      isMenuOpen && /* @__PURE__ */ jsx("div", { class: "absolute z-50 top-0 left-0 w-full", children: /* @__PURE__ */ jsxs("div", { class: "p-5 bg-white border rounded shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { class: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/",
              "aria-label": "Company",
              title: "Company",
              class: "inline-flex items-center",
              children: [
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    class: "w-8 text-deep-purple-accent-400",
                    viewBox: "0 0 24 24",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    stroke: "currentColor",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          x: "3",
                          y: "1",
                          width: "7",
                          height: "12"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          x: "3",
                          y: "17",
                          width: "7",
                          height: "6"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          x: "14",
                          y: "1",
                          width: "7",
                          height: "6"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "rect",
                        {
                          x: "14",
                          y: "11",
                          width: "7",
                          height: "12"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("span", { class: "ml-2 text-xl font-bold tracking-wide text-yellow-600 uppercase", children: "Premier" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Close Menu",
              title: "Close Menu",
              class: "p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
              onClick: () => setIsMenuOpen(false),
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  class: "w-5 text-gray-600",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "currentColor",
                      d: "M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    }
                  )
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { class: "space-y-4", children: [
          pages.map((page, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: page.url,
              "aria-label": "Our product",
              title: "Our product",
              class: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
              children: page.title
            }
          ) }, index)),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              "aria-label": "Sign in",
              title: "Sign in",
              class: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
              children: "Sign in"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              class: "inline-flex items-center justify-center w-full h-12 bg-blue-700 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none",
              "aria-label": "Sign up",
              title: "Sign up",
              children: "Sign up"
            }
          ) })
        ] }) })
      ] }) })
    ] })
  ] }) }) }) });
};
const Header$1 = Header;
export {
  Footer$1 as F,
  Header$1 as H
};
