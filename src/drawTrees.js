import { path } from 'ramda'
import tree from '../data/trees.json'

export default (svg, projection) => {
  const getTransform = feature => {
    const point = projection(path(['geometry', 'coordinates'], feature))
    return `translate(${point[0]},${point[1]})`
  }
  svg.selectAll('text.trees')
    .data(tree.features)
    .enter()
    .append('text')

    .attr('class', 'trees')
    .attr('transform', getTransform)
    .attr('fill', 'blue')
    .text('✿')
}