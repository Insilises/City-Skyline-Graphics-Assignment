/**Draws a background city skyline
 * 
 * @returns drawBackSkyline An array of vertices that create a skyline if 
 * used with TRIANGLE_FAN
 */
function drawBackSkyline() {
    //We're using gl.TRIANGLE_STRIP again.

    var skylineVertices = [
        -1.0, -1.0,
        -1.0, -0.3,
        -0.95, -0.2,
        -0.95, -1.0
        -1.0, -1.0
        //End of first building


    ];
    return skylineVertices;
}

/**Returns the vertices to draw the base of a skyline in a 
 * TRIANGLE_STRIP when given a height
 * 
 * @param {*} maxY 
 * @returns skylineBaseVertices An array of vertices 
 * that draw the base of the skyline
 */
function drawSkylineBase(maxY) {
    //For drawing with a triangle strip
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
 * @param {*} minX 
 * @param {*} maxX 
 * @param {*} Y1 
 * @param {*} Y2 
 * @param {*} MinY 
 * @returns 
 */
function drawTiltedTower(minX, maxX, Y1, Y2, MinY) {
    var tiltedTower = [
        maxX, MinY,
        minX, MinY,
        minX, Y1,
        maxX, Y2
    ];
    return tiltedTower;
}