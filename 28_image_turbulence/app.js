const element = document.querySelector('#turbulence');
const timeline = new TimelineMax({paused: true});
timeline.to(
	element,
	10,
	{
		attr: {
			baseFrequency: '0 0',
		},
	},
	1
);
timeline.play();
