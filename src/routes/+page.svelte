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

	const subSectionClass = 'w-[530px] max-w-[530px] mt-2 flex flex-col gap-3'
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
	<div class="flex gap-8 justify-end items-center text-[16px] mb-4">
		<button type="button" onclick={() => window.open(github, '_blank')}
			>GitHub</button
		>
		<button type="button" onclick={() => window.open(linkedin, '_blank')}
			>LinkedIn</button
		>
		<button
			class="bg-[#407bff] rounded-lg py-1.5 px-6 text-white"
			type="button"
			onclick={contactMe}
		>
			Contact me
		</button>
	</div>
	<div class="mb-6">
		<h1 class="text-[48px] -mb-6">Hello I am</h1>
		<div class="flex gap-8 -ml-4 -mr-7 mt-2">
			<div class="hidden md:block w-full">
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
			<div class="md:hidden flex flex-col gap-6 w-full">
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
		<h1 class="text-[48px] mt-2">React & TypeScript Developer</h1>
	</div>
	<hr class="my-4" />
	<div class="grid grid-cols-12 grid-rows-4 gap-4">
		<div class="col-span-4">
			<h1 class="text-[45px]">
				Currently working as a
				<span
					class="bg-[#407bff] rounded-lg px-2 text-white whitespace-nowrap"
				>
					front-end
				</span>
				developer at Mergado
			</h1>
		</div>
		<div class="col-span-4 col-start-5">
			<p>
				<u class="decoration-black decoration-1"
					>Got 2+ years of professional experience</u
				>
				maintaining a codebase that (mostly) survives my semicolon-free JS
				lifestyle.
			</p>
			<p>
				<u class="decoration-black decoration-1"
					>Prefer building web-based applications</u
				> that actually do things, rather than websites that just look pretty.
			</p>
			<p>
				Care about the quality of the code and the
				<u class="decoration-black decoration-1"
					>long-term health of the applications</u
				>, rather than just making something visually appealing.
			</p>
			<p>Do love a good looking website though.</p>
		</div>
		<div class="col-span-4 col-start-9">
			<p>
				Got a <u class="decoration-black decoration-1"
					>Master's degree</u
				>
				in
				<u class="decoration-black decoration-1"
					>Theory of Interactive Media</u
				> at Masaryk University in Brno, an arts-oriented program.
			</p>
			<p>
				Realized I'm little more comfortable with structure and logic
				than with open-ended creative expression. That realization
				pushed me toward software rather than design.
			</p>
			<p>
				And here I am now, doing mostly frontend, but slowly going for
				fullstack.
			</p>
		</div>
		<hr class="my-4" />
		<div class="col-span-4 row-start-2">
			<h1 class="text-[45px]">The stack I live in</h1>
		</div>
		<div class="col-span-4 col-start-5 row-start-2">
			<p>React</p>
			<p>Redux</p>
			<p>TypeScript</p>
			<p>Tailwind CSS</p>
			<p>Docker</p>
		</div>
		<div class="col-span-4 col-start-9 row-start-2"></div>
		<hr class="my-4" />
		<div class="col-span-4 row-start-3">
			<h1 class="text-[45px]">Side tools</h1>
		</div>
		<div class="col-span-4 col-start-5 row-start-3">
			<p>Svelte</p>
			<p>C++</p>
			<p>Golang</p>
		</div>
		<div class="col-span-4 col-start-9 row-start-3"></div>
		<div class="col-span-2 row-start-4">
			<p>Brno, Czech Republic</p>
			<p>{email}</p>
		</div>
		<div class="col-span-2 col-start-6 row-start-4">
			<p>© 2025 Miroslava Farkašová. All rights reserved.</p>
			<p>Design by Barbora Kunzová</p>
		</div>
		<div class="col-span-2 col-start-11 row-start-4">
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
