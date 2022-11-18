const input = document.getElementById("api-input");
const btn = document.getElementById("api-btn");
const container = document.querySelector(".imgs-container");

btn.addEventListener("click", () => {
  fetch(`https://api.thedogapi.com/v1/images/search?limit=${input.value}`, {
    method: "GET",
    headers: {
      "x-api-key":
        "live_oHoxvwkbs3xvuttopkHSxkjZI0u8KD4jaWN4RSg5EkLnxnArHhqJh8WxgOgBVd4C",
    },
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let catsHtml = "";
      data.forEach((element) => {
        catsHtml += `<img src="${element.url}" alt="" width="250" height="250" />`;
        container.innerHTML = catsHtml;
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});
