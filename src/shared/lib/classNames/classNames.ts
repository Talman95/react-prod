type Mods = Record<string, boolean | string>

export const classNames = (className: string, mods: Mods  = {}, additional: string[] = []): string => {
    return [
        className,
        ...Object.entries(mods)
            .filter(([_, condition]) => Boolean(condition))
            .map(([cls]) => cls),
        ...additional.filter(Boolean),
    ].join(' ')
}
