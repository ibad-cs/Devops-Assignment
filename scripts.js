// Sample data for projects (replace with your actual project data)
const projects = [
    { name: "Phishing link detection through ML (FYP)", technology: "Python, Javascript" },
    { name: "Tour Booking website", technology: "NodeJS, MongoDB" },
    { name: "Car Rental System", technology: "C" },
    { name: "Bus Ticketing system", technology: "C++" },
    { name: "Review Dataset Sentiment Analysis Model", technology: "C++" },
    { name: "Hotel appointment management system", technology: "NodeJS, MongoDB, React" },
    { name: "Messaging server built on UDP", technology: "Python" },
];

function generateProjectList() {
    const projectsList = document.getElementById("projectsList");

    projectsList.innerHTML = "";

    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${project.name}</strong><br><span>${project.technology}</span>`;
        projectsList.appendChild(listItem);
    });
}

function filterProjects() {
    const filterValue = document.getElementById("filterInput").value.toUpperCase();
    const projectsList = document.getElementById("projectsList");
    const projectsItems = projectsList.getElementsByTagName("li");

    for (let i = 0; i < projectsItems.length; i++) {
        const projectName = projectsItems[i].getElementsByTagName("strong")[0];
        if (projectName.textContent.toUpperCase().indexOf(filterValue) > -1) {
            projectsItems[i].style.display = "";
        } else {
            projectsItems[i].style.display = "none";
        }
    }
}

window.onload = function () {
    generateProjectList();
    document.getElementById("filterInput").addEventListener("keyup", filterProjects);
}
