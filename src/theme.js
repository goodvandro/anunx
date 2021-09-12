import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    background: {
      default: 'rgb(242, 244, 245)',
      white: 'rgb(255, 255, 255)',
    }
  }
})

export default theme