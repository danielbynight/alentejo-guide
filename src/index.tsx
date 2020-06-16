import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles/reset.scss'
import JumboTitle from 'src/elements/JumboTitle'
import Body from 'src/elements/Body'
import Text from 'src/elements/Text'

const App: React.FunctionComponent = () => (
    <Body>
        <JumboTitle>Guia do Daniel para o Alentejo</JumboTitle>
        <Text>
            <p>Since people often ask me, this is my (always changing) guide to Porto.</p>
            <p>Uma vez que frequentemente me perguntam o que visitar em redor de Montemor-o-Novo, aqui está o meu guia.</p>
        </Text>
    </Body>
)

ReactDOM.render(<App />, document.getElementById('root'))
