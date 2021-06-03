export const theme = {
  fonts: {},
  name: 'Color System - LCH (Monotone)',
  breakpoints: ['16em', '32em', '48em', '64em', '80em', '96em', '112em'],
  gradients: {},
  borderStyles: [],
  borderWidths: ['1px', '2px'],
  description: '156 colors\n\n7,256 accessible color combos',
  colors: {
    gray: ['#000000', '#1a1a1a', '#2c2c2c', '#404040', '#555555', '#6b6b6b', '#828282', '#999999', '#b2b2b2', '#cbcbcb', '#e5e5e5', '#ffffff'],
    'slate-gray': ['#0e0e0f', '#1f2023', '#303137', '#42434d', '#555762', '#696b78', '#7e808e', '#9496a3', '#acadb8', '#c4c5cd', '#dddde2', '#f6f6f7'],
    blue: ['#11151b', '#192634', '#1f374f', '#264a6b', '#305d86', '#40719f', '#5885b4', '#749ac5', '#92b0d3', '#b2c6e0', '#d1dceb', '#f0f3f8'],
    indigo: ['#0f1016', '#1c202f', '#28304b', '#344269', '#425485', '#5467a0', '#6a7cb6', '#8392c7', '#9ea9d6', '#bac1e1', '#d6daed', '#f2f3f8'],
    violet: ['#130f15', '#261d2d', '#3a2b48', '#4f3963', '#65497f', '#7a5b98', '#9070ae', '#a587c0', '#baa0cf', '#cdbbdd', '#e1d6ea', '#f5f2f8'],
    magenta: ['#160e14', '#2e1a29', '#48253f', '#633057', '#7e3e6f', '#984e86', '#ae639c', '#c17daf', '#d198c2', '#dfb5d3', '#ecd3e4', '#f8f1f6'],
    red: ['#190e0d', '#341b1b', '#542626', '#743233', '#934041', '#b05152', '#c86766', '#da807d', '#e79b98', '#efb8b4', '#f6d5d2', '#fcf1f1'],
    orange: ['#140805', '#2f1813', '#4d251b', '#6e3221', '#8e4126', '#ac512b', '#c76232', '#dd763e', '#f4975f', '#fdb68a', '#fed5bc', '#fff4ed'],
    yellow: ['#181308', '#2d2411', '#433615', '#5b4919', '#735c1c', '#8a6f1f', '#ac8c26', '#d4af31', '#f5cc44', '#ffde70', '#ffebb0', '#fff9ee'],
    green: ['#0c120a', '#182415', '#20371c', '#294a23', '#355f2d', '#44743b', '#59894f', '#739e69', '#91b487', '#b0c9a8', '#d0decb', '#f0f4ee'],
    teal: ['#0d1311', '#192420', '#223730', '#2b4a40', '#375f52', '#477365', '#5c8879', '#759e90', '#92b3a7', '#b1c8c0', '#d0ded9', '#f0f4f2'],
    cyan: ['#0d1314', '#162527', '#1d383c', '#234c51', '#2d6067', '#3c757d', '#528a92', '#6e9fa7', '#8cb4ba', '#adc9cd', '#cfdfe1', '#eff4f5'],
    modes: {
      0: {
        background: '#f5f2f8', text: '#130f15', border: '#f5f2f8', primary: '#baa0cf', accent: '#7e3e6f', muted: '#3a2b48',
      },
      1: {
        background: '#160e14', text: '#f8f1f6', border: '#160e14', primary: '#f4975f', accent: '#b1c8c0', muted: '#d198c2',
      },
      2: {
        background: '#0c120a', text: '#f0f4ee', border: '#0c120a', primary: '#d4af31', accent: '#59894f', muted: '#d0decb',
      },
      3: {
        background: '#f0f4f2', text: '#0d1311', border: '#f0f4f2', primary: '#555555', accent: '#433615', muted: '#375f52',
      },
      default: {
        background: '#ffffff', text: '#000000', border: '#cbcbcb', primary: '#425485', accent: '#d6daed', muted: '#6b6b6b',
      },
      dark: {
        background: '#000000', text: '#ffffff', border: '#404040', primary: '#6a7cb6', accent: '#28304b', muted: '#828282',
      },
      'dim-light': {
        background: '#cbcbcb', text: '#2c2c2c', border: '#b2b2b2', primary: '#2c2c2c', accent: '#b2b2b2', muted: '#555555',
      },
      'dim-dark': {
        background: '#2c2c2c', text: '#cbcbcb', border: '#fff9ee', primary: '#b2b2b2', accent: '#555555', muted: '#b2b2b2',
      },
      blue: {
        background: '#192634', text: '#d1dceb', border: '#fff9ee', primary: '#f4975f', accent: '#9ea9d6', muted: '#749ac5',
      },
      'blue-alt': {
        background: '#f0f3f8', text: '#192634', border: '#d1dceb', primary: '#264a6b', accent: '#d1dceb', muted: '#1f374f',
      },
      indigo: {
        background: '#28304b', text: '#bac1e1', border: '#0c120a', primary: '#da807d', accent: '#f2f3f8', muted: '#9ea9d6',
      },
      'indigo-alt': {
        background: '#d6daed', text: '#28304b', border: '#f8f1f6', primary: '#344269', accent: '#bac1e1', muted: '#344269',
      },
    },
  },
  fontSizes: ['16px', '32px', '48px', '64px', '80px', '96px', '112px'],
  lineHeights: {},
  space: ['16px', '32px', '48px', '64px', '80px', '96px', '112px', '128px'],
  borderRadius: ['16px', '32px'],
  boxShadows: { 0: '0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15)', 1: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', 2: '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.10), 0 16px 16px rgba(0,0,0,0.05)' },
  text: {},
};
