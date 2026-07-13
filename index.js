const about = document.getElementById("Aboutme");
const skills = document.getElementById("Skills");
const contacts = document.getElementById("Contacts");

function showAbout(){
    about.style.display = "block";//show About Section
    skills.style.display = "none";//hide Skill Section
    contacts.style.display = "none";
}

function showSkills(){
    skills.style.display="block";
    about.style.display="none";
    contacts.style.display="none";
}

function showContacts(){
    contacts.style.display="block";
    about.style.display="none";
    skills.style.display="none";
}