document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");

  try {
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("Erro");

    const html = await response.text();

    carregaResultado(html);
  } catch (error) {
    console.error("Erro: " + error);
  }

  /* await fetch(href)
    .then((response) => {
      if (response.status !== 200) throw new Error("Erro");
      return response.text();
    })
    .then((html) => carregaResultado(html))
    .catch((e) => console.error(e)); */
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");

  resultado.innerHTML = response;
}
