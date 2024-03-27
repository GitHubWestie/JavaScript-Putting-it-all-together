function sendMail(contactForm) {
    emailjs.send("service_ef80tkf","rosie", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }) 
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            consolelog("FAILED", error);
        });
        return false;
}