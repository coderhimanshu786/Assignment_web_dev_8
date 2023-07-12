setTimeout(() => {
  fetchData();
}, 3000);

async function fetchData() {
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json();

  const image = document.querySelector(".img");
  const heading = document.querySelector(".heading");
  const content = document.querySelector(".content");

  image.innerHTML = "<img src='https://picsum.photos/340/200'/>";
  image.classList.remove("loading");

  heading.innerHTML = result.map((user) => 
    `<div class="heading">${user.username}</div>`
 ).join("")
//   heading.classList.remove("loading");

  content.innerHTML =
    "lorem In the JavaScript code, we add an event listener to the DOMContentLoaded event, which will trigger the getData function when the HTML document has finished loading. In the getData function, we select the data container and clear its contents. Then, we display the skeleton loader by calling the showSkeletonLoader function.";
  content.classList.remove("loading");
}

fetchData();
