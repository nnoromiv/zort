import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { JSX } from "react"

export interface IButtonType{
    buttonText: string
    color?: "primary" | "success" | "secondary" | "warning" | "danger" | "default" | undefined
    className?: string
}

export interface IInformationType {
    title: string
    icon?: boolean
    headline?: string
    description: string
}

export interface IFeatureTypes {
    reversed?: boolean
    image: string | StaticImport
    icon: JSX.Element,
    title: string
    description: string
}