<script lang="ts">
	const sectionClass = 'my-4 flex gap-[63px]'
	const subSectionClass = 'max-w-[530px] mt-4 flex flex-col gap-4'

	const github = 'https://github.com/lurnuku'
	const linkedin = 'https://www.linkedin.com/in/farkamiroslava/'
	const email = 'farka.miroslava@gmail.com'

	const contactMe = () => {
		location.href = `mailto:${email}`
	}

	const cursorSize = 36
	let mouseX = $state(0)
	let mouseY = $state(0)
	let isHovering = $state(false)
	let containerRef: HTMLDivElement

	const handleMouseMove = (e: MouseEvent) => {
		if (!containerRef) return
		const rect = containerRef.getBoundingClientRect()
		mouseX = e.clientX - rect.left
		mouseY = e.clientY - rect.top
	}

	const handleMouseEnter = () => {
		isHovering = true
	}

	const handleMouseLeave = () => {
		isHovering = false
	}
</script>

<div class="px-15 py-10 text-[21px]">
	<div class="flex gap-8 justify-end items-center text-[18px]">
		<button
			class="cursor-pointer"
			type="button"
			onclick={() => window.open(github, '_blank')}>GitHub</button
		>
		<button
			class="cursor-pointer"
			type="button"
			onclick={() => window.open(linkedin, '_blank')}>LinkedIn</button
		>
		<button
			class="bg-[#407bff] cursor-pointer rounded-lg py-0.5 px-6 text-white"
			type="button"
			onclick={contactMe}
		>
			Contact me
		</button>
	</div>

	<div class="mb-8">
		<h1 class="text-[51px] -mb-6">Hello I am</h1>
		<div class="flex gap-8 -ml-4 -mr-7">
			<div class="hidden md:block w-full">
				<div
					bind:this={containerRef}
					class="relative"
					onmousemove={handleMouseMove}
					onmouseenter={handleMouseEnter}
					onmouseleave={handleMouseLeave}
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
							clip-path: circle({cursorSize}px at {mouseX}px {mouseY}px);
							opacity: {isHovering ? 1 : 0};
						"
					/>
				</div>
			</div>
			<div class="md:hidden flex flex-col gap-8 w-full">
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

		<h1 class="text-[51px]">React & TypeScript Developer</h1>
	</div>

	<hr />

	<div class={`${sectionClass} mb-12`}>
		<div class="w-[530px]">
			<h1 class="text-[48px]">
				Currently working as a
				<span class="bg-[#407bff] rounded-lg px-2 text-white">
					front-end
				</span>
				developer at Mergado
			</h1>
		</div>
		<div class={subSectionClass}>
			<p>
				<u class="decoration-[#407bff] decoration-1"
					>Got 2+ years of professional experience</u
				>
				maintaining a codebase that (mostly) survives my semicolon-free JS
				lifestyle.
			</p>
			<p>
				<u class="decoration-[#407bff] decoration-1"
					>Prefer building web-based applications</u
				> that actually do things, rather than websites that just look pretty.
			</p>
			<p>
				Spend my days designing features, handling edge cases, and
				maintaining systems that are used daily by customers. I care
				about the quality of the code and the
				<u class="decoration-[#407bff] decoration-1"
					>long-term health of the applications</u
				>, rather than just making something visually appealing.
			</p>
			<p>Do love a good looking website though.</p>
		</div>
		<div class={subSectionClass}>
			<p>
				Got a <u class="decoration-[#407bff] decoration-1"
					>Master's degree</u
				>
				in
				<u class="decoration-[#407bff] decoration-1"
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
	</div>

	<hr />

	<div class={sectionClass}>
		<div class="w-[530px]">
			<h1 class="text-[48px]">The stack I live in</h1>
		</div>
		<div class={`flex items-center gap-8`}>
			<p>React</p>
			<p>Redux</p>
			<p>TypeScript</p>
			<p>Tailwind CSS</p>
			<p>Docker</p>
		</div>
	</div>

	<hr />

	<div class={sectionClass}>
		<div class="w-[530px]">
			<h1 class="text-[48px]">Side tools</h1>
		</div>
		<div class={`flex items-center gap-8`}>
			<p>Svelte</p>
			<p>C++</p>
			<p>Golang</p>
		</div>
	</div>

	<div class={`${sectionClass} items-end text-[18px] mt-26`}>
		<div class="flex w-[530px] gap-8">
			<p>Brno, Czech Republic</p>
			<p>{email}</p>
		</div>
		<div class="flex gap-8">
			<p>© 2025 Miroslava Farkašová. All rights reserved.</p>
			<p>Design by Barbora Kunzová</p>
		</div>
		<div class="ml-auto">
			<img
				src="/src/lib/assets/images/doggo.svg"
				alt="Blue dog"
				width="200"
			/>
		</div>
	</div>
</div>
