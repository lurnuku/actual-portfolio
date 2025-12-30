const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        colors: {
            primary: '#407bff',
            accent: '#14ed99',
        },
        fontFamily: {
            grotesk: ['Overused Grotesk', 'sans-serif'],
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '2px': '2px',
                '4px': '4px',
                '8px': '8px',
                '18px': '18px',
                '26px': '26px',
                '41px': '41px',
                '53px': '53px',
                '59px': '59px',
                '63px': '63px',
                '260px': '260px',
                '530px': '530px',
            },
            fontSize: {
                '21pt': '21pt',
                '48pt': '48pt',
                '51pt': '51pt',
                '48px': '48px',
                '0.75pt': '0.75pt',
                '2pt': '2pt',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    variants: {
        extend: {
            borderColor: ['focus-visible'],
            opacity: ['disabled'],
        }
    }
}