
//tapar con el parche
const btn = document.getElementById("btn");
    const parche = document.querySelector(".parche");
    //al hacer click en el boton
    btn.addEventListener("click", () => {
        //alternar la clase no-ver en el parche
        parche.classList.toggle("no-ver");
    btn.textContent = parche.classList.contains("no-ver") ? "Ver menos" : "Ver mas";
    });

//enviar a mongoDB
      document.getElementById("correo").addEventListener("submit", async (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    const res = await fetch("./api/mongoDB", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    const json = await res.json();
    console.log(json);
    alert("Gracias por suscribirte a nuestro sistema para recibir menos atencion al cliente. Pronto recibirás noticias nuestras.");
    e.target.reset();
  });
