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
      <h1>Todo List</h1>
      <AddTodo />
      <List />
    </ThemeProvider>
  )
}

export default App
