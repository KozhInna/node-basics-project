"use strict";

(function () {
  let bookIDField;
  let nameField;
  let authorField;
  let topicField;
  let genreField;
  let resultarea;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    resultarea = document.getElementById("resultarea");
    bookIDField = document.getElementById("bookID");
    nameField = document.getElementById("name");
    authorField = document.getElementById("author");
    topicField = document.getElementById("topic");
    genreField = document.getElementById("genre");

    document.getElementById("submit").addEventListener("click", send);

    bookIDField.addEventListener("focus", clear);
  }

  function clear() {
    bookIDField.value = "";
    nameField.value = "";
    authorField.value = "";
    topicField.value = "";
    genreField.value = "";
    resultarea.textContent = "";
    resultarea.removeAttribute("class");
  }

  async function send() {
    const book = {
      bookID: +bookIDField.value,
      name: nameField.value,
      author: authorField.value,
      topic: topicField.value,
      genre: +genreField.value,
    };

    try {
      const options = {
        method: "POST",
        body: JSON.stringify(book),
        headers: { "Content-Type": "application/json" },
      };
      const data = await fetch("/addBook", options);
      const result = await data.json();

      updateStatus(result);
    } catch (err) {
      updateStatus({ message: err.message, type: "error" });
    }
  } //end of send

  function updateStatus(status) {
    resultarea.textContent = status.message;
    resultarea.setAttribute("class", status.type);
  }
})();
