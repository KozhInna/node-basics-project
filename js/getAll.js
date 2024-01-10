"use strict";

(function () {
  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    try {
      const data = await fetch("/all");
      const result = await data.json();

      const resultset = document.getElementById("resultset");

      for (const book of result) {
        const tr = document.createElement("tr");
        tr.appendChild(createCell(book.bookID));
        tr.appendChild(createCell(book.name));
        tr.appendChild(createCell(book.author));
        tr.appendChild(createCell(book.topic));
        tr.appendChild(createCell(book.genre));
        resultset.appendChild(tr);
      }
    } catch (err) {
      console.log(err);
    }
  } //end of init

  function createCell(data) {
    const td = document.createElement("td");
    td.textContent = data;
    return td;
  }
})();
