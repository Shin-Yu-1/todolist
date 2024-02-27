import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import AddTodo from '@/components/AddToto'
import List from '@/components/List'
import DefaultTheme from '@/styles/defaultTheme'
import GlobalStyle from '@/styles/GlobalStyle'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Reset />
      <GlobalStyle />
      <AddTodo />
      <List />
    </ThemeProvider>
  )
}

export default App
