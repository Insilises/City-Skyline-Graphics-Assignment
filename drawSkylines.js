/**Draws a background city skyline
 * 
 * @returns drawBackSkyline An array of vertices that create a skyline if 
 * used with TRIANGLE_FAN
 */
function drawBackSkyline() {
    //We're using gl.TRIANGLE_FAN again.
    var skylineVertices = [
        0.0, -1.0,
        -1.0, -1.0,
        -1.0, -0.3,
        -0.8, 0.0,
        -0.5, 0.1,
        0.0, -0.2,
        0.0, 0.3,
        0.1, 0.5,
        0.4, 0.3,
        0.4, -0.25,
        0.7, -0.25,
        1.0, -0.1,
        1.0, -1.0
    ];
    return skylineVertices;
}