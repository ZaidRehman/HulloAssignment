var createCircle = (svgNS) => {
  var myCircle = document.createElementNS(svgNS, "circle");
  myCircle.setAttributeNS(null, "id", "mycircle");
  myCircle.setAttributeNS(null, "cx", '50%');
  myCircle.setAttributeNS(null, "cy", '250');
  myCircle.setAttributeNS(null, "r", '50');
  myCircle.setAttributeNS(null, "fill", "black");
  myCircle.setAttributeNS(null, "stroke", "none");
  console.log("In circle")
  return myCircle;
}

var createRect = (svgNS,node) => {

  var g = document.createElementNS(svgNS, 'g')
  g.setAttribute('x', node.x);
  g.setAttribute('y', node.y);
  g.setAttribute('height', '50');
  g.setAttribute('width', '100');

  var rect = document.createElementNS(svgNS, 'rect');
  rect.setAttribute('x', node.x);
  rect.setAttribute('y', node.y);
  rect.setAttribute('height', '100');
  rect.setAttribute('width', '100');
  rect.setAttribute('fill', '#95B3D7');
  g.appendChild(rect)

  var text = document.createElementNS(svgNS, 'text')
  text.setAttribute('x', node.x);
  text.setAttribute('y', node.y);
  text.setAttribute('height', '50');
  text.setAttribute('width', '100');
  text.setAttribute('alignment-baseline','middle');
  text.setAttribute('text-anchor','middle');
  text.appendChild(document.createTextNode(node.text));
  g.appendChild(text)
  

  return g;
}

var createTree = (svg,svgNS,json) => {

  svg.appendChild(createRect(svgNS,{x:'50%',y:'0px',text:"bsxjs"}))
  svg.appendChild(createRect(svgNS,{x:'25%',y:'100px',text:"bsxjs"}))
  svg.appendChild(createRect(svgNS,{x:'75%',y:'100px',text:"bsxjs"}))
  return svg
}


var GraphView
GraphView = Polymer(<any>
  {
    is: 'graph-view',
    ready: () => {

      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute('height', '100%');
      svg.setAttribute('width', '100%');
      var svgNS = svg.namespaceURI;
      var data = {}
      
      var mainDiv = document.getElementById("svg-graph");
      Polymer.dom(mainDiv).appendChild(createTree(svg,svgNS,data));
    },

    properties:
    {
      prop: {
        type: String,
        value: 'Peter'
      }
    },

  });

