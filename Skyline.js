/**Returns the vertices to draw the base of a skyline in a 
 * triangle strip when given a height
 * 
 * @param {*} maxY Maximum height of our base; Everything above this shows
 * individuality between buildings
 * @returns skylineBaseVertices An array of vertices 
 * that draw the base of the skyline
 */
function returnVerticesSkylineBase(maxY) {
    var skylineBaseVertices = [
        -1.0, -1.0,
        -1.0, maxY,
        1.0, -1.0,
        1.0, maxY
    ];
    return skylineBaseVertices
}


/**Returns an array of vertices to a tower with a slanted roof
 * to be made with a triangle fan
 * 
 * @param {*} minX X value the tower should start at
 * @param {*} maxX X value the tower should end at
 * @param {*} Y1 Y value representing the tower's top left corner
 * @param {*} Y2 Y value representing the tower's top right corner
 * @param {*} MinY The Y value the skyline base ends and the individual
 * building starts
 * @returns tiltedTower A set of vertices that draws a tilted tower when
 * used with triangle fan
 */
function returnVerticesTiltedTower(minX, maxX, Y1, Y2, MinY) {
    var tiltedTower = [
        maxX, MinY,
        minX, MinY,
        minX, Y1,
        maxX, Y2
    ];
    return tiltedTower;
}


/**Returns an array of vertices for a building with a curved roof
 * using triangle fan.
 * 
 * @param {*} minX X value the tower should start at
 * @param {*} maxX X value the tower should end at
 * @param {*} minY The Y value the skyline base ends and the individual
 * building starts
 * @param {*} towerHeight The maximum Y value of the tower
 * @returns curvedTower A set of vertices that draws a tower with a
 * curved roof when used with triangle fan
 */
function returnVerticesCurvedTower(minX, maxX, minY, towerHeight) {
    /*Can't make this actually circular, but reading Flatland has given me an idea.
    Create a shape that looks circular by plotting many points that follow the equation 
    for graphing a circle*/

    var buildingWidth = Math.abs(Math.abs(maxX) - Math.abs(minX));
    var curveRadius = buildingWidth/2;
    var roofStartY = towerHeight - curveRadius;

    var curvedTower = [
        //Bottom two vertices; Fan starts with bottom left
        maxX, minY,
        minX, minY,
        minX, roofStartY
    ];

    /*For the curve use: r**2 = x**2 + y**2
    Therefore: y=sqrt(r**2 - x**2)
    (x−a)**2+(y−b)**2=r2
    (y-b)**2 = r**2 - (x-a)**2
    */
   var a = maxX - curveRadius;
   var b = roofStartY;
   var xIncrement = buildingWidth/30;

    for (i=1; i<=30; i++) {
        curvedTower.push(minX + (i * xIncrement),
            b + Math.sqrt((curveRadius**2) - (((minX + (i * xIncrement)) - (a))**2)));
    }

    curvedTower.push(maxX, roofStartY, maxX, minY); //Final vertex

    return curvedTower;
}

/**Returns an array of vertices for a building with a triangular, middle-pointed roof
 * using triangle fan.
 * 
 * @param {*} minX X value the tower should start at
 * @param {*} maxX X value the tower should end at
 * @param {*} minY The Y value the skyline base ends and the individual
 * building starts
 * @param {*} towerHeight The maximum Y value of the tower
 * @returns pointedTower A set of vertices that draws a tower with a pointed roof when
 * used with triangle fan
 */
function returnVerticesPointedTower(minX, maxX, minY, towerHeight) {
    var YDiff = towerHeight - minY;
    var XDiff = maxX - minX;
    var roofHeight = XDiff/2;
    var roofStartY = towerHeight - roofHeight;

    var pointedTower = [
        //Bottom two vertices; Fan starts with bottom left
        maxX, minY,
        minX, minY,
        minX, roofStartY,
        minX + (XDiff/2), towerHeight,//Top point
        maxX, roofStartY //Final vertex
    ];

    return pointedTower;
}