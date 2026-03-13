const mySkills = [
    {
        name: "HTML",
        level: "90%", 
        color: "#E34F26"
    },
    {
        name: "CSS",
        level: "85%",
        color: "#1572B6"
    },
    {
        name: "JavaScript",
        level: "25%",
        color: "#F7DF1E"
    },
    {
        name: "Python",
        level: "20%",
        color: "#3776AB"
    }
];

const container = document.querySelector("#skills-container");

mySkills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill-item");
    
    skillDiv.innerHTML = `
        <div class="skill-info">
            <span>${skill.name}</span>
            <span>${skill.level}</span>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${skill.level}; background-color: ${skill.color}"></div>
        </div>
    `;
    container.appendChild(skillDiv);
});