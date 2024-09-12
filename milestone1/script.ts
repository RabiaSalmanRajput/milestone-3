document.getElementById("resumeForm")?.addEventListener('submit', function(event){
    event.preventDefault();

    const pictureElement = document.getElementById("picture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;


    if (pictureElement && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const picture = pictureElement.value;
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
 
    //crerate resume output
    const resumeOutput = `
    <h1>Resume</h1>
  

    <h2>Personal Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone</strong> ${phone}</p>

<h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    } else {
        console.error('the resume output elements are missing')
    }
} else {
    console.log('one or more output elements are missing');
    
}
})
