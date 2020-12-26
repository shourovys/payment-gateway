const initial = { x: '100vw', scale: 1.1, }
const whileHover = {
    backgroundColor: 'rgba(245, 245, 245, 0)',
    scale: .8,
    transition: { duration: .6, yoyo: Infinity }
}
export const imgVariant = (delay) => {
    return {
        initial: initial,
        animate: {
            x: 0,
            transition: { type: 'spring', stiffness: 100, damping: 10, delay: delay }
        },
        whileHover: whileHover
    }
}
export const imgVariant1 = {
    initial: initial,
    animate: {
        x: 0,
        transition: { type: 'spring', stiffness: 100, damping: 10, delay: 2 }
    },
    whileHover: whileHover
}
export const imgVariant2 = {
    initial: initial,
    animate: {
        x: 0,
        transition: { type: 'spring', stiffness: 100, damping: 10, delay: 3 }
    },
    whileHover: whileHover
}
export const imgVariant3 = {
    initial: initial,
    animate: {
        x: 0,
        transition: { type: 'spring', stiffness: 100, damping: 10, delay: 4 }
    },
    whileHover: whileHover
}


// ----------------------------------------------------------inputVariant start
const animate = {
    opacity: 1,
    y: 0,
    transition: { duration: .4, delay: .3 }
}

export const inputVariant = (y) => {
    return {
        initial: { opacity: 0, y: y },
        animate: animate
    }
}