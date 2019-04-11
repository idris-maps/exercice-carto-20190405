import { path } from 'ramda'
import buildings from '../data/buildings.json'

export default (svg, pathCreator) => {
  const hosp = ['hospital']
  const uni = ['university']
  
  const color = feature => {
    const type = path(['properties', 'building'], feature)
    if (uni.includes(type)) {
      return 'yellow'
    }
    if (hosp.includes(type)) {
      return 'blue'
    }
   else{
return 'grey'
   } 
  }
  
  svg.selectAll('path.building')
    .data(buildings.features)
    .enter()
    .append('path')
      .attr('class', 'building')
      .attr('d', pathCreator)
      .attr('fill', 'none')
      .attr('stroke', color)

  
}