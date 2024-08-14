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
    showSection('taskContent');

});


});





   