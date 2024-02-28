/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generalexcuse() {
  let who = [
    "The Dog",
    "My Neighbor",
    "The Police",
    "Your Teacher",
    "His Parents"
  ];
  let action = ["ate", "throw away", "push", "vomit", "robbed"];
  let what = ["me", "my homework", "my Nintendo", "my car", "my phone"];
  let when = [
    "yesterday",
    "while i was sleeping",
    "after work",
    "last month",
    "when i finished"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  return (
    who[whoindex] +
    " " +
    action[actionindex] +
    " " +
    what[whatindex] +
    " " +
    when[whenindex]
  );
}

window.onload = () => {
  //write your code here()
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generalexcuse();
  });

  console.log("Hello Rigo from the console!");
};
