import { ResponsiveChoroplethCanvas } from '@nivo/geo'
import mapdata from './mapdata.json'
import features from './features.json'
const Map = () => (
  <ResponsiveChoroplethCanvas
    data={mapdata}
    features={features.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="blues"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={false}
    fillColor="#eeeeee"
    borderWidth={0.5}
    borderColor="#152538"
  />
)
export default Map