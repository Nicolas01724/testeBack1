addEventListener("load",main)

function main(){
  const button = document.querySelector("button")
  button.addEventListener("click", cachorro)
}

async function cachorro(){
  const response = await fetch("http://localhost/server.php")
  const data = await response.json()

  const cachorro = document.querySelector("#cachorro")
  const image = document.createElement("img")
  if (image.src = "") {

  image.src = data.url 
  image.width = 1000
  cachorro.appendChild(image)
  console.log(data)
  } else {
    image.src = ""
  }
}