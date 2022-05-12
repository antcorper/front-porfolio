async function pedirTrabajos() {
    console.log("Click en boton");
  
  
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
  
    try {
  
      const response = await fetch('https://crud-servicios.herokuapp.com/api/works?id=${id}');
  
      if (!response.ok) {
  
          const message = `Error: ${response.status}`;
  
          throw new Error(message);
  
      }
  
  
  
      const users = await response.json();
  
      printData(users.data);
  
  } catch (error) {
  
      console.log(error)
  
  }
  
  }

  
function printData(dataJSON) {
    for (const work of dataJSON) {
      console.log(work);
      const h3 = document.getElementById('name');
      h3.textContent = work.attributes.name;

      const img = document.getElementById('imageurl');
      img.id += "imageurl";
      img.src = work.attributes.imageurl;
  
      const p = document.getElementById('descripcion');  
  

      p.textContent = work.attributes.descripcion;

    };
    }
  
  
  pedirTrabajos();
  