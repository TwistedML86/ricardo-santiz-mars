const currentDate = new Date();
const thisYear = currentDate.getFullYear();


const footer = document.createElement('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Ricardo Santiz-Mars ${thisYear}`;
footer.appendChild(copyright);
document.body.appendChild(footer);


const skills = ["HTML", "CSS", "GitHub", "VS Code"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}