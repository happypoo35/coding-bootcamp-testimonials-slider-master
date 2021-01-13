const slide = document.querySelector(".slide");
const buttons = document.querySelector(".buttons");
const image = document.getElementById("image");
const text = document.getElementById("text");
const person = document.getElementById("name");
const position = document.getElementById("position");

const Data = [
  {
    image: "./images/image-tanya.jpg",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    name: "Tanya Sinclair",
    position: "UX Engineer",
  },
  {
    image: "./images/image-john.jpg",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
  },
];

// buttons.addEventListener("click", (e) => {
//   if (image.getAttribute("src") === `${Data[0].image}`) {
//     image.setAttribute("src", `${Data[1].image}`);
//     text.innerText = `${Data[1].text}`;
//     person.innerText = `${Data[1].name}`;
//     position.innerText = `${Data[1].position}`;
//   } else {
//     image.setAttribute("src", `${Data[0].image}`);
//     text.innerText = `${Data[0].text}`;
//     person.innerText = `${Data[0].name}`;
//     position.innerText = `${Data[0].position}`;
//   }
// });

const handleSlides = () => {
  if (image.getAttribute("src") === `${Data[0].image}`) {
    image.setAttribute("src", `${Data[1].image}`);
    text.innerText = `${Data[1].text}`;
    person.innerText = `${Data[1].name}`;
    position.innerText = `${Data[1].position}`;
  } else {
    image.setAttribute("src", `${Data[0].image}`);
    text.innerText = `${Data[0].text}`;
    person.innerText = `${Data[0].name}`;
    position.innerText = `${Data[0].position}`;
  }
};

buttons.addEventListener("click", () => {
  text.classList.toggle("fadeOut");
  text.onanimationend = () => {
    text.classList.remove("fadeOut");
    handleSlides();
    text.classList.toggle("fadeIn");
    text.onanimationend = () => {
      text.classList.remove("fadeIn");
    };
  };
});
