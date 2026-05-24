// Sample local data. Replace image values with public cloud storage URLs later,
// such as Google Cloud Storage, Amazon S3, or Azure Blob Storage image links.
const organizations = [
  {
    name: "American Red Cross",
    category: "Disaster relief",
    description:
      "Provides emergency shelter, supplies, blood services, and support after disasters.",
    image:
      "https://storage.googleapis.com/humanitarian-aid-images-jaylyanna/photo-1582213782179-e0d53f98f2ca.avif",
    url: "https://www.redcross.org/"
  },
  {
    name: "World Central Kitchen",
    category: "Food Security",
    description:
      "Serves fresh meals to communities affected by conflict, climate events, and crisis.",
    image:
      "https://storage.googleapis.com/humanitarian-aid-images-jaylyanna/photo-1593113598332-cd288d649433.avif",
    url: "https://wck.org/"
  },
  {
    name: "UNHCR",
    category: "Refugee Support",
    description:
      "Protects and assists refugees, displaced families, and stateless people worldwide.",
    image:
      "https://storage.googleapis.com/humanitarian-aid-images-jaylyanna/photo-1488521787991-ed7bbaae773c.avif",
    url: "https://www.unhcr.org/"
  },
  {
    name: "Save the Children",
    category: "Children & Education",
    description:
      "Supports children through education, protection, health, and emergency response programs.",
    image:
      "https://storage.googleapis.com/humanitarian-aid-images-jaylyanna/photo-1497486751825-1233686d5d80.avif",
    url: "https://www.savethechildren.org/"
  },
  {
    name: "Doctors Without Borders",
    category: "Healthcare",
    description:
      "Delivers independent medical care in conflict zones, disasters, and underserved regions.",
    image:
      "https://storage.googleapis.com/humanitarian-aid-images-jaylyanna/photo-1584515933487-779824d29309.avif",
    url: "https://www.doctorswithoutborders.org/"
  },
  {
    name: "Feeding America",
    category: "Food Security",
    description:
      "Connects people with food banks and hunger-relief programs across the United States.",
    image:
      "https://storage.googleapis.com/humanitarian-aid-images-jaylyanna/photo-1609139003551-ee40f5f73ec0.avif",
    url: "https://www.feedingamerica.org/"
  },
  {
    name: "International Rescue Committee",
    category: "Refugee Support",
    description:
      "Helps people affected by humanitarian crises rebuild safety, health, and economic wellbeing.",
    image:
      "https://storage.googleapis.com/humanitarian-aid-images-jaylyanna/photo-1509099836639-18ba1795216d.avif",
    url: "https://www.rescue.org/"
  },
  {
    name: "UNICEF",
    category: "Children & Education",
    description:
      "Works for child health, education, nutrition, clean water, and emergency protection.",
    image:
      "https://storage.googleapis.com/humanitarian-aid-images-jaylyanna/photo-1503676260728-1c00da094a0b.avif",
    url: "https://www.unicef.org/"
  }
];

const directoryGrid = document.querySelector("#directoryGrid");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-button");

let activeCategory = "All";

function organizationMatchesSearch(organization, searchTerm) {
  const searchableText = [
    organization.name,
    organization.category,
    organization.description
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(searchTerm.toLowerCase());
}

function getFilteredOrganizations() {
  const searchTerm = searchInput.value.trim();

  return organizations.filter((organization) => {
    const matchesCategory =
      activeCategory === "All" || organization.category === activeCategory;
    const matchesSearch =
      searchTerm === "" || organizationMatchesSearch(organization, searchTerm);

    return matchesCategory && matchesSearch;
  });
}

function createOrganizationCard(organization) {
  return `
    <article class="organization-card">
      <img src="${organization.image}" alt="${organization.name} humanitarian work" />
      <div class="card-body">
        <span class="category">${organization.category}</span>
        <h3>${organization.name}</h3>
        <p>${organization.description}</p>
        <a class="donate-link" href="${organization.url}" target="_blank" rel="noopener noreferrer">
          Learn More / Donate
        </a>
      </div>
    </article>
  `;
}

function renderDirectory() {
  const filteredOrganizations = getFilteredOrganizations();

  resultCount.textContent = `${filteredOrganizations.length} organization${
    filteredOrganizations.length === 1 ? "" : "s"
  } shown`;

  if (filteredOrganizations.length === 0) {
    directoryGrid.innerHTML =
      '<p class="empty-state">No organizations match your search.</p>';
    return;
  }

  directoryGrid.innerHTML = filteredOrganizations
    .map(createOrganizationCard)
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    renderDirectory();
  });
});

searchInput.addEventListener("input", renderDirectory);

renderDirectory();
