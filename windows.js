/**Returns a 4 vertices array for creating a rectangular window 
 * with triangle fan
 * 
 * @param {*} minX X value that the leftmost edge is on
 * @param {*} maxX X value that the rightmost edge is on
 * @param {*} minY Y value that the bottom edge is on
 * @param {*} maxY Y value that the top edge is on
 * @returns window A four vertices array that creates a rectangular
 * window when used with triangle fan
 */
function getVerticesRectangleWindow(minX, maxX, minY, maxY) {
    var window = [
        minX, minY,
        minX, maxY,
        maxX, maxY,
        maxX, minY
    ];
    return window;
}

/**Returns the vertices to create a diamond shape to use as a window when
 * used with triangle fan
 * 
 * @param {*} minX X value that represents the left vertice
 * @param {*} maxX X value that represents the right vertice
 * @param {*} minY Y value that represents the bottom vertice
 * @param {*} maxY Y value that represents the top vertice
 * @returns diamondWindow A 4 vertice array which can be used to draw
 * diamond shapes
 */
function getVerticesDiamondWindow(minX, maxX, minY, maxY) {
    midpointY = minY + ((maxY - minY)/2);
    midpointX = minX + ((maxX - minX)/2);

    var diamondWindow = [
        midpointX, minY, //Bottom vertice, going clockwise
        minX, midpointY,
        midpointX, maxY,
        maxX, midpointY
    ];

    return diamondWindow;
}