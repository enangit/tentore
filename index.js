const header = document.querySelector("header");
const mobileNav = document.querySelector("#mobile-nav")
const hamburgerMenu = document.querySelector("#hamburger-button")
const sectionEls = document.querySelectorAll("section")
const heart = document.querySelectorAll(".heart")

const home_text = document.querySelector(".home-text")
const feature_heading = document.querySelector(".feature-heading")
const feature_content = document.querySelector(".feature-content")
const products_heading = document.querySelector(".products-heading")
const product_content = document.querySelector(".products-content")
const ad_text = document.querySelector(".ad-text")
const ad_img = document.querySelector(".ad-img")
const contact_text = document.querySelector(".contact-text")
const contact_form = document.querySelector(".contact-form")

const nav_links = document.querySelectorAll(".link a")

const mobile_nav = document.querySelector("#mobile-nav")
const desktop_nav = document.querySelector("#desktop-nav")


heart.forEach(el => {
    el.addEventListener("click", function(e) {
        if (el.classList.contains("filled")) {
            el.classList.remove("filled")
            el.classList.add("unfilled")
        }
        else {
            el.classList.remove("unfilled")
            el.classList.add("filled")
        }
    })
})

if (document.body.clientWidth <= 886) {
    const links = mobile_nav.querySelectorAll(".link a")
    console.log(links)
    links.forEach(link => {
        link.addEventListener("click", () => {
            nav_links.forEach(link => link.classList.remove("active"))

            if (link.classList.contains("active")) {
                link.classList.remove("active")
            } else {
                link.classList.add("active")
            }
        })
    })
} else {
    const links = desktop_nav.querySelectorAll(".link a")
    links.forEach(link => {
        link.addEventListener("click", () => {
            nav_links.forEach(link => link.classList.remove("active"))

            if (link.classList.contains("active")) {
                link.classList.remove("active")
            } else {
                link.classList.add("active")
            }
        })
    })
}

hamburgerMenu.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("open")
    mobileNav.classList.toggle("open")
})

const observer = new IntersectionObserver(observerCb, {
    root: null,
    threshold: .12,
})

const els = [feature_heading, home_text, feature_content, product_content, products_heading, ad_text, ad_img, contact_text, contact_form]

function observerCb(entries) {
    entries.forEach(ent => {
        if (ent.isIntersecting) {
            ent.target.classList.remove("hidden")
        } else {
            ent.target.classList.add("hidden")
        }
    })

}

function observerFunction(els) {
    els.forEach(el => {
        observer.observe(el)
    })
}

observerFunction(els)

function checkActiveLink(navType) {
    const links = navType.querySelectorAll('.link a')
    sectionEls.forEach(section => {
        const top = window.scrollY
        const offsetTop = section.offsetTop
        const offsetHeight = section.offsetHeight
        const id = section.getAttribute("id")

        if (top >= (offsetTop - 100) && top < offsetTop + (offsetHeight / 2)) {
            links.forEach(link => link.classList.remove("active"))
            const active = navType.querySelector(`.navbar-links .link a[href*="${id}"]`)
            active.classList.add("active")
        }
    })
}

window.addEventListener("scroll", function(e) {
    header.classList.toggle("sticky", window.scrollY > 0);

    if (document.body.clientWidth <= 886) {
        mobileNav.classList.toggle("white", window.scrollY > 0);
        if (mobileNav.classList.contains("open")) {
            hamburgerMenu.classList.toggle("open")
            mobileNav.classList.remove("open")
        }
        checkActiveLink(mobile_nav)
    }
    checkActiveLink(desktop_nav)
    observerFunction(els)
})

