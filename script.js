//generate 100 grids on the div canvas
for(var i = 0; i < 100; i++) {
	var grid_div = document.createElement('div');
	grid_div.className = 'grid';
	var canvas = document.getElementById('canvas');
	canvas.appendChild(grid_div);
}

//mouse over divs changes color
$('.grid').mouseover(function() {
	var color = getRandomColor();
	$(this).css('background-color', color);	
}).click(function(){
	var color = getRandomColor();
	$(this).css('background-color', color);	
});

//random color generator
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}