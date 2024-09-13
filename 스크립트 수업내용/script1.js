// function onClick() {
//   const ul = document.getElementById("ul");
//   for (let i = 0; i < 3000; i++) {
//     ul.innerHTML += `<li>${i}</li>`;
//   }
// }

function onClick() {
  const $ul = document.getElementById("ul");
  let list = "";

  for (let i = 0; i < 3000; i++) {
    list += `<li>${i}</li>`;
  }

  $ul.innerHTML = list;
}
