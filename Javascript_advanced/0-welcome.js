function welcome(firstName, lastName) {
    firstName = 'Ange';
    lastName = 'Umunyana';
    
    let fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert ("Welcome " + fullName + "!");
    }
    displayFullName();
}
welcome();