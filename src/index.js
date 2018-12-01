import vis from 'vis'
import 'vis/dist/vis.css'

// create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, label: 'HTML', group: 0},
        {id: 2, label: 'CSS', group: 0},
        {id: 3, label: 'Javascript', group: 0},
        {id: 4, label: 'HTML SVG',group: 1},
        {id: 5, label: 'HTML Canvas',group: 1},
        {id: 6, label: 'AJAX',group: 1},
        {id: 7, label: 'Jquery',group: 1},
        {id: 8, label: 'Bootstrap',group: 1},
        {id: 9, label: 'React',group: 1},
        {id: 10, label: 'React Native',group: 1},
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 2, arrows:'middle'},
        {from: 2, to: 3, arrows:'middle'},
        {from: 3, to: 4},
        {from: 3, to: 5},
    ]);

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes : {
            shape : 'dot',
            size: 10,
        }
        // layout: {
        //     hierarchical: {
        //         direction: 'LR'
        //     }
        // }
        // layout: {randomSeed:seed.value}
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);

        
    network.on("afterDrawing", function (ctx) {
        const default_position = network.DOMtoCanvas({x:0, y:0})
        


        // renderLevelSkill()


        var nodeId = 1;
        var nodePosition = network.getPositions([nodeId]);
        const origin = {
            x : nodePosition[1].x,
            y : nodePosition[1].y
        }
        
        ctx.translate(origin.x, origin.y);
        ctx.rotate((Math.PI / 180) * 270);
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI * 2 * 0.5, false);
        ctx.strokeStyle = 'red';
        ctx.lineCap = 'square'; // butt, round or square
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.translate(-origin.x, -origin.y);

        ctx.translate(origin.x, origin.y);
        ctx.rotate((Math.PI / 180) * 180);
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI * 2 * 0.5, false);
        ctx.strokeStyle = 'blue';
        ctx.lineCap = 'square'; // butt, round or square
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.translate(-origin.x, -origin.y);

        ctx.translate(origin.x, origin.y);
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(0, 0, 20, 0, Math.PI * 2 , false);
        ctx.fill()
        ctx.translate(-origin.x, -origin.y);

        ctx.translate(origin.x, origin.y);
        ctx.rotate(270*Math.PI/180);
        ctx.fillStyle = "black";
        ctx.font = "12px Arial";
        ctx.fillText("75%",-10, -4);
        ctx.translate(-origin.x, -origin.y);


        // ctx.strokeStyle = '#294475';
        // ctx.lineWidth = 1;
        // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        // ctx.rect( default_position.x , default_position.y  ,10,10);
        // ctx.fill();
        // ctx.stroke();
      });

      var drawCircle = function(color, lineWidth, percent, ctx, x , y ) {
        const radius = 30

        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'square'; // butt, round or square
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    };



    //   jQuery(document).ready(function	(){

    //     var el;
    //     var options;
    //     var canvas;
    //     var span;
    //     var ctx;
    //     var radius;
    
    //     var createCanvasVariable = function(id){  // get canvas
    //         el = document.getElementById(id);
    //     };
    
    //     var createAllVariables = function(){
    //         options = {
    //             percent:  el.getAttribute('data-percent') || 25,
    //             size: el.getAttribute('data-size') || 165,
    //             lineWidth: el.getAttribute('data-line') || 15,
    //             rotate: el.getAttribute('data-rotate') || 0,
    //             color: el.getAttribute('data-color')
    //         };
    
    //         canvas = document.createElement('canvas');
    //         span = document.createElement('span');
    //         span.textContent = options.percent + '%';
    
    //         if (typeof(G_vmlCanvasManager) !== 'undefined') {
    //             G_vmlCanvasManager.initElement(canvas);
    //         }
    
    //         ctx = canvas.getContext('2d');
    //         canvas.width = canvas.height = options.size;
    
    //         el.appendChild(span);
    //         el.appendChild(canvas);
    
    //         ctx.translate(options.size / 2, options.size / 2); // change center
    //         ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
    
    //         radius = (options.size - options.lineWidth) / 2;
    //     };
    
    
    //     var drawCircle = function(color, lineWidth, percent) {
    //         percent = Math.min(Math.max(0, percent || 1), 1);
    //         ctx.beginPath();
    //         ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    //         ctx.strokeStyle = color;
    //         ctx.lineCap = 'square'; // butt, round or square
    //         ctx.lineWidth = lineWidth;
    //         ctx.stroke();
    //     };
    
    //     var drawNewGraph = function(id){
    //         el = document.getElementById(id);
    //         createAllVariables();
    //         drawCircle('#efefef', options.lineWidth, 100 / 100);
    //         drawCircle(options.color, options.lineWidth, options.percent / 100);
    
    
    //     };
    //     drawNewGraph('graph1');
    //     drawNewGraph('graph2');
    //     drawNewGraph('graph3');
    //     drawNewGraph('graph4');
    
    
    // });