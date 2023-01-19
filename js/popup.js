// Javascript array (projectInformation) made up of javascript objects.
const projectInformation = [
  {
    name: "Dermatology Clinic and Skincare Center",
    description1:
      "This capstone project focuses on a dermatological and skin care medical clinic. It is an attempt to implement a front-end `home` and `about` page of an already designed template.",
    description2:
      "Each page consists of different sections which enable a user to book an appointment and read about the organization's services, specialists, partners, and customer reviews.",
    featuredImage: "./images/dermhome5.png",
    technologies: ["HTML5", "CSS", "Javascript-ES6"],
    liveVersion: "https://favourezeugwa.github.io/Capstone_Project1/",
    linkToSource: "https://github.com/Favourezeugwa/Capstone_Project1",
  },
  {
    name: "Todo List",
    description1:
      " Todo List is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. It also allows you to edit notes and delete task that has been completed.",
    description2:
      "This is a simple web app that allows a user to add a list of tasks that needs to be completed. It is built using webpack and served by a webpack dev server. I call this an ultimate productivity app. ",
    featuredImage: "./images/todo-desktop1.png",
    technologies: ["HTML/CSS", "Webpack", "Javascript"],
    liveVersion: "https://favourezeugwa.github.io/TO-DO-LIST/dist/",
    linkToSource: "https://github.com/Favourezeugwa/TO-DO-LIST",
  },
  {
    name: "Crypto Metrics Webapp",
    description1:
      "This is a mobile web application used to check a list of crypto metrics. It is created using the coinstats API.",
    description2:
      "The webapp have several pages which includes the `Home page` with a list of items that could be filtered by some parameters; in the project, it's a list of metrics that can be filtered by the coin name and a `Details page` with more information about a selected coin.",
    featuredImage: "./images/DesktopHome1.png",
    technologies: ["React-hooks", "Redux", "Jest-library", "API"],
    liveVersion: "https://fave-crypto-metrics.netlify.app/",
    linkToSource: "https://github.com/Favourezeugwa/Crypto-Metrics-Webapp",
  },
  {
    name: "Math Magicians",
    description1:
      "This is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    description2:
      "Started off by using class-based components, then refactored the code using react-hooks (functional-based components). This was my first time of using React and I learned a lot while working on this project.",
    featuredImage: "./images/home11.png",
    technologies: ["React-hooks", "Redux", "Jest-library"],
    liveVersion: "https://favour-math-magicians.netlify.app/",
    linkToSource: "https://github.com/Favourezeugwa/math-magicians",
  },
  {
    name: "Leaderboard",
    description1:
      "The leaderboard website displays scores submitted by different players. It also allows you to submit your score.",
    description2:
      "All data is preserved in the external Leaderboard API service. The Leaderboard API is connected in order to implement the actions behind the `Refresh` and `Submit` buttons. In the last step, async & await is used to send and receive data from API.",
    featuredImage: "./images/leaderboard1.png",
    technologies: ["HTML/CSS", "JavaScript/ES6", "API", "Webpack"],
    liveVersion: "https://favourezeugwa.github.io/Leaderboard_/",
    linkToSource: "https://github.com/Favourezeugwa/Leaderboard_",
  },
  {
    name: "The-haven Bookstore",
    description1:
      "A website with two subpages `Books` and `Categories` that displays a list of books, adds a book and removes a selected book.",
    description2:
      "However, i implemented only the `Books` part. The `Categories` page is empty in this MVP but leades you to a different page.",
    featuredImage: "./images/haven.desktop2.png",
    technologies: ["React", "Redux", "API"],
    liveVersion: "https://the-haven-bookstore.netlify.app/",
    linkToSource: "https://github.com/Favourezeugwa/The-haven-bookstore",
  },
];
// Javascript array ends

// Looping through the array (projectInformation) For project containers/cards
for (let i = 0; i < projectInformation.length; i += 1) {
  const projectWrapper = document.createElement("div");
  projectWrapper.classList.add("project-wrapper");

  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";
  projectWrapper.appendChild(projectContainer);

  const projectContainerImage = document.createElement("img");
  projectContainerImage.src = projectInformation[i].featuredImage;
  projectContainerImage.className = "project-image";
  projectContainerImage.alt = "laptop image";
  projectContainer.appendChild(projectContainerImage);

  const projectInfo = document.createElement("div");
  if (i === 4) {
    projectInfo.classList.add("project-info");
  } else if (i % 2 === 0) {
    projectInfo.classList.add("project-info", "cont1");
  } else {
    projectInfo.classList.add("project-info");
  }

  projectContainer.appendChild(projectInfo);

  const projectName = document.createElement("p");
  projectName.className = "project-info-name";
  projectName.textContent = projectInformation[i].name;
  projectInfo.appendChild(projectName);

  const projectTechnologies = document.createElement("ul");
  projectTechnologies.className = "project-languages";
  projectInfo.appendChild(projectTechnologies);

  // list items referenced to the projectInformation array
  const [technologyA, technologyB, technologyC] =
    projectInformation[i].technologies;

  const technology1 = document.createElement("li");
  technology1.textContent = technologyA;
  projectTechnologies.appendChild(technology1);

  const technology2 = document.createElement("li");
  technology2.textContent = technologyB;
  projectTechnologies.appendChild(technology2);

  const technology3 = document.createElement("li");
  technology3.textContent = technologyC;
  projectTechnologies.appendChild(technology3);

  const seeThisProjectButton = document.createElement("button");
  seeThisProjectButton.classList.add(
    "btn",
    "button-with-arrow",
    "see-project-button"
  );
  seeThisProjectButton.type = "button";
  seeThisProjectButton.textContent = "See this project";

  const buttonIcon = document.createElement("img");
  buttonIcon.src = "./images/Union.png";
  buttonIcon.alt = "a forward icon";
  seeThisProjectButton.appendChild(buttonIcon);
  projectInfo.appendChild(seeThisProjectButton);

  document.querySelector("#project-wrapper").appendChild(projectWrapper);
}

function hideProjectInformationModal() {
  document.querySelector("#modalmenu-container").style.display = "none";
}

function showProjectInformationModal(i) {
  if (!!document.getElementById("modalmenu-container") === true) {
    document.getElementById("modalmenu-container").remove();
  }

  // Modal menu section of the portfolio (popup window)
  const projectInformationModalContainer = document.createElement("div");
  projectInformationModalContainer.id = "modalmenu-container";
  const projectModalHeader = document.createElement("div");
  projectModalHeader.id = "modal-header";

  const projectModalCloseButton = document.createElement("img");
  projectModalCloseButton.id = "modal-close";
  projectModalCloseButton.src = "images/cancel-union.svg";
  projectModalCloseButton.alt = "cancel icon";
  projectModalHeader.appendChild(projectModalCloseButton);

  const projectModalText = document.createElement("p");
  projectModalText.id = "modal-text";
  projectModalText.classList.add("project-info-name", "modal-head");
  projectModalText.textContent = projectInformation[i].name;
  projectModalHeader.appendChild(projectModalText);
  projectInformationModalContainer.appendChild(projectModalHeader);

  const projectModalDetails = document.createElement("div");
  projectModalDetails.id = "modal-details";

  const projectTechnologies = document.createElement("ul");
  projectTechnologies.classList.add("project-languages", "modal-lang");
  projectTechnologies.id = "modal-tech-list";

  const [technologyA, technologyB, technologyC] =
    projectInformation[i].technologies;
  const technology1 = document.createElement("li");
  technology1.textContent = technologyA;
  projectTechnologies.appendChild(technology1);

  const technology2 = document.createElement("li");
  technology2.textContent = technologyB;
  projectTechnologies.appendChild(technology2);

  const technology3 = document.createElement("li");
  technology3.textContent = technologyC;
  projectTechnologies.appendChild(technology3);
  projectModalDetails.appendChild(projectTechnologies);
  projectInformationModalContainer.appendChild(projectModalDetails);

  const projectModalImage = document.createElement("img");
  projectModalImage.src = projectInformation[i].featuredImage;
  projectModalImage.alt = "laptop Image";
  projectModalImage.className = "modal-image";
  projectInformationModalContainer.appendChild(projectModalImage);

  const projectModalDecsriptionContainer = document.createElement("div");
  projectModalDecsriptionContainer.id = "modal-description-container";

  const projectModalDescription1 = document.createElement("p");
  projectModalDescription1.className = "bio1";
  projectModalDescription1.textContent = projectInformation[i].description1;
  projectModalDecsriptionContainer.appendChild(projectModalDescription1);

  const projectModalDescription2 = document.createElement("p");
  projectModalDescription2.className = "bio1";
  projectModalDescription2.textContent = projectInformation[i].description2;
  projectModalDecsriptionContainer.appendChild(projectModalDescription2);
  projectInformationModalContainer.appendChild(
    projectModalDecsriptionContainer
  );

  const projectModalButtons = document.createElement("div");
  projectModalButtons.id = "modal-button-container";

  const modalbutton1 = document.createElement("button");
  modalbutton1.id = "see-Live-button";
  modalbutton1.classList.add("btn", "button-with-arrow", "modal-btn");
  modalbutton1.textContent = "See Live";

  const seeLiveLink = document.createElement("a");
  seeLiveLink.setAttribute("href", projectInformation[i].liveVersion);
  seeLiveLink.innerText = "";
  seeLiveLink.appendChild(modalbutton1);

  const modalbutton1Image = document.createElement("img");
  modalbutton1Image.className = "fwd-img";
  modalbutton1Image.src = "./images/ic_link.black.png";
  modalbutton1Image.alt = "a forward icon";
  modalbutton1.appendChild(modalbutton1Image);
  projectModalButtons.appendChild(seeLiveLink);

  const modalbutton2 = document.createElement("button");
  modalbutton2.id = "see-source-button";
  modalbutton2.classList.add("btn", "button-with-arrow", "modal-btn");
  modalbutton2.textContent = "See Source";

  const seeSourceLink = document.createElement("a");
  seeSourceLink.setAttribute("href", projectInformation[i].linkToSource);
  seeSourceLink.innerText = "";
  seeSourceLink.appendChild(modalbutton2);

  const modalbutton2Image = document.createElement("img");
  modalbutton2Image.className = "github-img";
  modalbutton2Image.src = "./images/ic_github_black.png";
  modalbutton2Image.alt = "a github icon";
  modalbutton2.appendChild(modalbutton2Image);
  projectModalButtons.appendChild(seeSourceLink);
  projectInformationModalContainer.appendChild(projectModalButtons);

  document.body.appendChild(projectInformationModalContainer);
  projectModalCloseButton.addEventListener(
    "click",
    hideProjectInformationModal
  );
}
const seeThisProjectButtons =
  document.getElementsByClassName("see-project-button");
for (let i = 0; i < seeThisProjectButtons.length; i += 1) {
  seeThisProjectButtons[i].addEventListener("click", () => {
    showProjectInformationModal(i);
  });
}
