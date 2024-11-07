// TODO: Create a variable that selects the form element
var blogForm= document.querySelector('form')


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(event){
    event.preventDefault();

    var username= document.getElementById('username').value;
    var title= document.getElementById('title').value;
    var content= document.getElementById('content').value;

    if (!username||!title||!content) {
        document.getElementById('error').textContent= "Please complete the form.";
        return
    }

    var formData= {
        username:username,
        title: title,
        content: content,
    }
// localStorage.setItem("formData", JSON.stringify(formData));
storeLocalStorage(formData, "blogPosts");

redirectPage("./blog.html");
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

blogForm.addEventListener('submit',handleFormSubmission);

// function readLocalStorage(key='') {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : [];
// }

// Función para guardar datos en el almacenamiento local
// function storeLocalStorage(key, newData) {
//     const existingData = readLocalStorage(key);
//     existingData.push(newData);
//     localStorage.setItem(key, JSON.stringify(existingData));
// }