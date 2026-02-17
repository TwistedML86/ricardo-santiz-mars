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


// Lesson 12


const messageForm = document.getElementsByName('leave_message')[0];

messageForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>wrote: ${usersMessage} </span>
    `;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});