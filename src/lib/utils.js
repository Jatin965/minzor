const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const testimonials = [
  {
    id: 1,
    name: "RAHUL SINGHANIYA",
    title: "CEO",
    org: "WEB CIFAR",
    desc: "Please make sure that you thank everyone at Minzor for all of the work they have done, we are very happy with everything and will be recommending your services to anyone that will listen. Pass it on please.",
  },
  {
    id: 2,
    name: "PRITHVI SINGH",
    title: "Co-founder",
    org: "Kreetive",
    desc: "Initially we thought our website was going be just to validate us as a company. But what it did actually was save a bunch of time by implementing different tools that we didn’t even know we could use a website for.",
  },
  {
    id: 3,
    name: "SONAM SHARMA",
    title: "Marketing Head",
    org: "Eleven Dawn",
    desc: "When you choose Minzor you get a wonderful, professional team with innovative ideas, awesome customer service, and exactly what you’re looking for. Minzor took the ideas that we had and put them perfectly on the web.",
  },
  {
    id: 4,
    name: "POOJA SHUKLA",
    title: "Marketing Head",
    org: "Eleven Dawn",
    desc: "When it comes to creating professional, attractive, and effective websites, there is no company that can surpass Minzor. Thanks to their talent, our site has taken off in the search engines like a rocket. In this day and age, it is impossible to get ahead as a business without the support of gurus like Minzor standing behind you.",
  },
];
export default testimonials;
