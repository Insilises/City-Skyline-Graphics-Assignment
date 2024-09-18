//Use to build a vertical gradient where TRIANGLE_FAN is used to draw rectangles.
//Returns an array of vertices to use
function gradientVertical(minX, maxX, minY, maxY, numberOfColors) {
    //TODO: Write a for loop with gradient and an array with the gradient
    //Color palette so I don't have to manually do all of it. We're following a formula
    //at this point, so...

    /*
    Here, let's say that:
    minX = -1.0
    maxX = 1.0
    minY = -0.75
    maxY = 1.0
    centerofGradient = 0.0
    averagePieceSize = 0.25
    var vertices =
            [   -1.0, -0.75,
                -1.0, -0.5,
                0.0, -0.75,
                0.0, -0.5,
                1.0, -0.5,
                1.0, -0.75,
                0.0, -0.75

                -1.0, -0.5,
                -1.0, -0.25,
                0.0, -0.25, 
                1.0, -0.25,
                1.0, -0.5,
                -1.0, -0.5
            ];
            */
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

        //Creating a base array that we can push values onto later in the loop.
        var vertices = [
            /*
            minX, minY,
            minX, minY + averagePieceSize,
            centerOfGradientX, minY,

            //minX + (maxX/4), minY + averagePieceSize,
            //centerOfGradientX/2, minY + averagePieceSize, //This one is being changed; If something's broken, it's here
            centerOfGradientX, minY + averagePieceSize,
            maxX, minY + averagePieceSize,
            maxX, minY
            */

            centerOfGradientX, minY, //This is where the fan starts
            minX, minY,
            minX, minY + averagePieceSize,
            centerOfGradientX, minY + averagePieceSize,
            maxX, minY + averagePieceSize,
            maxX, minY

        
        ];

    return vertices
}