const star = document.querySelector('#star');
const length = star.getTotalLength();

star.style.strokeDasharray = length;
star.style.strokeDashoffset = length;

window.addEventListener('scroll', () => {
	let scrollPercentage =
		(document.body.scrollTop + document.documentElement.scrollTop) /
		(document.documentElement.scrollHeight - document.documentElement.clientHeight);
	let draw = length * scrollPercentage;
	star.style.strokeDashoffset = length - draw;
});
