//Use to build a vertical gradient where TRIANGLE_FAN is used to draw rectangles.
//Returns an array of vertices to use
function verticalGradient(minX, maxX, minY, maxY, numberOfColors) {
            if (minY < 0)
                var YDiff = maxY + minY;
            else
                var YDiff = maxY - minY;
            if (minX < 0)
                var XDiff = maxX + minX;
            else
                var XDiff = maxX - minX;

        var centerOfGradientX = XDiff/2;
        if (YDiff == 0)
            YDiff = maxY;
        var averagePieceSize = YDiff/numberOfColors;

        var topYVertex = minY + averagePieceSize;

        //Creating a base array that we can push values onto later in the loop.
        var vertices = [
            //This is where the fan starts
            minX, minY, //bottom left
            maxX, minY, //bottom right
            maxX, topYVertex, //top right
            minX, topYVertex, //top left
        ];

        for (i = 1; i < numberOfColors; i++) {
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