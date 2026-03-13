const btn = document.querySelector("#modes");
const body = document.querySelector("body");
const logo = document.querySelector(".button")
const addBtn = document.querySelector('#add-btn')

btn.addEventListener('click', () => {
    body.classList.toggle('NightMode')
    logo.classList.toggle('NightModeLogo')
    if (btn.textContent !== 'Light mode') {
        btn.textContent = 'Light mode'
        btn.style.border = '1px solid #37FF8B'
        addBtn.style.border = '1px solid #37FF8B'
    } else{
        btn.style.border = '1px solid #000000'
        btn.textContent = 'Night mode'
        addBtn.style.border = '1px solid #000000'
    }
})


const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-link');

burger.addEventListener('click', () => {
    links.classList.toggle('active');
});


const moreBtn = document.querySelector('.more-btn');
const extraP = document.querySelector('.extra-p');
const lessBtn = document.querySelector('.less-btn')

moreBtn.addEventListener('click', () => {
    extraP.classList.add('extra-p-show');
    moreBtn.style.display = 'none';
});

lessBtn.addEventListener('click', () => {
    extraP.classList.remove('extra-p-show')
    moreBtn.style.display = 'inline'
})

const products = [
    {
    name: "Standart",
    price: 0,
    },
    {
    name: "Pro",
    price: 30,
    },
    {
    name: "Ultimate",
    price: 50,
    },
];

const aboutHero = document.querySelector("#about-hero");

products.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("pricing-card");

    const isPro = item.name === "Pro";
    
    card.innerHTML = `
        ${isPro ? '<div class="badge">BEST VALUE</div>' : ''}
        <div class="card-content">
            <h2 class="plan-name">${item.name}</h2>
            <div class="price-box">
                <span class="currency">$</span>
                <span class="amount">${item.price}</span>
                <span class="period">/mo</span>
            </div>
            <button class="upgrade-btn">UPGRADE NOW</button>
            <ul class="features">
                <li><span class="check">✔</span> Free challenges</li>
                <li><span class="check">✔</span> Private solutions</li>
                <li><span class="check">✔</span> Custom domains</li>
            </ul>
        </div>
    `;

    aboutHero.appendChild(card);
});