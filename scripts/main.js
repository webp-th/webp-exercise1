let count = 0;
let images = new Array("images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg", "images/animal4.jpg", "images/animal5.jpg" )

function changeImage() {
    count++;
    document.getElementById("zoo").src = images[count%5]
}



