import "./styles.css";

// Part 4: Adding Interactivity
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add("flex-ctr");

// Part 2

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

//Part 3

for (let link of menuLinks) {
  const newLink = document.createElement("a");
  newLink.href = link.href;
  newLink.textContent = link.text;
  topMenuEl.append(newLink);
}

//R-ALAB 316.3.1 - DOM Manipulation (Part Two)

// Part 2:
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Part 3, 4, 5

let topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.nodeName !== "A") {
    return;
  }

  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  const linkObject = menuLinks.find(
    (link) => link.text === event.target.textContent.toLowerCase(),
  );
  // console.log(linkObject);

  if (linkObject) {
    console.log(linkObject.text, "has subLinks:", linkObject.subLinks);
    if (linkObject.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubmenu(linkObject.subLinks, subMenuEl);
      event.target.classList.add("active");
    } else {
      subMenuEl.style.top = "0";
      document
        .querySelectorAll("#mainNav a")
        .forEach((a) => a.classList.remove("active"));
      event.target.classList.add("active");
    }
  }
});

function buildSubmenu(sublinks, subMenuEl) {
  console.log(subMenuEl);
  subMenuEl.innerHTML = "";
  sublinks.forEach((subLink) => {
    const aElement = document.createElement("a");
    aElement.setAttribute("href", subLink.href);
    aElement.textContent = subLink.text;
    subMenuEl.appendChild(aElement);
    console.log(aElement);
  });
}

subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  // console.log('Submenu item clicked:', event.target.textContent);
  subMenuEl.style.top = "0";
  document
    .querySelectorAll("#mainNav a")
    .forEach((a) => a.classList.remove("active"));
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
