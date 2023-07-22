const theme = {
    color: {
        primaryColor: '#ff385c',
        secondaryColor: '#00848A'
    },
    text: {
        primaryColor: '#ff385c',
        secondaryColor: '#00848A'
    },
    mixin: {
        boxShadow: `
            transition: box-shadow 0.2s ease;
            &:hover {
                box-shadow: 0 4px 4px rgba(0,0,0,0.18);
            }
        `
    }
}

export default theme