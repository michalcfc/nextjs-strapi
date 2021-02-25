import { DefaultTheme } from 'styled-components';
import colors from "../../utilis/colors.styles"
import spacing from "../../utilis/spacing.styles"

export const darkTheme: DefaultTheme = {
    body: '#212332',
    text: '#ffcb6b',
    background: '#212332',
    boxShadow: 'rgba(118,118,118,0.1) 0px 0.2rem 0.6rem 0px',
    boxShadowColor: '4px 4px 20px 0 rgba(103, 58, 183, 0.43)',
    bacgrkoundMain: "212332",
    buttonColor: {
      info: 'blue',
      danger: 'red',
      warning: 'orange',
      success: "#2ecc71",
    },
    colors,
    spacing
}