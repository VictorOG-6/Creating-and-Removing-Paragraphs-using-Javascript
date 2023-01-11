const btnAdd = document.querySelector(".add");
      const para = document.querySelector("div");
      const btnRem = document.querySelector(".remove");
      btnAdd.addEventListener("click", function (event) {
        event.preventDefault();
        const newp = document.createElement("p");
        const pText = document.createTextNode("A new paragraph");
        newp.appendChild(pText);
        para.appendChild(newp);
      });
      btnRem.addEventListener("click", function (event) {
        event.preventDefault();
        const allPs = document.querySelectorAll("p");
        para.removeChild(para.children[allPs.length - 1]);
      });