const itemQuerySelector = document.querySelectorAll(".item");

const countItem = (arr) => {
  console.log(`Number of categories: ${arr.length}`);

  arr.forEach((el) => {
    const title = el.querySelector("h2").textContent;
    const item = el.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${item}`);
  });
};
countItem(itemQuerySelector);
