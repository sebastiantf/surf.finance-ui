// ==UserScript==
// @name         Surf Finance Wave Animation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds animation to the top of the footer
// @author       ct-636
// @match        https://surf.finance/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	function attachWidthResizer(canvas) {
		if (canvas == null) return;
		canvas.setAttribute(
			'width',
			`${document.documentElement.clientWidth * window.devicePixelRatio}px`
		);

		let isScheduled = false;
		function responsiveWidth(e) {
			if (!document.contains(canvas)) {
				window.removeEventListener('resize', responsiveWidth);
			} else if (!isScheduled) {
				setTimeout(() => {
					canvas.setAttribute(
						'width',
						`${
							document.documentElement.clientWidth * window.devicePixelRatio
						}px`
					);
					isScheduled = false;
				}, 200);
			}
			isScheduled = true;
		}
		window.addEventListener('resize', responsiveWidth);
	}

	// Draws waves using a trochoidal curve: the path of a point on the surface of a circle within a circle as it rolls along a line
	function plotWaves(ctx, step) {
		const width = ctx.canvas.width / 2,
			height = ctx.canvas.height,
			centralPart = 0.1,
			centralAreaWidth = centralPart * width,
			baseOuterRadius = 0.4 * height,
			lowFrequencyVariationAmplitude = 0.024 * height,
			highFrequencyVariationAmplitude = 0.016 * height,
			xOrigin = -20; // Keeps the garbage off screen
		ctx.fillStyle = 'rgb(23,98,154)';

		let coords = [],
			x = xOrigin,
			y = 0,
			angle = 0,
			angleQuant = 0.2, // Higher values require less cpu time but make the waves less smooth
			baseX = 0;

		ctx.beginPath();
		ctx.moveTo(xOrigin, 0);
		while (x < width) {
			let afterMidpointEaseIn = 2 * Math.max(0, (x - width / 2) / width),
				innerRadius = 0.4 * afterMidpointEaseIn + 0.4,
				xRadius = baseOuterRadius * (1 - 0.5 * afterMidpointEaseIn),
				prevBaseX = baseX,
				prevX = x,
				prevY = y;

			if (x > width - centralAreaWidth) {
				// Flatten the center
				let centerEasing =
					(1 - (x + 0.5 * centralAreaWidth) / width) / centralPart;
				innerRadius *= 1.4 * centerEasing + 0.3;
			}

			baseX = angle - Math.max(0, innerRadius) * Math.sin(angle + step);
			x += xRadius * (baseX - prevBaseX);

			y = baseOuterRadius * (1 - innerRadius * Math.cos(angle + step));
			// Add some variation to look more dynamic and watery
			y += lowFrequencyVariationAmplitude * Math.sin(0.4 * angle + step);
			y += highFrequencyVariationAmplitude * Math.sin(2.4 * angle + step);

			if (x > width) {
				// Calculate the intersection of the current line segment
				// and the center vertical
				let slope = (y - prevY) / (x - prevX);
				y = slope * (width - x) + y;
				x = width;
			}
			ctx.lineTo(x, y);
			coords.push([x, y]);

			angle += angleQuant;
		}

		// Mirror the path onto the right side
		ctx.save();
		ctx.translate(width * 2, 0);
		ctx.scale(-1, 1);
		for (let i = coords.length - 1; i >= 0; i--) {
			let x, y;
			[x, y] = coords[i];
			ctx.lineTo(x, y);
		}
		ctx.restore();

		// Complete the shape and fill it
		ctx.lineTo(width * 2, height);
		ctx.lineTo(xOrigin, height);
		ctx.closePath();
		ctx.fill();
	}

	function init(canvas) {
		function draw(timestamp) {
			if (canvas == null) return;
			if (start === undefined) start = timestamp;
			let elapsed = timestamp - start,
				step = -(elapsed / 1000),
				context = canvas.getContext('2d');

			context.clearRect(0, 0, context.canvas.width, context.canvas.height);
			plotWaves(context, step);
			window.requestAnimationFrame(draw);
		}
		let start;
		attachWidthResizer(canvas);
		window.requestAnimationFrame(draw);
	}

	let canvas = document.createElement('canvas');
	canvas.className = 'absPos';
	canvas.setAttribute('height', 50 * window.devicePixelRatio);

	// Quick and dirty setup
	let childListWatcher = new MutationObserver((changes, observer) => {
		let footer = document.querySelector('#footer');
		if (footer == null) return;
		let waveDiv = document.createElement('div');
		waveDiv.id = 'footerWaves';
		waveDiv.append(canvas);
		footer.append(waveDiv);
		observer.disconnect();

		init(canvas);
	});
	childListWatcher.observe(document.body, { childList: true, subtree: true });
})();
