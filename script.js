const links = document.querySelectorAll("nav a");

function ativarLink(link) {
  const href = link.href;
  const url = document.location.href;

  if(href === url) {
    link.style.backgroundColor = "Black";
    link.style.Color = "white";
  }
}

links.forEach(ativarLink);