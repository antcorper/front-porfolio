async function onRequestAwait() {
  try {
    const response = await fetch(
      "https://crud-servicios.herokuapp.com/api/works?populate=image"
    );
    const works = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    printData(works);
  } catch (error) {
    console.log(error);
  }
}

function printData(dataJSON) {
  const lista = document.getElementById("lista");
  for (const work of dataJSON.data) {
    const a = document.createElement("a");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");

    const name = work.attributes.name;
    const image = work.attributes.image.data.attributes.formats.small.url;

    img.src = image;

    h4.textContent = name;

    a.href = `detail_work.html?id=${work.id}`;

    a.appendChild(h4);
    a.appendChild(img);

    lista.appendChild(a);
  }
}

onRequestAwait();
