
// Task 3: Picture slideshow

// ---------------------------------------------------------------------------

// This script will rotate through a list of images every 3 seconds. The images
// are displayed in an image element with the ID 'intro-img'. The images are
// stored in an array of image URLs.

// ---------------------------------------------------------------------------

// This code can be completed with the following number of lines of code: 
//
// Lines of JavaScript code: 15 or less

// ---------------------------------------------------------------------------

// Your code begins here!

// Array of image URLs. Add some images to the assets folder.

// --- Your code here ---

// Index to keep track of the current image

// --- Your code here ---
//
// Note that initializing the index is suggested, but not required.
// You can solve the task without initializing the index, but it is a good
// practice to initialize it.

// Function to change the image

// --- Your code here ---

    // Indentations are implied to show that the code below is within the function.
    
    // Get the image element by its ID. If ID does not exists, create an ID for
    // the image element.
    
    // --- Your code here ---

    // Update the src attribute of the image element. Changing the src attribute
    // is done by setting the src property of the image element. Remember that
    // you can loop through the images with the index of the array. 
    
    // --- Your code here ---

    // Update the index to the next image
    
    // --- Your code here ---
    //
    // Provided that the index is initialized, you can increment the index by one
    // to move to the next image. If the index reaches the end of the array, you

// Set an interval to change the image every 3 seconds or so The setInterval
// method is used to call the changeImage function every 3 seconds if interval
// is set to 3000 milliseconds (3 seconds). You can change the interval to any
// value you like.

// --- Your code here ---

// Note: 
// 
// The setInterval is not used with dot notation, but as a standalone
// function. This is because the setInterval function is a built-in function in
// JavaScript. The function setInterval takes two arguments: the function to be
// executed and the interval in milliseconds.