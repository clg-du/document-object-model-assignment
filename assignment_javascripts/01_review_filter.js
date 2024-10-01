
// Task 1: Filter reviews

// ---------------------------------------------------------------------------

// This task is to filter reviews by the input value. When the user types in the
// input field, the reviews that contain the input value will be displayed, and
// the reviews that do not contain the input value will be hidden.

// Add the following code to the index.html file to add an input field:
//
// <input type="text" id="filterInput" class="form-control" placeholder="Search
// reviews">
//
// You are at liberty to style the input field as you like and put it in a
// suitable location on the page, preferably close to the reviews.

// ---------------------------------------------------------------------------

// This code can be completed with the following number of lines of code: 
//
// Lines of JavaScript code: 20 or less
 
// ---------------------------------------------------------------------------

// Your code begins here!

// Domcontentloaded event is used to make sure that the JavaScript code is
// executed after the HTML content is loaded.
document.addEventListener('DOMContentLoaded', function() {

    // Get the input field
    const filterInput = document.getElementById('filterInput');

    // Get the review list and subsequently the individual reviews
    
    // --- Your code here ---

    // Add an event listener to the input field to listen for the keyup event. A
    // keyup event occurs when a keyboard key is released, i.e., when the user
    // types in the input field it will trigger the event continuously.
    
    // --- Your code here ---

        // Indentations are implied to show that the code below is within the
        // keyup event listener.

        // Get the value of the input field and convert it to lowercase. The
        // 'value' property of the input field is used to get the value of the
        // input field.
      
        // --- Your code here ---

        // Loop through the reviews and check if the review text contains the
        // input value. 
        //
        // If it does, display the review, otherwise hide the review. 
        //
        /// Hint: The 'includes' method is used to check if the review text
        // contains the input value, which is constantly checked due to the
        // keyup event.
        
        // --- Your code here ---

});