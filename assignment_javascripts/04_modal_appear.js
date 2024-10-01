
// Task 4: Modal Appear

// ---------------------------------------------------------------------------

// Your task is to make the modal appear when the user clicks on the "Buy Now"
// buttons. 

// The modal should display the title of the plan and the price of the plan. The
// title and price should be taken from the card that the "Buy Now" button
// belongs to. The modal should have a close button and a "Proceed to Buy"
// button. The close button should close the modal, and the "Proceed to Buy"
// button should do nothing for now.

// The modal should be created dynamically using JavaScript. You can use the
// Bootstrap modal component to create the modal. The modal should be appended
// to the body element. The modal should be removed from the DOM after it is
// hidden.

// You can just append the modal to the body of the document in the end
// (appendChild) and you are not required to add aria attributes to the modal
// elements (although that would be a good practice).

// This whole exercise is about creating a modal which is hidden in the
// JavaScript code, and hence you can relieve the HTML from having to accomodate
// the modal structure. In addition, the modal changes dynamically based on the
// plan that the user wants to buy.

// ---------------------------------------------------------------------------

// This code can be completed with the following number of lines of code: 
//
// Lines of JavaScript code: 30 or less

// ---------------------------------------------------------------------------

// Your code begins here!

// Domcontentloaded event is used to make sure that the JavaScript code is
// executed after the HTML content is loaded.
document.addEventListener('DOMContentLoaded', () => {

    // Function to create and show modal.
    //
    // The function takes the title and price of the plan as arguments and
    // creates a modal with the title and price. The modal is then appended to
    // the body element and shown using the Bootstrap modal component. The modal
    // is removed from the DOM after it is hidden.
    const showModal = (title, price) => {

        // Create modal elements Remember that to create a modal using
        // Bootstrap, you need to create the modal structure with the required
        // classes and attributes. The modal structure consists of a modal
        // dialog, modal content, modal header, modal title, modal close button,
        // modal body, and modal footer. 
        //
        // Hint: Create a div element for each part of the modal structure and
        // append them (appendChild) to each other to build the modal. Finally,
        // append the modal to the body element.

        // Create constants for each div element, header title, close button,
        // body, footer, and buttons.
        
        // --- Your code here ---
        
        // Note:
        //
        // Quite a substantial part of the code is implied in the description. The
        // description provides a clear outline of the modal structure and the
        // elements that need to be created. The code should follow the structure
        // provided in the description.

        // Append elements in a correct order using appendChild
        //
        // Hint: 
        //
        // Append the modal elements to each other in the correct order to
        // build the modal. Just have a look at other modals in the Bootstrap
        // documentation to see how the structure should look like.
        //
        // Example: modalHeader.appendChild(modalTitle);
        // 
        // What follows is a series of appendChild calls to build the modal
        
        // --- Your code here ---

        // Append modal to body of your HTML document
        // It does not matter where the modal is appended in the body, as long as
        // it is appended to the body element. The modal will be shown in the
        // center of the screen by default.
        
        // --- Your code here ---

        // Show modal
        // 
        // These lines of code are given to you to show the modal. The modal is
        // shown using the Bootstrap modal component. The modal is shown by
        // creating a new instance of the Bootstrap modal and calling the show
        // method on it.
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();

        // Remove modal from DOM after it is hidden
        //
        // This line of code is given to you to remove the modal from the DOM after
        // it is hidden. The modal is removed from the DOM by adding an event
        // listener to the modal that listens for the 'hidden.bs.modal' event.
        modal.addEventListener('hidden.bs.modal', () => {
            document.body.removeChild(modal);
        });
    };

    // At this point, the modal structure has been created and the showModal
    // function has been defined. The next step is to add event listeners to all
    // "Buy Now" buttons below each plan using a loop. The event listener should
    // consist of a click event that prevents the default behavior of the button
    // and calls the showModal function with the title and price of the plan as
    // arguments.
    //
    // Hint: Loop over the buttons and set the 'closest' method used with the
    // button to find the card element that contains the title and price of the
    // plan. The 'closest' method is used to find the closest ancestor element
    // that matches a given selector (using CSS selectors).
    //
    // Hint: Use the 'querySelector' method to find the title and price of the
    // plan in the card element selected. The 'querySelector' method is used to
    // find the first element that matches a given selector (using CSS
    // selectors).
    //
    // Hint: To show the modal, call the showModal function with the title and
    // price of the plan as arguments.
    //
    // Some code is already provided to you to get you started. The code below
    // loops over all "Buy Now" buttons and adds an event listener to each
    // button. The event listener should call the showModal function with the
    // title and price of the plan as arguments.
    const buyNowButtons = document.querySelectorAll('');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', (event) => {

            // Prevent the default behavior of the button
            event.preventDefault();
            
            // --- Your code here ---

        });
    });
});