const title = document.querySelectorAll(".title");
title.forEach((x, index) => {
  x.addEventListener("click", () => {
    title.forEach((e, index) => {
      e.classList.remove("active");
    });
    // console.log(
    //   x.classList.forEach((e, index) => {
    //     e.classList.contains("active");
    //   })
    // );
    if (x.classList.contains(".active")) {
      x.classList.remove("active");
    } else {
      x.classList.add("active");
    }
  });
});
// title.forEach((s) => {
//   s.addEventListener("click", () => {
//     title.forEach((r) => {
//       r.classList.toggle("active");
//     });
//   });
// });
// title.forEach((x) => {
//   x.addEventListener("click", () => {
//     title.forEach((e) => {
//       e.classList.remove("active");
//     });
//     x.classList.add("active");
//   });
// });

// content.forEach((x) => {
//   x.addEventListener("click", () => {
//     const content = document.querySelectorAll(".content");
//     content.forEach((e) => {
//       if (e.classList.contains("active")) {
//         e.classList.remove("active");
//       } else {
//         e.classList.add("active");
//       }
//     });
//   });
// });
