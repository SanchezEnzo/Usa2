export enum NaveLinkEnum {
	home = '#',
	vender = '#vender',
	comprar = '#comprar',
	categorias = '#categorias',
	contacto = '#contacto',
	perfil = '#perfil',
}

export type NaveLinkTypes = `${NaveLinkEnum}`

export interface NavItemProps {
	to: NaveLinkTypes
	onClick: (item: NaveLinkTypes) => void
	linkSelected: NaveLinkTypes
	children: React.ReactNode
}

