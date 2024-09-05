
console.log('Script loaded');

document.addEventListener("DOMContentLoaded", function() {
    

    // FUNCTION FOR HIDING ALL THE SECTIONS
function hideAllSections() {
    document.querySelectorAll('.dayMainPage').forEach(function(section) {
        section.style.display = 'none';
    });
}

// FUNCTION FOR SHOWING A SPECIFIC FUNCTION
function showSection(sectionId) {
    
    hideAllSections(); // This hidesall sections before showing the one we want. That is why we call the function here
    document.getElementById(sectionId).style.display = 'flex';// This finds the html element with the matching id 'sectionId' and makes it visible
    
}

// Event listeners for all 
document.querySelector('.sun').addEventListener('click', function () {
    showSection('myDayContent');

});
document.querySelector('.important').addEventListener('click', function () {
    showSection('importantContent');

});
document.querySelector('.plan').addEventListener('click', function () {
    showSection('plannedContent');

});
document.querySelector('.assign').addEventListener('click', function () {
    showSection('assignedContent');
    


});
document.querySelector('.tasks').addEventListener('click', function () {
    console.log('Tasks clicked');
    showSection('taskContent');

});
// HIDING THE PLACEHOLDER
const searchInput = document.getElementById('searchInput');

    
    searchInput.addEventListener('focus', function() {
        searchInput.setAttribute('placeholder', 'search');
    });

    searchInput.addEventListener('blur', function() {
        searchInput.removeAttribute('placeholder');




    });


    // SIDE BAR FUNCTIONALITY
    const barIcon = document.querySelector('.bar i');    // Selects the sidebar toogle button
    const sideBar = document.querySelector('.sideBar');  // Selects the whole sidebar
    const mainContent = document.querySelectorAll('.dayMainPage'); // Select all main content sections

    barIcon.addEventListener('click', function() {
        sideBar.classList.toggle('collapsed');

        // Toggle the expanded class on all main content sections
        mainContent.forEach(function(content) {
            content.classList.toggle('expanded');
        });
    });


});





