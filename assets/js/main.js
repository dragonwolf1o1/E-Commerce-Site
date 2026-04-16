const inventory = [
    {
        id: "ferrari-250-gto",
        name: "Ferrari 250 GTO",
        brand: "Ferrari",
        year: "1963",
        priceLabel: "From $5M",
        priceValue: 5,
        image: "assets/images/cars/ferrari-250-gto.jpg",
        category: "iconic",
        mood: "elegant",
        purpose: "showcase",
        badge: "Collector icon",
        summary: "A hand-shaped legend for collectors who value heritage over noise.",
        power: "296 hp",
        speed: "174 mph",
        rarity: "36 crafted",
        featured: true
    },
    {
        id: "rolls-royce-boat-tail",
        name: "Rolls-Royce Boat Tail",
        brand: "Rolls-Royce",
        year: "2021",
        priceLabel: "From $3M",
        priceValue: 3,
        image: "assets/images/cars/rolls-royce-boat-tail.jpg",
        category: "coachbuilt",
        mood: "elegant",
        purpose: "arrival",
        badge: "Coachbuilt",
        summary: "Luxury sculpted like a yacht, made for arrivals that never need explanation.",
        power: "563 hp",
        speed: "155 mph",
        rarity: "Ultra limited",
        featured: true
    },
    {
        id: "bugatti-la-voiture-noire",
        name: "Bugatti La Voiture Noire",
        brand: "Bugatti",
        year: "2019",
        priceLabel: "From $4M",
        priceValue: 4,
        image: "assets/images/cars/bugatti-la-voiture-noire.jpg",
        category: "coachbuilt",
        mood: "dramatic",
        purpose: "arrival",
        badge: "One-off statement",
        summary: "Dark, theatrical, and impossibly exclusive, designed for quiet dominance.",
        power: "1479 hp",
        speed: "261 mph",
        rarity: "1 example",
        featured: true
    },
    {
        id: "pagani-zonda",
        name: "Pagani Zonda",
        brand: "Pagani",
        year: "1999",
        priceLabel: "From $5M",
        priceValue: 5,
        image: "assets/images/cars/pagani-zonda.jpg",
        category: "track",
        mood: "raw",
        purpose: "weekend",
        badge: "Mechanical theatre",
        summary: "Carbon, sound, and sharp edges for drivers who want every sensation amplified.",
        power: "678 hp",
        speed: "218 mph",
        rarity: "Low volume",
        featured: false
    },
    {
        id: "rolls-royce-sweptail",
        name: "Rolls-Royce Sweptail",
        brand: "Rolls-Royce",
        year: "2017",
        priceLabel: "From $6M",
        priceValue: 6,
        image: "assets/images/cars/rolls-royce-sweptail.jpg",
        category: "coachbuilt",
        mood: "elegant",
        purpose: "arrival",
        badge: "Tailor-made",
        summary: "A grand touring silhouette that treats craftsmanship as the real performance figure.",
        power: "453 hp",
        speed: "155 mph",
        rarity: "One commission",
        featured: false
    },
    {
        id: "bugatti-centodieci",
        name: "Bugatti Centodieci",
        brand: "Bugatti",
        year: "2022",
        priceLabel: "From $7M",
        priceValue: 7,
        image: "assets/images/cars/bugatti-centodieci.jpg",
        category: "track",
        mood: "dramatic",
        purpose: "showcase",
        badge: "Anniversary hypercar",
        summary: "A modern Bugatti tribute shaped for collectors who want power with pedigree.",
        power: "1578 hp",
        speed: "236 mph",
        rarity: "10 examples",
        featured: false
    },
    {
        id: "bugatti-divo",
        name: "Bugatti Divo",
        brand: "Bugatti",
        year: "2021",
        priceLabel: "From $8M",
        priceValue: 8,
        image: "assets/images/cars/bugatti-divo.jpg",
        category: "track",
        mood: "raw",
        purpose: "weekend",
        badge: "Corner carver",
        summary: "Sharper, rarer, and more aggressive for clients drawn to controlled violence.",
        power: "1479 hp",
        speed: "236 mph",
        rarity: "40 examples",
        featured: false
    },
    {
        id: "bugatti-chiron-super-sport",
        name: "Bugatti Chiron Super Sport",
        brand: "Bugatti",
        year: "2022",
        priceLabel: "From $9M",
        priceValue: 9,
        image: "assets/images/cars/bugatti-chiron-super-sport.jpg",
        category: "track",
        mood: "raw",
        purpose: "weekend",
        badge: "High-speed benchmark",
        summary: "Long-tail stability and relentless power for a buyer who wants the autobahn fantasy.",
        power: "1578 hp",
        speed: "273 mph",
        rarity: "Limited series",
        featured: true
    },
    {
        id: "lamborghini-sian",
        name: "Lamborghini Sian",
        brand: "Lamborghini",
        year: "2020",
        priceLabel: "From $10M",
        priceValue: 10,
        image: "assets/images/cars/lamborghini-sian.jpg",
        category: "future",
        mood: "futuristic",
        purpose: "arrival",
        badge: "Hybrid art piece",
        summary: "A concept-like shape wrapped around electrified drama and unmistakable attitude.",
        power: "819 hp",
        speed: "217 mph",
        rarity: "63 coupes",
        featured: false
    },
    {
        id: "pagani-huayra",
        name: "Pagani Huayra",
        brand: "Pagani",
        year: "2018",
        priceLabel: "From $20M",
        priceValue: 20,
        image: "assets/images/cars/pagani-huayra.jpg",
        category: "track",
        mood: "dramatic",
        purpose: "showcase",
        badge: "Carbon sculpture",
        summary: "A dramatic blend of aerospace detailing and operatic performance.",
        power: "720 hp",
        speed: "238 mph",
        rarity: "Selective production",
        featured: false
    },
    {
        id: "wmotors-lykan-hypersport",
        name: "W Motors Lykan Hypersport",
        brand: "W Motors",
        year: "2015",
        priceLabel: "From $30M",
        priceValue: 30,
        image: "assets/images/cars/wmotors-lykan-hypersport.jpg",
        category: "future",
        mood: "futuristic",
        purpose: "arrival",
        badge: "Sci-fi rarity",
        summary: "A cinematic hypercar built for those who want their collection to feel impossible.",
        power: "780 hp",
        speed: "245 mph",
        rarity: "7 examples",
        featured: false
    },
    {
        id: "bugatti-chiron",
        name: "Bugatti Chiron",
        brand: "Bugatti",
        year: "2021",
        priceLabel: "From $40M",
        priceValue: 40,
        image: "assets/images/cars/bugatti-chiron.jpg",
        category: "track",
        mood: "raw",
        purpose: "showcase",
        badge: "Hyper benchmark",
        summary: "The car that defines modern excess with impossible calm at absurd speed.",
        power: "1479 hp",
        speed: "261 mph",
        rarity: "Global icon",
        featured: false
    },
    {
        id: "gordon-murray-t50",
        name: "Gordon Murray T.50",
        brand: "Gordon Murray",
        year: "2022",
        priceLabel: "From $50M",
        priceValue: 50,
        image: "assets/images/cars/gordon-murray-t50.jpg",
        category: "iconic",
        mood: "raw",
        purpose: "weekend",
        badge: "Driver's masterpiece",
        summary: "Lightweight engineering and fan-assisted focus for the purist at the table.",
        power: "654 hp",
        speed: "226 mph",
        rarity: "100 road cars",
        featured: false
    },
    {
        id: "ferrari-pininfarina",
        name: "Ferrari Pininfarina",
        brand: "Ferrari",
        year: "2013",
        priceLabel: "From $60M",
        priceValue: 60,
        image: "assets/images/cars/ferrari-pininfarina.jpg",
        category: "coachbuilt",
        mood: "elegant",
        purpose: "showcase",
        badge: "Design tribute",
        summary: "A collector's design object where elegance matters more than headline numbers.",
        power: "570 hp",
        speed: "199 mph",
        rarity: "Bespoke spirit",
        featured: false
    },
    {
        id: "koenigsegg-jesko",
        name: "Koenigsegg Jesko",
        brand: "Koenigsegg",
        year: "2023",
        priceLabel: "From $70M",
        priceValue: 70,
        image: "assets/images/cars/koenigsegg-jesko.jpg",
        category: "future",
        mood: "futuristic",
        purpose: "weekend",
        badge: "Future velocity",
        summary: "Designed for the client who wants the next chapter before everyone else catches up.",
        power: "1600 hp",
        speed: "300+ mph",
        rarity: "Limited run",
        featured: false
    }
];

const storageKey = "charlok-saved-garage";
const savedSet = new Set(getSavedIds());
let activeFilter = "all";
let revealObserver;

function getSavedIds() {
    try {
        const raw = window.localStorage.getItem(storageKey);
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        return [];
    }
}

function persistSavedIds() {
    window.localStorage.setItem(storageKey, JSON.stringify([...savedSet]));
}

function getCarById(id) {
    return inventory.find((car) => car.id === id);
}

function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 2200);
}

function updateSavedCount() {
    document.querySelectorAll("[data-saved-count]").forEach((count) => {
        count.textContent = String(savedSet.size);
    });
}

function createCarCard(car) {
    const article = document.createElement("article");
    article.className = "car-card";
    article.dataset.reveal = "";
    article.innerHTML = `
        <div class="card-media">
            <img src="${car.image}" alt="${car.name}">
        </div>
        <div class="card-body">
            <div class="card-topline">
                <span class="eyebrow-pill">${car.badge}</span>
                <button class="save-button ${savedSet.has(car.id) ? "is-saved" : ""}" type="button" data-save-id="${car.id}">
                    ${savedSet.has(car.id) ? "Saved" : "Save"}
                </button>
            </div>
            <h3>${car.name}</h3>
            <p class="card-copy">${car.summary}</p>
            <dl class="spec-list">
                <div>
                    <dt>Year</dt>
                    <dd>${car.year}</dd>
                </div>
                <div>
                    <dt>Power</dt>
                    <dd>${car.power}</dd>
                </div>
                <div>
                    <dt>Speed</dt>
                    <dd>${car.speed}</dd>
                </div>
                <div>
                    <dt>Rarity</dt>
                    <dd>${car.rarity}</dd>
                </div>
            </dl>
            <div class="card-footer">
                <strong>${car.priceLabel}</strong>
                <a href="experience.html#curator-lab">Arrange access</a>
            </div>
        </div>
    `;
    return article;
}

function refreshReveals() {
    if (!revealObserver) {
        return;
    }

    document.querySelectorAll("[data-reveal]").forEach((element) => {
        revealObserver.observe(element);
    });
}

function renderHomeFeatured() {
    const container = document.querySelector("[data-home-featured]");
    if (!container) {
        return;
    }

    container.innerHTML = "";
    inventory.filter((car) => car.featured).slice(0, 4).forEach((car) => {
        container.appendChild(createCarCard(car));
    });
    refreshReveals();
}

function getFilteredCars() {
    const searchInput = document.querySelector("[data-search-input]");
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";

    return inventory.filter((car) => {
        const haystack = `${car.name} ${car.brand} ${car.badge}`.toLowerCase();
        const matchesFilter = activeFilter === "all" || car.category === activeFilter;
        const matchesSearch = !searchTerm || haystack.includes(searchTerm);
        return matchesFilter && matchesSearch;
    });
}

function renderCatalog() {
    const grid = document.querySelector("[data-catalog]");
    const count = document.querySelector("[data-results-count]");
    if (!grid || !count) {
        return;
    }

    const cars = getFilteredCars();
    grid.innerHTML = "";
    count.textContent = String(cars.length);

    if (!cars.length) {
        const empty = document.createElement("article");
        empty.className = "saved-empty";
        empty.textContent = "No cars match this filter yet. Try another mood, brand, or category.";
        grid.appendChild(empty);
        return;
    }

    cars.forEach((car) => {
        grid.appendChild(createCarCard(car));
    });
    refreshReveals();
}

function renderSavedList() {
    const container = document.querySelector("[data-saved-list]");
    if (!container) {
        return;
    }

    container.innerHTML = "";
    const savedCars = [...savedSet].map(getCarById).filter(Boolean);

    if (!savedCars.length) {
        container.innerHTML = '<div class="saved-empty">No saved cars yet. Use the Save button in the collection or featured cards to build your shortlist.</div>';
        return;
    }

    savedCars.forEach((car) => {
        const item = document.createElement("article");
        item.className = "saved-item";
        item.innerHTML = `
            <strong>${car.name}</strong>
            <span>${car.priceLabel} | ${car.badge}</span>
        `;
        container.appendChild(item);
    });
}

function toggleSaved(id) {
    if (savedSet.has(id)) {
        savedSet.delete(id);
        showToast("Removed from your Saved Garage.");
    } else {
        savedSet.add(id);
        showToast("Added to your Saved Garage.");
    }

    persistSavedIds();
    updateSavedCount();
    renderHomeFeatured();
    renderCatalog();
    renderSavedList();

    const recommendationButton = document.querySelector(`[data-curator-result] [data-save-id="${id}"]`);
    if (recommendationButton) {
        recommendationButton.textContent = savedSet.has(id) ? "Saved to garage" : "Save this car";
    }
}

function initializeSaveActions() {
    document.addEventListener("click", (event) => {
        const saveButton = event.target.closest("[data-save-id]");
        if (!saveButton) {
            return;
        }

        toggleSaved(saveButton.dataset.saveId);
    });

    const clearButton = document.querySelector("[data-clear-saved]");
    if (clearButton) {
        clearButton.addEventListener("click", () => {
            savedSet.clear();
            persistSavedIds();
            updateSavedCount();
            renderHomeFeatured();
            renderCatalog();
            renderSavedList();
            showToast("Saved Garage cleared.");
        });
    }
}

function initializeFilters() {
    const buttons = document.querySelectorAll("[data-filter-control]");
    if (!buttons.length) {
        return;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filterControl;
            buttons.forEach((item) => item.classList.remove("is-active"));
            button.classList.add("is-active");
            renderCatalog();
        });
    });

    const searchInput = document.querySelector("[data-search-input]");
    if (searchInput) {
        searchInput.addEventListener("input", renderCatalog);
    }
}

function chooseRecommendation({ mood, budget, purpose }) {
    return inventory
        .map((car) => {
            let score = 0;

            if (car.mood === mood) score += 3;
            if (car.purpose === purpose) score += 2;
            if (budget === "under-10" && car.priceValue <= 10) score += 2;
            if (budget === "10-30" && car.priceValue >= 10 && car.priceValue <= 30) score += 2;
            if (budget === "30-plus" && car.priceValue >= 30) score += 2;
            if (mood === "elegant" && car.category === "coachbuilt") score += 1;
            if (mood === "raw" && car.category === "track") score += 1;
            if (mood === "futuristic" && car.category === "future") score += 1;
            if (purpose === "showcase" && car.category === "iconic") score += 1;

            return { car, score };
        })
        .sort((left, right) => right.score - left.score)[0].car;
}

function renderRecommendation(car) {
    const result = document.querySelector("[data-curator-result]");
    if (!result) {
        return;
    }

    result.innerHTML = `
        <p class="eyebrow">Curator suggestion</p>
        <h3>${car.name}</h3>
        <p>${car.summary}</p>
        <img src="${car.image}" alt="${car.name}">
        <div class="result-meta">
            <div>
                <span>Price</span>
                <strong>${car.priceLabel}</strong>
            </div>
            <div>
                <span>Speed</span>
                <strong>${car.speed}</strong>
            </div>
            <div>
                <span>Why this works</span>
                <strong>${car.badge}</strong>
            </div>
        </div>
        <div class="hero-actions">
            <a class="button button-primary" href="collection.html">View collection</a>
            <button class="button button-secondary" type="button" data-save-id="${car.id}">
                ${savedSet.has(car.id) ? "Saved to garage" : "Save this car"}
            </button>
        </div>
    `;
}

function initializeCuratorLab() {
    const form = document.querySelector("[data-curator-form]");
    if (!form) {
        return;
    }

    renderRecommendation(chooseRecommendation({
        mood: form.elements.mood.value,
        budget: form.elements.budget.value,
        purpose: form.elements.purpose.value
    }));

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const car = chooseRecommendation({
            mood: form.elements.mood.value,
            budget: form.elements.budget.value,
            purpose: form.elements.purpose.value
        });
        renderRecommendation(car);
        showToast(`${car.name} has been selected by the Curator Lab.`);
    });
}

function initializeMenu() {
    const button = document.querySelector(".menu-toggle");
    if (!button) {
        return;
    }

    button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        document.body.classList.toggle("menu-open", !expanded);
    });

    document.querySelectorAll(".site-nav a, .nav-cta").forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("menu-open");
            button.setAttribute("aria-expanded", "false");
        });
    });
}

function initializeReveal() {
    if (!("IntersectionObserver" in window)) {
        document.querySelectorAll("[data-reveal]").forEach((element) => {
            element.classList.add("is-visible");
        });
        return;
    }

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    refreshReveals();
}

document.addEventListener("DOMContentLoaded", () => {
    updateSavedCount();
    renderHomeFeatured();
    renderCatalog();
    renderSavedList();
    initializeSaveActions();
    initializeFilters();
    initializeCuratorLab();
    initializeMenu();
    initializeReveal();
});
