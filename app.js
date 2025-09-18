const sections = window.SECTIONS;
let currentSection = "elec";

function renderNav() {
  const navEl = document.getElementById("section-nav");
  navEl.innerHTML = "";
  Object.entries(sections).forEach(([key, value]) => {
    const btn = document.createElement("button");
    btn.className = "nav-btn" + (currentSection === key ? " active" : "");
    btn.innerText = value.title;
    btn.onclick = () => {
      currentSection = key;
      renderMain();
      renderNav();
    };
    navEl.appendChild(btn);
  });
}

function renderMain() {
  const data = sections[currentSection];
  const mainEl = document.getElementById("main-content");
  mainEl.innerHTML = "";

  // Title
  const h2 = document.createElement("h2");
  h2.className = "section-title";
  h2.innerText = data.title;
  mainEl.appendChild(h2);

  // Image
  const img = document.createElement("img");
  img.className = "section-img";
  img.src = data.img;
  img.alt = data.title;
  mainEl.appendChild(img);

  // Content
  const content = document.createElement("div");
  content.className = "section-content";
  content.innerText = data.content;
  mainEl.appendChild(content);

  // Videos (if any)
  if (data.videos) {
    const videosDiv = document.createElement("div");
    videosDiv.className = "section-videos";
    data.videos.forEach(v => {
      const a = document.createElement("a");
      a.href = v;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerText = v;
      videosDiv.appendChild(a);
    });
    mainEl.appendChild(videosDiv);
  }

  // Decorative image repeat
  const img2 = document.createElement("img");
  img2.className = "section-img";
  img2.src = data.img;
  img2.alt = "decorative";
  mainEl.appendChild(img2);
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderMain();
});