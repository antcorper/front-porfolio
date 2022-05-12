function pedirTrabajos() {
  console.log("Click en boton");
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  xhr.open("GET", `https://crud-servicios.herokuapp.com/api/works`);

  xhr.addEventListener("load", (data) => {
    console.log("Recibo petición");
    const dataJSON = JSON.parse(data.target.response);

    if (data.currentTarget.status < 400) printData(dataJSON);
    else console.log("Load callback - error!");
  });
  console.log("Hago petición");
  xhr.send();
}
function printData(dataJSON) {
  const lista = document.getElementById('lista');

  for (work of dataJSON) {
    const li = document.getElementById('name');
    const img = document.getElementById('imageurl');

    li.textContent = comment.name;

    a.textContent = attributes.name;
    img.src = attributes.imageurl;

    lista.appendChild(li);
    lista.appendChild(a);
  }
}

pedirTrabajos();
