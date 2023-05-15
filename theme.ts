import {StudioTheme, buildLegacyTheme} from 'sanity';

const props = {
    '--my-white': '#fff',
    '--my-black': '#000000',
    '--undugu-brand-orange': '#ef7f1b',
    '--undugu-brand-blue': '#3a3086',
    '--my-yellow': '#0f2757',
    '--my-green': '#50C878',
    '--my-red': '#FF5733'
}
export const myTheme: StudioTheme =  buildLegacyTheme({
        // base theme colors
        '--black': props['--my-black'],
        '--white': props['--my-white'],
    
        '--gray': '#666',
        '--gray-base': '#666',
    
        '--component-bg': props['--my-black'],
        '--component-text-color': props['--my-white'],
    
        // brand
        '--brand-primary': props['--undugu-brand-orange'],
        
        // default button
        '--default-button-color': '#666',
        '--default-button-primary-color': props['--undugu-brand-orange'],
        '--default-button-success-color': props['--my-green'],
        '--default-button-warning-color': props['--my-yellow'],
        '--default-button-danger-color': props['--my-red'],
    
        // state
        '--state-info-color': props['--undugu-brand-blue'],
        '--state-success-color': props['--my-green'],
        '--state-warning-color': props['--undugu-brand-orange'],
        '--state-danger-color': props['--my-red'],
    
        // navbar
        '--main-navigation-color': props['--my-black'],
        '--main-navigation-color--inverted': props['--my-white'],
    
        '--focus-color': props['--undugu-brand-blue']
    })


