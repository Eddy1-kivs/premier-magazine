var _a;
import * as jsxRuntime from "react/jsx-runtime";
import _ from "lodash";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
window._ = _;
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = ((_a = window.document.getElementsByTagName("title")[0]) == null ? void 0 : _a.innerText) || "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-ec42d376.mjs"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-e24e2e10.mjs"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-033dde57.mjs"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-2f9d214a.mjs"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-5d322005.mjs"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-2cbdfbcf.mjs"), "./Pages/CommingSoon.jsx": () => import("./assets/CommingSoon-01e003cd.mjs"), "./Pages/Contact.jsx": () => import("./assets/Contact-a65a70dc.mjs"), "./Pages/Dashboard.jsx": () => import("./assets/Dashboard-d4ad09da.mjs"), "./Pages/Magazine.jsx": () => import("./assets/Magazine-7c360b68.mjs"), "./Pages/Pricing.jsx": () => import("./assets/Pricing-1205731b.mjs"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-c494ff98.mjs"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-4f7ccf74.mjs"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-8d03e10e.mjs"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-70a30246.mjs"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-aae147c8.mjs") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "red"
  }
});
export {
  Fragment as F,
  jsx as a,
  jsxs as j
};
