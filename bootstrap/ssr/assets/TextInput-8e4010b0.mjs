import { a as jsx } from "../app.mjs";
import { forwardRef, useRef, useEffect } from "react";
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 dark:text-red-400 " + className, children: message }) : null;
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" + className,
      ref: input
    }
  ) });
});
export {
  InputError as I,
  TextInput as T
};
