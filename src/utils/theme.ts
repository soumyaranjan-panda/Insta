import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps) =>({
    body:{
      bg: mode("gray.100", "#000")(props),
      color:mode("gray.800", "whiteAlpha.900")(props)
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles })

export default theme