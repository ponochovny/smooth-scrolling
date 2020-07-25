import React, { useRef, useEffect } from 'react';
import './App.scss';

import useWindowSize from './hooks/useWindowSize';

function App() {
	// Hook
	const size = useWindowSize();
	// REF
	const app = useRef();
	const scrollContainer = useRef();

	// Configs
	const skewConfigs = {
		ease: 0.125,
		current: 0,
		previous: 0,
		rounded: 0,
	};

	// Run scrollrender once page is loaded.
	useEffect(() => {
		// console.log(skewScrolling);
		requestAnimationFrame(() => {
			// console.log(skewScrolling);
			skewScrolling();
		});
		// skewScrolling();
	}, []);

	useEffect(() => {
		setBodyHeight();
	}, [size.height]);

	const setBodyHeight = () => {
		document.body.style.height = `${
			scrollContainer.current.getBoundingClientRect().height
		}px`;
	};

	const skewScrolling = () => {
		// console.log(window.screenY);
		skewConfigs.current = window.scrollY;
		skewConfigs.previous +=
			(skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
		skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

		// console.log(skewConfigs);

		// variables
		const difference = skewConfigs.current - skewConfigs.rounded;
		const acceleration = difference / size.width;
		const velocity = +acceleration;
		const skew = velocity * 10; // 7.5

		//
		scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;

		requestAnimationFrame(() => skewScrolling());
	};

	return (
		<div ref={app} className="App">
			<div ref={scrollContainer} className="scroll">
				<h2>
					Skew <span className="outline">Scrolling</span>
				</h2>
				<img src="https://picsum.photos/id/237/600/400" alt="" />
				<h2>
					Skew <span className="outline">Scrolling</span>
				</h2>
				<img src="https://picsum.photos/id/498/600/400" alt="" />
				<h2>
					Skew <span className="outline">Scrolling</span>
				</h2>
				<img src="https://picsum.photos/id/184/600/400" alt="" />
				<h2>
					Skew <span className="outline">Scrolling</span>
				</h2>
				<img src="https://picsum.photos/id/350/600/400" alt="" />
				<h2>
					Skew <span className="outline">Scrolling</span>
				</h2>
				<img src="https://picsum.photos/id/290/600/400" alt="" />
				<h2>
					Skew <span className="outline">Scrolling</span>
				</h2>
				<img src="https://picsum.photos/id/113/600/400" alt="" />
				<h2>
					Skew <span className="outline">Scrolling</span>
				</h2>
				<img src="https://picsum.photos/id/110/600/400" alt="" />
			</div>
		</div>
	);
}

export default App;
