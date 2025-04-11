import { NavItemProps } from "@/types/layout.types";

export function NavLink({ to, onClick, linkSelected, children }: NavItemProps) {
	return (
		<li className='relative cursor-pointer group' onClick={() => onClick(to)}>
			<a
				href={to}
				className={`relative pb-1 transition-colors text-gray-700
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:w-full after:transition-transform 
        duration-300 after:origin-left after:bg-ligth-primary hover:text-ligth-primary
        ${
					linkSelected === to
						? 'text-ligth-primary after:scale-x-100'
						: 'after:scale-x-0'
				}
      `}
			>
				<span className='text-lg'>{children}</span>
			</a>
		</li>
	)
}
