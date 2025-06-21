import { UUID } from "crypto"

export enum ElectronicTagEnum {
	NOTEBOOK = 'Notebook',
	CELULAR = 'Celular',
	COMPUTADORA = 'Computadora',
	TELEVISOR = 'Televisor',
	PERIFERICO = 'Periférico',
}

export enum ClothesTagEnum {
	REMERA = 'Remera',
	PANTALON = 'Pantalón',
	CAMPERA = 'Campera',
	ZAPATILLA = 'Zapatilla',
}

export enum FurnitureTagEnum {
	SILLA = 'Silla',
	MESA = 'Mesa',
	SILLON = 'Sillón',
	CAMA = 'Cama',
	ROPERO = 'Ropero',
	ESCRITORIO = 'Escritorio',
}

export enum VehicleTagEnum {
	AUTO = 'Auto', 
	CAMIONETA = 'Camioneta',
	MOTO = 'Moto',
	CAMION = 'Camión',
	BICICLETA = 'Bicicleta',
}

export enum CategoriesEnum {
	ELECTRONIC,
	CLOTH,
	FURNITURE,
	VEHICLE
}

export type ElectronicTagType = `${ElectronicTagEnum}`
export type ClothesTagType = `${ClothesTagEnum}`
export type FurnitureTagType = `${FurnitureTagEnum}`
export type VehicleTagType = `${VehicleTagEnum}`
export type SubCategoryType = ElectronicTagType | ClothesTagEnum | FurnitureTagType | VehicleTagEnum


export interface Product {
	title: string
	images: string[]
	price: number
	category: CategoriesEnum
	subCategory: SubCategoryType
	quantity: number
	description: string
	sold_count: number
	delivery_methods: string[]
	payment_methods: string[]
}

export interface ProductWithId extends Product {
	id: UUID
}