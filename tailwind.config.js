function withOpacity(variableName) {
    return ({opacityValue}) => {
        if (opacityValue != null) {
            return `rgba(var(${variableName}),${opacityValue})`
        }
        return `rgb(var(${variableName})`
    }
}

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                skin: {
                    base: withOpacity(`--color-bg-l1`),
                    card: withOpacity(`--color-bg-l2`),
                    btn: withOpacity(`--color-bg-l3`),
                    'btn-hover': withOpacity(`--color-bg-l4`),
                }
            }
        },
    },
    plugins: [],
}
