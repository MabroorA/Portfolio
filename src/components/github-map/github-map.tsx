{/* <link
  rel="stylesheet"
  href="node_modules/react-github-contribution-calendar/default.css"
  type="text/css"
/>;
import React from "react";
import ReactDOM from "react-dom";
import Calendar from "react-github-contribution-calendar";

const values: { [date: string]: number } = {
  "2016-06-23": 1,
  "2016-06-26": 2,
  "2016-06-27": 3,
  "2016-06-28": 4,
  "2016-06-29": 4,
};
const until: string = "2016-06-30";

const elem: HTMLElement | null = document.getElementById("app");
if (elem) {
  ReactDOM.render(<Calendar values={values} until={until} />, elem);
} */}