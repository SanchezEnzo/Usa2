import { useState } from "react"
import { NaveLinkTypes } from "../../../types/layout.types"
import { NavLink } from "./NavLink.layout"

export function Nav () {

	const [linkSelected, setLinkSelected] = useState<NaveLinkTypes>('#')

	const handlePseudoElement = (item: NaveLinkTypes) => {
		setLinkSelected(item)
	}

	return (
		<nav className='w-3/4'>
			<ul className='flex justify-around px-[10dvw] text-ligth-secondary font-semibold tracking-wider'>
				<NavLink
					to='#vender'
					onClick={handlePseudoElement}
					linkSelected={linkSelected}
				>
					Vender
				</NavLink>
				<NavLink
					to='#comprar'
					onClick={handlePseudoElement}
					linkSelected={linkSelected}
				>
					Comprar
				</NavLink>
				<NavLink
					to='#categorias'
					onClick={handlePseudoElement}
					linkSelected={linkSelected}
				>
					Categorias
				</NavLink>
				<NavLink
					to='#contacto'
					onClick={handlePseudoElement}
					linkSelected={linkSelected}
				>
					Contacto
				</NavLink>
				<NavLink
					to='#perfil'
					onClick={handlePseudoElement}
					linkSelected={linkSelected}
				>
					Perfil
				</NavLink>
			</ul>
		</nav>
	)
}