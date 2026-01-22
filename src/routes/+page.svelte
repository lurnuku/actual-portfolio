<script lang="ts">
	import { createSpotlightCursor } from '../utils/createSpotlightCursor.svelte.ts'
	const github = 'https://github.com/lurnuku'
	const linkedin = 'https://www.linkedin.com/in/farkamiroslava/'
	const email = 'farka.miroslava@gmail.com'
	const contactMe = () => {
		location.href = `mailto:${email}`
	}
	const spotlight1 = createSpotlightCursor(36)
	const spotlight2 = createSpotlightCursor(36)
	let coords = $state({ x: 0, y: 0 })
	let cursorSize = $state(10)
	let hideCursor = $state(false)
	let devToolsOpen = $state(false)
	$effect(() => {
		const threshold = 160
		const checkDevTools = () => {
			const widthThreshold =
				window.outerWidth - window.innerWidth > threshold
			const heightThreshold =
				window.outerHeight - window.innerHeight > threshold
			devToolsOpen = widthThreshold || heightThreshold
			if (devToolsOpen) {
				document.documentElement.classList.add('devtools-open')
			} else {
				document.documentElement.classList.remove('devtools-open')
			}
		}
		checkDevTools()
		window.addEventListener('resize', checkDevTools)
		return () => window.removeEventListener('resize', checkDevTools)
	})
</script>

<svelte:window
	onmousemove={(e) => {
		coords = { x: e.clientX, y: e.clientY }
		const target = e.target as HTMLElement
		hideCursor =
			spotlight1.containerRef?.contains(target) ||
			spotlight2.containerRef?.contains(target) ||
			false
	}}
	onmousedown={(e) => {
		cursorSize = 30
	}}
	onmouseup={(e) => {
		cursorSize = 10
	}}
/>
<svg
	class="w-full h-full"
	style="opacity: {hideCursor || devToolsOpen
		? 0
		: 1}; transition: opacity 0.2s;"
>
	<circle
		cx={coords.x}
		cy={coords.y}
		r={cursorSize}
		fill="#407bff"
		fill-opacity="1"
		style="transition: r 0.15s ease-out;"
	/>
</svg>
<div class="px-15 py-6 text-[18px] leading-tight">
	<div
		class="flex gap-6 sm:gap-8 flex-wrap sm:flex-nowrap justify-center sm:justify-end items-center text-[16px] mb-4"
	>
		<button type="button" onclick={() => window.open(github, '_blank')}>
			GitHub
		</button>
		<button type="button" onclick={() => window.open(linkedin, '_blank')}>
			LinkedIn
		</button>
		<button
			class="bg-[#407bff] rounded-lg py-1.5 px-6 text-white"
			type="button"
			onclick={contactMe}
		>
			Contact me
		</button>
	</div>
	<div class="mb-20 sm:mb-6 sm:mt-0 mt-20">
		<h1 class="text-[48px] sm:-mb-6 sm:text-start text-center">
			Hello I am
		</h1>
		<div class="flex gap-8 -ml-4 -mr-7 mt-2">
			<div class="hidden sm:block w-full">
				<div
					bind:this={spotlight1.containerRef}
					class="relative"
					onmousemove={spotlight1.handleMouseMove}
					onmouseenter={spotlight1.handleMouseEnter}
					onmouseleave={spotlight1.handleMouseLeave}
					role="img"
					aria-label="Full Name"
				>
					<img
						src="/src/lib/assets/images/full_name.svg"
						alt="Full Name"
						class="relative z-10"
					/>
					<img
						src="/src/lib/assets/images/full_name_green.svg"
						alt="Full Name Green"
						class="absolute top-0 left-0 z-20 transition-opacity duration-300"
						style="
							clip-path: circle({spotlight1.cursorSize}px at {spotlight1.mouseX}px {spotlight1.mouseY}px);
							opacity: {spotlight1.isHovering ? 1 : 0};
						"
					/>
				</div>
			</div>
			<div class="sm:hidden flex flex-col gap-6 w-full">
				<img
					src="/src/lib/assets/images/first_name.svg"
					alt="First Name"
				/>
				<img
					src="/src/lib/assets/images/last_name.svg"
					alt="Last Name"
				/>
			</div>
		</div>
		<h1 class="text-[48px] mt-20 sm:mt-2 sm:text-start text-center">
			React & TypeScript Developer
		</h1>
	</div>
	<section class="pb-8 border-t pt-20 sm:pt-8">
		<div class="grid grid-rows-12 sm:grid-rows-none sm:grid-cols-12 gap-20">
			<div class="row-span-4 sm:row-span-auto sm:col-span-4">
				<h1 class="text-[45px] sm:text-start text-center">
					Currently working as a
					<span
						class="bg-[#407bff] rounded-lg px-2 text-white whitespace-nowrap"
					>
						front-end
					</span>
					developer at Mergado
				</h1>
			</div>
			<div
				class="row-span-4 row-start-5 sm:row-span-auto sm:row-start-auto sm:col-span-4 sm:col-start-5 flex flex-col gap-4 sm:mt-0 -mt-10"
			>
				<p>
					<u class="decoration-black decoration-1">
						Got 2+ years of professional experience
					</u>
					maintaining a codebase that (mostly) survives my semicolon-free
					lifestyle.
				</p>
				<p>
					<u class="decoration-black decoration-1">
						Prefer building web-based applications.
					</u>
				</p>
				<p>
					Care about the quality of the code and the long-term health
					of the applications, but also making them visually
					appealing.
				</p>
				<p>
					Fun fact is that I also like writing documentation and I
					will refactor anything that bothers me.
				</p>
				<p>
					Slowly <u class="decoration-black decoration-1"
						>making the move to fullstack</u
					> to understand the complete picture.
				</p>
			</div>
			<div
				class="row-span-4 row-start-9 sm:row-span-auto sm:row-start-auto sm:col-span-4 sm:col-start-9 flex flex-col gap-4"
			>
				<p>
					Got a
					<u class="decoration-black decoration-1">Master's degree</u>
					in
					<u class="decoration-black decoration-1">
						Theory of Interactive Media
					</u>
					at Masaryk University in Brno, an arts-oriented program.
				</p>
				<p>
					Realized I'm little more comfortable with structure and
					logic than with open-ended creative expression. That
					realization <u class="decoration-black decoration-1"
						>pushed me toward software</u
					> rather than design.
				</p>
				<p>
					But I never stopped caring about the end result looking
					good.
				</p>
			</div>
		</div>
	</section>
	<section class="pb-8 border-t pt-20 sm:pt-8">
		<div class="grid grid-cols-1 sm:grid-cols-12 gap-20">
			<div class="sm:col-span-4">
				<h1 class="text-[45px] sm:text-start text-center">
					The stack I live in
				</h1>
			</div>
			<div
				class="sm:col-span-4 sm:col-start-5 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-x-8 sm:gap-y-2 sm:text-start text-center"
			>
				<p>React</p>
				<p>Redux</p>
				<p>TypeScript</p>
				<p>Tailwind CSS</p>
				<p>Docker</p>
			</div>
			<div class="sm:col-span-4 sm:col-start-9 flex flex-col gap-4"></div>
		</div>
	</section>
	<section class="pb-8 border-t pt-20 sm:pt-8">
		<div class="grid grid-cols-1 sm:grid-cols-12 gap-20">
			<div class="sm:col-span-4">
				<h1 class="text-[45px] sm:text-start text-center">
					Side tools
				</h1>
			</div>
			<div
				class="sm:col-span-4 sm:col-start-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-8 sm:gap-y-2 sm:text-start text-center"
			>
				<p>Svelte</p>
				<p>C++</p>
				<p>Golang</p>
			</div>
			<div class="sm:col-span-4 sm:col-start-9"></div>
		</div>
	</section>
	<div
		class="grid grid-cols-1 sm:grid-cols-12 gap-20 sm:gap-20 gap-y-16 mt-32 sm:mt-0"
	>
		<div
			class="sm:col-span-4 flex flex-col sm:flex-row gap-6 items-center sm:items-end justify-center sm:justify-start sm:text-start text-center"
		>
			<p>Brno, Czech Republic</p>
			<p>{email}</p>
		</div>
		<div
			class="sm:col-span-5 sm:col-start-5 flex flex-col sm:flex-row gap-6 items-center sm:items-end justify-center sm:text-start text-center"
		>
			<p>© 2025 Miroslava Farkašová. All rights reserved.</p>
			<p>Design by Barbora Kunzová</p>
		</div>
		<div
			class="sm:col-span-3 sm:col-start-10 flex gap-6 items-end justify-center sm:justify-end"
		>
			<div
				bind:this={spotlight2.containerRef}
				class="relative"
				onmousemove={spotlight2.handleMouseMove}
				onmouseenter={spotlight2.handleMouseEnter}
				onmouseleave={spotlight2.handleMouseLeave}
				role="img"
				aria-label="Dog"
			>
				<img
					src="/src/lib/assets/images/doggo.svg"
					alt="Blue dog"
					width="200"
				/>
				<img
					src="/src/lib/assets/images/doggo_green.svg"
					alt="Blue dog"
					width="200"
					class="absolute top-0 left-0 z-20 transition-opacity duration-300"
					style="
						clip-path: circle({spotlight2.cursorSize}px at {spotlight2.mouseX}px {spotlight2.mouseY}px);
						opacity: {spotlight2.isHovering ? 1 : 0};
					"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	svg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 9999;
	}
	::selection {
		background: #14ed99;
	}
</style>
