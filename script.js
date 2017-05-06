$(document).ready(function(){
const submit = document.getElementById('submit_button');
submit.addEventListener('click',function(){
	const review = document.getElementById('input_review');
	const parragraph = document.createElement('p');
	parragraph.textContent = review.value;
	review.value = "";
	const div = document.getElementById('comments_display');
	const h3 = document.createElement('h3');
	h3.textContent = "05/06/2017";
	div.appendChild(h3);
	div.appendChild(parragraph);
});


});

