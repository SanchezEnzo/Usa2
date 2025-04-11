import { Nav } from "./Nav.layout"

export function Header () {
	return (
		<header className='w-full h-22 flex items-center justify-center gap-x-[10dwh] border-b-2 border-b-ligth-foreground bg-ligth-background'>
			<div className='relative flex gap-x-2 items-center italic font-black text-ligth-primary '>
				<a href='/'>
					<span className='text-4xl select-none' translate='no'>
						Usa2
					</span>
					<span className='absolute -bottom-1 left-[10%] w-[80%] h-1.5 bg-ligth-primary rounded-full -rotate-4'></span>
				</a>
			</div>

			<Nav/>
		</header>
	)
}