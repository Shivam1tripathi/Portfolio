const Achievementsbutton=document.querySelector("#Achievements");
const Achievementsbody=document.querySelector(".Achievements");
const Skillsbutton=document.querySelector("#Skills");
const Skillsbody=document.querySelector(".Skills");

Achievementsbutton.addEventListener("click",achivementvisible);
Skills.addEventListener("click",skillvisible);
function achivementvisible(){
    Achievementsbody.style.visibility="visible";
    Skillsbutton.style.backgroundColor="white";
    Achievementsbutton.style.backgroundColor="rgb(99, 70, 202)";
    
    Skillsbody.style.visibility="hidden";
}
function skillvisible(){
    Skillsbody.style.visibility="visible";
    Achievementsbody.style.visibility="hidden";
    Skillsbutton.style.backgroundColor="rgb(99, 70, 202)";
    Achievementsbutton.style.backgroundColor="white";
}