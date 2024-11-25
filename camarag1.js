const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// Toggle the dropdown visibility
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function updateMarker() {
    var select = document.getElementById("locationSelect");
    var selectedValue = select.options[select.selectedIndex].value;
    console.log(selectedValue); // Handle the selected location
}

document.getElementById('goButton').onclick = function() {
    updateMarker();
};

function updateMarker() {
    const select = document.getElementById('locationSelect');
    const selectedValue = select.value;

    // Redirect based on the selected value
    switch(selectedValue) {
        case 'Camarag':
            window.location.href = 'camarag.html';
            break;
        case 'Phinzon Phase 1':
            window.location.href = 'phinzon_phase_1.html';
            break;
        case 'Phinzon Phase 2':
            window.location.href = 'phinzon_phase_2.html';
            break;
        case 'ISU Coop':
            window.location.href = 'isu_coop.html';
            break;
        case 'ISU Boarding':
            window.location.href = 'isu_boarding.html';
            break;
        case 'Velsaco':
            window.location.href = 'velsaco.html';
            break;
        default:
            alert('Please select a category to proceed.'); // Alert for empty selection
            break;
    }
}


