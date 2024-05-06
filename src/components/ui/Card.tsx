import React from 'react'
import eyesIcon from '../../assets/images/eyes-icon.svg'
import headIcon from '../../assets/images/head-icon.svg'
import handshakeIcon from '../../assets/images/handshake-icon.svg'
import xCloseIcon from '../../assets/images/x-close-icon.svg'

export enum IconType {
    EYES,
    HEAD,
    HANDSHAKE,
    CLOSE,
}

export const IconMap = {
    [IconType.EYES]: eyesIcon,
    [IconType.HEAD]: headIcon,
    [IconType.HANDSHAKE]: handshakeIcon,
    [IconType.CLOSE]: xCloseIcon,
}
export type CardProps = {
    icon: IconType
    title: string
    description: string
}

export function Card({ description, icon, title }: CardProps) {
    return (
        <div className="flex flex-col w-full rounded-[8px] shadow-md gap-[10px] h-fit md:h-[226px] bg-slate-100 py-5 px-8">
            <div className="flex gap-5 items-center">
                <img src={IconMap[icon]} alt={'Icon'} />
                <span className="text-neutral-800 text-[20px] font-semibold">
                    {title}
                </span>
            </div>
            <span className="text-base text-neutral-500 font-semibold ">
                {description}
            </span>
        </div>
    )
}
