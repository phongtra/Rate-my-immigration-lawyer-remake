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
	div.appendChild(document.createElement('br'));
	const h4 = document.createElement('h4');
	h4.textContent = "Process: "
	div.appendChild(h4);
	const p2 = document.createElement('p');
	p2.textContent='Green Card Application';
	div.appendChild(p2);
	const h42 = document.createElement('h4');
	h42.textContent = 'Time:'
	div.appendChild(h42);
	const p3 = document.createElement('p');
	p3.textContent='2 years and 9 months';
	div.appendChild(p3);
	const h43 = document.createElement('h4');
	h43.textContent = 'Price';
	div.appendChild(h43);
	const p4 = document.createElement('p');
	p4.textContent='$ 2,000';
	div.appendChild(p4);


});


});
