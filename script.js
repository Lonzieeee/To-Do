
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
// Function to handle the active state of sidebar options
function setActiveOption(element) {
    // Remove the 'active' class from all options
    document.querySelectorAll('.options div').forEach(function(option) {
        option.classList.remove('active');
    });
    // Add the 'active' class to the clicked element
    element.classList.add('active');
}

// Event listeners for all 
document.querySelector('.sun').addEventListener('click', function () {
    setActiveOption(this);
    showSection('myDayContent');

});
document.querySelector('.important').addEventListener('click', function () {
    setActiveOption(this);
    showSection('importantContent');

});
document.querySelector('.plan').addEventListener('click', function () {
    setActiveOption(this);
    showSection('plannedContent');

});
document.querySelector('.assign').addEventListener('click', function () {
    setActiveOption(this);
    showSection('assignedContent');
    


});
document.querySelector('.tasks').addEventListener('click', function () {
    
    console.log('Tasks clicked');
    setActiveOption(this);
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



    // SHOW/HIDE THE DROPDOWN MENU (ELLIPSES)
     document.getElementById('ellipsis').addEventListener('click', function(){
        const dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === ''){
            dropdownMenu.style.display = 'block';
        }else{
            dropdownMenu.style.display = 'none';
        }
     });


     function toggleAddButton() {
        const input = document.getElementById('taskInput');
        const addButton = document.getElementById('addButton');
        addButton.disabled = !input.value.trim(); // Enable button if input has text
    }
    
    function addTask() {
        const input = document.getElementById('taskInput');
        const taskText = input.value.trim();
        if (!taskText) return; // Do nothing if there's no text
    
        const taskList = document.getElementById('taskList');
        
        // Create task item
        const taskItem = document.createElement('div');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        
        input.value = ''; // Clear input
        toggleAddButton(); // Update button state
    }
    
    function deleteTask(button) {
        const taskItem = button.parentElement;
        taskItem.remove(); // Remove the task item
    }
    


});









