//variavel
const cep = document.querySelector("#cep");

//funcao
const showData = (result) => {
  for(const campo in result){
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo]
    }
  }
}

//evento
cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-","")
  const options = {
    method: "GET", 
    mode: "cors",
    cache: "default"
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then((response) =>{response.json()
    .then((data) => showData(data))
    })
    .catch((e) => console.log("Deu ruim" + e,message));
})
