/**Use to build a vertical gradient where TRIANGLE_FAN is used to draw rectangles.
 * Returns an array of vertices to use
 * 
 * @param {*} minX X value where the gradient should start
 * @param {*} maxX X value where the gradient should end
 * @param {*} minY Y value where the gradient should start
 * @param {*} maxY Y value where the gradient should end
 * @param {*} numberOfColors The number of colors the gradient will have
 * @returns {*} vertices The points the gradients should be drawn in via gl.TRIANGLE_FAN
 */
function verticalGradient(minX, maxX, minY, maxY, numberOfColors) {
    var YDiff;
    var XDiff;
    
    if (minY == 0)
        YDiff = maxY + minY;
    else
       YDiff = maxY - minY;
    if (minX == 0)
        XDiff = maxX + minX;
    else
    
    XDiff = maxX - minX;
    var centerOfGradientX = XDiff/2;
    var averagePieceSize = YDiff/numberOfColors;
    var topYVertex = minY + averagePieceSize;

    /*Creating a base array that we can push values onto later in the loop.
    I REALLY wanted to include this in the loop, but pushing only works if
    it pushes to an existing array that has something in it. */
    var vertices = [
        minX, minY, //bottom left
        maxX, minY, //bottom right
        maxX, topYVertex, //top right
        minX, topYVertex, //top left
    ];

    for (i = 0; i < numberOfColors; i++) {
        var bottomYVertex = minY + averagePieceSize * i;
        topYVertex = bottomYVertex + averagePieceSize;

        vertices.push(
            minX, bottomYVertex, //bottom left
            maxX, bottomYVertex, //bottom right
            maxX, topYVertex, //top right
            minX, topYVertex, //top left
        );
    }

    return vertices
}