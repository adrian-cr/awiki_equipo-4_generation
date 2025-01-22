let h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener("click", e => {
   e.preventDefault();
   e.target.style.color = "#77aaff";
   e.target.style.transition = "500ms";
})
