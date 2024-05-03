import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import '@fontsource/shippori-mincho/400.css'
import '@fontsource/shippori-mincho/500.css'
import '@fontsource/shippori-mincho/600.css'
import '@fontsource/shippori-mincho/700.css'
import '@fontsource/shippori-mincho/800.css'
import '@dannymichel/proxima-nova'
import '@fontsource-variable/work-sans'
import '@fontsource/sue-ellen-francisco'

const baseTheme = createTheme({
    palette: {
        primary: { main: '#FF6D6D' },
        secondary: { main: '#77D7D3' },
        info: { main: '#2E4049' },
    },
})

const theme = createTheme(responsiveFontSizes(baseTheme), {
    palette: {
        cremita: baseTheme.palette.augmentColor({
            color: {
                main: '#F1EEEC',
            },
            name: 'cremita',
        }),
        lightBlue: baseTheme.palette.augmentColor({
            color: {
                main: '#ECF1F0',
            },
            name: 'lightBlue',
        }),
        lightGray: baseTheme.palette.augmentColor({
            color: {
                main: '#F2F2F2',
            },
            name: 'lightGray',
        }),
        lightBlack: baseTheme.palette.augmentColor({
            color: {
                main: '#727272',
            },
            name: 'lightBlack',
        }),
        white: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: ['Source Sans 3', 'sans-serif'],
        h1: { fontFamily: ['Source Sans 3', 'sans-serif'] },
        h2: { fontFamily: 'sans-serif' },
        h3: { fontFamily: 'sans-serif' },
        h4: { fontFamily: 'sans-serif' },
        h5: { fontFamily: 'sans-serif' },
        h6: { fontFamily: 'sans-serif' },
        body1: { color: 'lightBlack', fontFamily: 'sans-serif' },
        button: { fontFamily: 'sans-serif', color: '#FFFFFF' },
        poster: {
            fontSize: 50,
            fontFamily: 'sans-serif',
        },
    },
})

export default theme

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        poster: true
    }
}
