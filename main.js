canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var  current_x, current_y;


canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    colour = document.getElementById("colour").value;
    width = document.getElementById("width").value;
     radius=document.getElementById("radius").value;
    mouse_event = "mousedown";
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
    
        ctx.arc(current_x, current_y, radius, 0, 360);
        console.log(current_x, current_y);

        ctx.stroke();
    }
}
