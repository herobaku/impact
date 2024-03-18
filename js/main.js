const services = document.querySelector(".services > .container .row");
const portfolio = document.querySelector(".portfolio > .container .row");

const servicesObject = [
  {
    icon: "icon-activity",
    title: "Nesciunt Mete",
    subtitle:
      "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    icon: "icon-broadcast",
    title: "Eosle Commodi",
    subtitle:
      "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    icon: "icon-easel",
    title: "Ledo Markt",
    subtitle:
      "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    icon: "icon-box",
    title: "Asperiores Commodit",
    subtitle:
      "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
  {
    icon: "icon-calendar-week",
    title: "Velit Doloremque",
    subtitle:
      "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
  },
  {
    icon: "icon-chat-left-text",
    title: "Dolori Architecto",
    subtitle:
      "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
  },
];

const filterPortfolio = [
  {
    img: "./img/filter/app-1.jpg",
    title: "App 1",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "app",
  },
  {
    img: "./img/filter/product-1.jpg",
    title: "Product 1",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "product",
  },
  {
    img: "./img/filter/branding-1.jpg",
    title: "Branding 1",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "brand",
  },
  {
    img: "./img/filter/books-1.jpg",
    title: "Book 1",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "books",
  },
  {
    img: "./img/filter/app-2.jpg",
    title: "App 2",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "app",
  },
  {
    img: "./img/filter/product-2.jpg",
    title: "Product 2",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "product",
  },
  {
    img: "./img/filter/branding-2.jpg",
    title: "Branding 2",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "brand",
  },
  {
    img: "./img/filter/books-2.jpg",
    title: "Books 2",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "books",
  },
  {
    img: "./img/filter/app-3.jpg",
    title: "App 3",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "app",
  },
  {
    img: "./img/filter/product-3.jpg",
    title: "Product 3",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "product",
  },
  {
    img: "./img/filter/branding-3.jpg",
    title: "Braanding 3",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "brand",
  },
  {
    img: "./img/filter/books-3.jpg",
    title: "Books 3",
    subtitle: "Lorem ipsum, dolor sit amet consectetur",
    category: "books",
  },
]

const teamObject = [
  {
    img: "./img/team/team-1.jpg",
    name: "Walter White",
    special: "Web Development",
  },
  {
    img: "./img/team/team-2.jpg",
    name: "Sarah Jhinson",
    special: "Marketing",
  },
  {
    img: "./img/team/team-3.jpg",
    name: "William Anderson",
    special: "Content",
  },
  {
    img: "./img/team/team-4.jpg",
    name: "Amanda Jepson",
    special: "Accountant",
  },
]

const servicesDoc = (arr) => {
  arr.forEach((item) => {
    const { icon, title, subtitle } = item;
    services.innerHTML += `
    <div class="col-4">
            <article class="article">
              <a href="#">
                <i class="icon ${icon}"></i>
                <h3>${title}</h3>
                <p>${subtitle}</p>
                <p class="read">Read More <i class="icon-arrow-right"></i> </p>
              </a>
            </article>
          </div>
  `;
  });
};
servicesDoc(servicesObject);

const filterDoc = (arr) => {
  const filter = arr.filter(item => {
    const { img, title, subtitle } = item
    return portfolio.innerHTML += `
    <div class="col-4">
            <article class="portfolio__item">
              <div class="top">
                <img src="${img}" class="img-responsive" alt="${title}" />
              </div>
              <div class="bottom">
                <h2>${title}</h2>
                <p>${subtitle}</p>
              </div>
            </article>
          </div>
    `
    return filter
  })
}
filterDoc(filterPortfolio);