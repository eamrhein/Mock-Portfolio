/* eslint-disable no-invalid-this */
export const createPieChart = (element, dataset) => {
  const width = d3.select(element).style('width').slice(0, -2);
  const height = d3.select(element).style('height').slice(0, -2) * 0.95;
  const radius = Math.min(width, height) / 2;

  const legendRectSize = 13;
  const legendSpacing = 10;

  const color = d3.scaleOrdinal(
      ['#7B1FA2', '#CD128A', '#FC476B', '#FF8452', '#FFC04E', '#F9F871']
  );

  const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');
  const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

  const pie = d3.pie()
      .value(function(d) {
        return d.shares;
      })
      .sort(null);

  const tooltip = d3.select(element)
      .append('div')
      .attr('class', 'tooltip');

  tooltip.append('div')
      .attr('class', 'symbol');

  tooltip.append('div')
      .attr('class', 'shares');

  tooltip.append('div')
      .attr('class', 'percent');

  dataset.forEach(function(d) {
    d.shares = +d.shares;
    d.enabled = true;
  });

  let path = svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d) {
        return color(d.data.sym);
      })
      .each(function(d) {
        this._current - d;
      });


  path.on('mouseover', function(d) {
    const total = d3.sum(dataset.map(function(d) {
      return (d.enabled) ? d.shares : 0;
    }));
    const percent = Math.round(1000 * d.data.shares / total) / 10;
    tooltip.select('.symbol').html(d.data.sym);
    tooltip.select('.shares').html(d.data.shares + ' shares');
    tooltip.select('.percent').html(percent + '%');
    tooltip.style('display', 'block');
  });

  path.on('mouseout', function() {
    tooltip.style('display', 'none');
  });

  path.on('mousemove', function(d) {
    tooltip.style('top', (d3.event.layerY + 10) + 'px')
        .style('left', (d3.event.layerX + 10) + 'px');
  });

  const legend = svg.selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function(d, i) {
        const height = legendRectSize + legendSpacing;
        const offset = height * color.domain().length / 2;
        const horz = 26 * legendRectSize;
        const vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
      });

  legend.append('rect')
      .attr('width', legendRectSize)
      .attr('height', legendRectSize)
      .style('fill', color)
      .style('stroke', color)
      .on('click', function(sym) {
        const rect = d3.select(this);
        let enabled = true;
        const totalEnabled = d3.sum(dataset.map(function(d) {
          return (d.enabled) ? 1 : 0;
        }));

        if (rect.attr('class') === 'disabled') {
          rect.attr('class', '');
        } else {
          if (totalEnabled < 2) return;
          rect.attr('class', 'disabled');
          enabled = false;
        }

        pie.value(function(d) {
          if (d.sym === sym) d.enabled = enabled;
          return (d.enabled) ? d.shares : 0;
        });

        path = path.data(pie(dataset));

        path.transition()
            .duration(750)
            .attrTween('d', function(d) {
              const interpolate = d3.interpolate(this._current, d);
              this._current = interpolate(0);
              return function(t) {
                return arc(interpolate(t));
              };
            });
      });

  legend.append('text')
      .attr('x', legendRectSize + legendSpacing)
      .attr('y', legendRectSize -2)
      .text(function(d) {
        return d;
      });
};
