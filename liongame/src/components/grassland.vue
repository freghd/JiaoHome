<template>
	<div>
		<nav>
	<ul>
		<li>
			<a data-item="0">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
					<path fill="none" stroke="#fff" stroke-width="6" stroke-miterlimit="10" d="M46.671,57.375c0,2.003-1.643,3.625-3.667,3.625
						H20.997c-2.026,0-3.668-1.622-3.668-3.625V6.625C17.329,4.624,18.971,3,20.997,3h22.007c2.024,0,3.667,1.624,3.667,3.625V57.375z"></path>
					<line fill="none" stroke="#fff" stroke-width="6" stroke-miterlimit="10" x1="20" y1="47" x2="44" y2="47"></line>
					<line fill="none" stroke="#fff" stroke-width="6" stroke-miterlimit="10" x1="20" y1="12" x2="44" y2="12"></line>
					<circle fill="#fff" cx="32" cy="54" r="3"></circle>
				</svg>
				<span>Phone</span>
			</a>
		</li>
		</ul>
		</nav>
	</div>
</template>

<script>
export default {
  name:'Main',
  data(){
	  return{
	
	  }
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: calc(16px + (20 - 16) * (100vw - 320px)/(980 - 320));
  --rotateTimes: 0;
}

body {
  background-color: #002;
  background-image: radial-gradient(circle at center, #045, #002);
  color: #fff;
  font: 1em "Open Sans", sans-serif;
  height: 100vh;
  line-height: 1.5;
}

nav, ul, li {
  transform-style: preserve-3d;
}

nav, li {
  position: absolute;
  top: 50%;
  left: 50%;
}

nav, li a {
  border-radius: 50%;
}

nav {
  width: 18em;
  height: 18em;
  transform: translate(-50%, -50%) rotateX(75deg);
}

ul, li a {
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
}

li {
  animation: idle 4s ease-in-out infinite;
  text-align: center;
  width: 5em;
  height: 5em;
  transform: translate(-50%, -50%);
}
li a {
  box-shadow: 0 0 0 0.1em #0cf inset, 0 0 1em #0cf inset;
  color: currentColor;
  display: inline-block;
  text-decoration: none;
  transition: transform 0.4s linear,  box-shadow 0.15s linear,  margin 0.1s linear,  width 0.1s linear,  height 0.1s linear;
}
li a span {
  transition: color 0.15s linear;
}
li a:before {
  background-color: #fff;
  border-radius: 50%;
  content: "";
  display: block;
  opacity: 0.5;
  position: absolute;
  top: 0.75em;
  left: 0.75em;
  width: 1em;
  height: 0.5em;
  transform: rotate(-45deg);
}
li a:focus, li a.current {
  box-shadow: 0 0 0 0.1em #ff0 inset, 0 0 1em #ff0 inset;
  outline: 0;
}
li a:focus span, li a.current span {
  color: #ff0;
}
li a:hover {
  margin: -5% 0 0 -5%;
  width: 110%;
  height: 110%;
}
li a:hover svg {
  width: 3em;
  height: 3em;
}

@media (prefers-reduced-motion) {
  li {
    animation: none;
  }
}
svg {
  display: block;
  margin: 1.25em auto 1.5em auto;
  transition: width 0.1s linear, height 0.1s linear;
  width: 2.5em;
  height: 2.5em;
}

/* Position bubbles */
li:nth-of-type(1) {
  animation-delay: 0s;
}
li:nth-of-type(1) a {
  transform: rotate(calc(0deg + var(--rotateTimes) * 51.4285714286deg)) translateY(9em) rotate(calc(0deg - var(--rotateTimes) * 51.4285714286deg)) rotateX(-75deg);
}

li:nth-of-type(2) {
  animation-delay: -0.5s;
}
li:nth-of-type(2) a {
  transform: rotate(calc(-51.4285714286deg + var(--rotateTimes) * 51.4285714286deg)) translateY(9em) rotate(calc(51.4285714286deg - var(--rotateTimes) * 51.4285714286deg)) rotateX(-75deg);
}

li:nth-of-type(3) {
  animation-delay: -1s;
}
li:nth-of-type(3) a {
  transform: rotate(calc(-102.8571428571deg + var(--rotateTimes) * 51.4285714286deg)) translateY(9em) rotate(calc(102.8571428571deg - var(--rotateTimes) * 51.4285714286deg)) rotateX(-75deg);
}

li:nth-of-type(4) {
  animation-delay: -1.5s;
}
li:nth-of-type(4) a {
  transform: rotate(calc(-154.2857142857deg + var(--rotateTimes) * 51.4285714286deg)) translateY(9em) rotate(calc(154.2857142857deg - var(--rotateTimes) * 51.4285714286deg)) rotateX(-75deg);
}

li:nth-of-type(5) {
  animation-delay: -2s;
}
li:nth-of-type(5) a {
  transform: rotate(calc(-205.7142857143deg + var(--rotateTimes) * 51.4285714286deg)) translateY(9em) rotate(calc(205.7142857143deg - var(--rotateTimes) * 51.4285714286deg)) rotateX(-75deg);
}

/* Animations */
.rise {
  animation: rise 1s ease-out;
}
.rise a {
  animation: fadeOut 1s ease-out;
}
.rise a.pop {
  animation: pop 1s linear;
}
.rise a.pop svg, .rise a.pop span {
  visibility: hidden;
}

@keyframes rise {
  from {
    transform: translateZ(0);
  }
  15% {
    transform: translateZ(-1em);
  }
  to {
    transform: translateZ(35em);
  }
}
@keyframes fadeOut {
  from, 15% {
    opacity: 1;
  }
  50%, to {
    opacity: 0;
  }
}
@keyframes pop {
  from {
    margin: -5% 0 0 -5%;
    width: 110%;
    height: 110%;
    opacity: 1;
  }
  10%, to {
    margin: -20% 0 0 -20%;
    width: 140%;
    height: 140%;
    opacity: 0;
  }
}
@keyframes idle {
  from, to {
    transform: translate(-50%, -48%);
  }
  25% {
    transform: translate(-52%, -50%);
  }
  50% {
    transform: translate(-50%, -52%);
  }
  75% {
    transform: translate(-48%, -50%);
  }
}
</style>
