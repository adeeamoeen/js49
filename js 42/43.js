//que no 1
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    document.getElementById("name-display").textContent = "Name: " + name;
    document.getElementById("email-display").textContent = "Email: " + email;
    document.getElementById("password-display").textContent = "Password: " + password;

    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
});

//que no 2
function toggleDetails() {
    var detailsDiv = document.getElementById("full-details");
    var readMoreLink = document.getElementById("read-more");

    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
        readMoreLink.textContent = "Read less";
    } else {
        detailsDiv.style.display = "none";
        readMoreLink.textContent = "Read more";
    }
}
//que no 3
var studentTable = document.getElementById("student-table");
        var editFormContainer = document.getElementById("edit-form-container");
        var editNameInput = document.getElementById("edit-name");
        var editAgeInput = document.getElementById("edit-age");
        var editGradeInput = document.getElementById("edit-grade");
        var editRowIndexInput = document.getElementById("edit-row-index");

        document.getElementById("details-form").addEventListener("submit", function(event) {
            event.preventDefault();

            var name = document.getElementById("name").value;
            var age = document.getElementById("age").value;
            var grade = document.getElementById("grade").value;

            var newRow = studentTable.insertRow(-1);
            newRow.insertCell(0).textContent = name;
            newRow.insertCell(1).textContent = age;
            newRow.insertCell(2).textContent = grade;
            newRow.insertCell(3).innerHTML = '<span class="delete-button" onclick="deleteRow(this)">Delete</span> | <span class="edit-button" onclick="editRow(this)">Edit</span>';

            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("grade").value = "";
        });

        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }

        function editRow(button) {
            var row = button.parentNode.parentNode;
            var name = row.cells[0].textContent;
            var age = row.cells[1].textContent;
            var grade = row.cells[2].textContent;

            editRowIndexInput.value = row.rowIndex;
            editNameInput.value = name;
            editAgeInput.value = age;
            editGradeInput.value = grade;

            editFormContainer.classList.remove("hidden-form");
        }

        document.getElementById("edit-form").addEventListener("submit", function(event) {
            event.preventDefault();

            var rowIndex = parseInt(editRowIndexInput.value);
            var row = studentTable.rows[rowIndex];
            row.cells[0].textContent = editNameInput.value;
            row.cells[1].textContent = editAgeInput.value;
            row.cells[2].textContent = editGradeInput.value;

            cancelEdit();
        });

        function cancelEdit() {
            editFormContainer.classList.add("hidden-form");
        }
//que no 4
var zoomParagraph = document.getElementById("zoom-paragraph");

        function zoomIn() {
            var currentSize = parseInt(window.getComputedStyle(zoomParagraph).fontSize);
            var newSize = currentSize + 10;
            zoomParagraph.style.fontSize = newSize + "px";
        }

        function zoomOut() {
            var currentSize = parseInt(window.getComputedStyle(zoomParagraph).fontSize);
            var newSize = currentSize - 10;
            zoomParagraph.style.fontSize = newSize + "px";
        }



// Array of image paths
var imagePaths = [
    "img/download.jpeg",
    "img/images.jpeg",
    "img/Saylani_logo.png",
  ];

  // Function to loop through the image paths and display images
  function displayImages() {
    var imageContainer = document.getElementById("image-container");
    var imagesHTML = "";

    for (var i = 0; i < imagePaths.length; i++) {
      imagesHTML += '<img src="' + imagePaths[i] + '" onclick="onImageClick(this)">';
    }

    imageContainer.innerHTML = imagesHTML;
  }

  // Function to open the modal and set the image source
  function onImageClick(image) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");

    modal.classList.remove("modal-close");
    modal.classList.add("modal-open");
    modalImage.src = image.src;
  }

  // Function to close the modal
  function onClosedImagModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("modal-open");
    modal.classList.add("modal-close");
  }

  // Call the function to display the images
  displayImages();