import * as React from 'react'
import PlaceTitle from 'src/elements/PlaceTitle'
import Text from 'src/elements/Text'

interface Props {
    title: string
    description: string
    mapUrl: string
}

const Place: React.FunctionComponent<Props> = ({ title, description, mapUrl }) => (
    <div>
        <PlaceTitle>{title}</PlaceTitle>
        <Text>{description}</Text>
        <iframe src={mapUrl} width="100%" height="450" frameBorder="0" allowFullScreen />
    </div>
)

export default Place
