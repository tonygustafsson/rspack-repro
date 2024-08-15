import "./render.css";

export function render() {
  const el = document.createElement("div");

  // This will not work, even though loadEnv is used in rsbuild.config.js
  const envMsg = process.env.REACT_APP_TEST_ENV;

  // Would work:
  // const envMsg = process.env.NODE_ENV;

  el.classList.add("text");
  document.getElementsByTagName("body")[0].appendChild(el);

  el.innerHTML = "hello, world " + envMsg;
}
