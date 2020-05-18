document.write("<style>#Snow{position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999; background: rgba(125,137,95,0.1); pointer-events: none;}</style>");
var d= new Date();
var tag = d.getHours();
document.write("<canvas id='Snow' width='100%' height='100%'></canvas><script src='//cdn.jsdelivr.net/gh/DavidTai780/host-javascript@master/js/Snow/snow-src.js"+tag+"'></script>");
