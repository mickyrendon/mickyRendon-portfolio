export const  downloadCV = () => {
    const downloadBtn = document.querySelector('.download')

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("class", "ml-4")
          svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
          svg.setAttribute("viewBox", "0 0 24 24")

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
          path.setAttribute('d', 'M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7')
          path.setAttribute('fill', 'none')
          path.setAttribute('stroke', 'var(--p-btn)')
          path.setAttribute('stroke-linecap', 'round')
          path.setAttribute('stroke-linejoin', 'round')
          path.setAttribute('stroke-width', '2')
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline")
          polyline.setAttribute('fill', 'none')
          polyline.setAttribute('points', '7.9 12.3 12 16.3 16.1 12.3')
          polyline.setAttribute('stroke', 'var(--p-btn')
          polyline.setAttribute('stroke-linecap', 'round')
          polyline.setAttribute('stroke-linejoin', 'round')
          polyline.setAttribute('stroke-width', '2')
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
          line.setAttribute('fill', 'none')
          line.setAttribute('stroke', 'var(--p-btn')
          line.setAttribute('stroke-linecap', 'round')
          line.setAttribute('stroke-linejoin', 'round')
          line.setAttribute('stroke-width', '2')
          line.setAttribute('x1', '12')
          line.setAttribute('x2', '12')
          line.setAttribute('y1', '2.7')
          line.setAttribute('y2', '14.2')

    downloadBtn.append(svg)
    svg.append(path)
    svg.append(polyline)
    svg.append(line)

    return downloadBtn
}
