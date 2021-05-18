function setUp() {
  let myLeads = [];

  const inputBtn = document.getElementById("input-btn");
  const inputEl = document.getElementById("input-el");
  const ulEl = document.getElementById("ul-el");

  // localStorage.setItem("myLeads", "www.google.com");
  console.log(localStorage.getItem("myLeads"));

  inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);

    renderLeads();
    inputEl.value = "";
  });

  let listItems = "";
  function renderLeads() {
    for (let i = 0; i < myLeads.length; i++) {
      // const li = document.createElement("li");
      // li.textContent = myLeads[i];
      // ulEl.appendChild(li);
      listItems += `
      <li>
        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
  }
}

window.onload = function () {
  setUp();
};
