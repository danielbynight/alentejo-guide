import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles/reset.scss'
import JumboTitle from 'src/elements/JumboTitle'
import Body from 'src/elements/Body'
import Text from 'src/elements/Text'
import Place from 'src/elements/Place'

const App: React.FunctionComponent = () => (
    <Body>
        <JumboTitle>Guia do Daniel para o Alentejo</JumboTitle>
        <Text>
            <p>
                Uma vez que frequentemente me perguntam o que visitar pela zona do Alentejo onde cresci, aqui está o
                meu guia.
            </p>
        </Text>
        <Place
            title="Cromeleque dos Almendres"
            description={<a href="https://pt.wikipedia.org/wiki/Cromeleque_dos_Almendres">Wikipedia</a>}
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23263.157770204125!2d-8.069844009477901!3d38.56211440372934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19edeec3bd9c1d%3A0x11346a0860a231ae!2sAlmendres%20Cromlech!5e0!3m2!1sen!2snl!4v1592342706843!5m2!1sen!2snl"
        />
        <Place
            title="Anta Grande do Zambujeiro"
            description={<a href="https://pt.wikipedia.org/wiki/Anta_Grande_do_Zambujeiro">Wikipedia</a>}
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8296989817436!2d-8.01519863212092!3d38.53943176610391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19f1da71bbc047%3A0x8ecb35bc1132364!2sGreat%20Dolmen%20of%20Zambujeiro!5e0!3m2!1sen!2snl!4v1592342983298!5m2!1sen!2snl"
        />
    </Body>
)

ReactDOM.render(<App />, document.getElementById('root'))
