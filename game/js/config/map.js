const MAP_CONFIG = {
    tileSize: 16,
    width:378,
    height:270,
    sectionsWidth: 9,
    sectionsHeight: 9,
    blockWidth: 42,
    blockHeight: 30,
    blocks: [ 
            {
            x: 1,
            y: 1,
            block_tile_x:42,
            block_tile_y:30,
            tile_x:42,
            tile_y:30,
            width: 39,
            height: 30,
            top: 30,
            right: 81,
            bottom: 60,
            left: 42,
            center: {
                x: 61.5,
                y: 45
            },
            ground: "grass",
            offset: {
                n: 0,
                e: 3,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "Apple Street",
                s: "",
                w: "",
            }
        },
            {
            x: 1,
            y: 2,
            block_tile_x:42,
            block_tile_y:60,
            tile_x:42,
            tile_y:60,
            width: 39,
            height: 30,
            top: 60,
            right: 81,
            bottom: 90,
            left: 42,
            center: {
                x: 61.5,
                y: 75
            },
            ground: "grass",
            offset: {
                n: 0,
                e: 3,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "Apple Street",
                s: "",
                w: "",
            }
        },
            {
            x: 2,
            y: 1,
            block_tile_x:84,
            block_tile_y:30,
            tile_x:88,
            tile_y:34,
            width: 35,
            height: 23,
            top: 34,
            right: 123,
            bottom: 57,
            left: 88,
            center: {
                x: 105.5,
                y: 45.5
            },
            ground: "dirt",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Fourth Street",
                e: "Blackberry Street",
                s: "Third Street",
                w: "Apple Street",
            }
        },
            {
            x: 1,
            y: 5,
            block_tile_x:42,
            block_tile_y:150,
            tile_x:42,
            tile_y:154,
            width: 39,
            height: 26,
            top: 154,
            right: 81,
            bottom: 180,
            left: 42,
            center: {
                x: 61.5,
                y: 167
            },
            ground: "forest",
            offset: {
                n: 4,
                e: 3,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "Through Street",
                e: "Apple Street",
                s: "",
                w: "",
            }
        },
            {
            x: 6,
            y: 1,
            block_tile_x:252,
            block_tile_y:30,
            tile_x:252,
            tile_y:30,
            width: 42,
            height: 27,
            top: 30,
            right: 294,
            bottom: 57,
            left: 252,
            center: {
                x: 273,
                y: 43.5
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "Third Street",
                w: "",
            }
        },
            {
            x: 5,
            y: 1,
            block_tile_x:210,
            block_tile_y:30,
            tile_x:214,
            tile_y:30,
            width: 38,
            height: 27,
            top: 30,
            right: 252,
            bottom: 57,
            left: 214,
            center: {
                x: 233,
                y: 43.5
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "",
                e: "",
                s: "Third Street",
                w: "Midway Street",
            }
        },
            {
            x: 1,
            y: 6,
            block_tile_x:42,
            block_tile_y:180,
            tile_x:42,
            tile_y:180,
            width: 39,
            height: 30,
            top: 180,
            right: 81,
            bottom: 210,
            left: 42,
            center: {
                x: 61.5,
                y: 195
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 3,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "Apple Street",
                s: "",
                w: "",
            }
        },
            {
            x: 7,
            y: 1,
            block_tile_x:294,
            block_tile_y:30,
            tile_x:294,
            tile_y:30,
            width: 42,
            height: 30,
            top: 30,
            right: 336,
            bottom: 60,
            left: 294,
            center: {
                x: 315,
                y: 45
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 7,
            y: 7,
            block_tile_x:294,
            block_tile_y:210,
            tile_x:294,
            tile_y:214,
            width: 39,
            height: 23,
            top: 214,
            right: 333,
            bottom: 237,
            left: 294,
            center: {
                x: 313.5,
                y: 225.5
            },
            ground: "forest",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "Slope Street",
                e: "Fennel",
                s: "Rise Road",
                w: "",
            }
        },
            {
            x: 6,
            y: 7,
            block_tile_x:252,
            block_tile_y:210,
            tile_x:255,
            tile_y:214,
            width: 39,
            height: 23,
            top: 214,
            right: 294,
            bottom: 237,
            left: 255,
            center: {
                x: 274.5,
                y: 225.5
            },
            ground: "forest",
            offset: {
                n: 4,
                e: 0,
                s: 3,
                w: 3,
            },
            bounds: {
                n: "Slope Street",
                e: "",
                s: "Rise Road",
                w: "Daikon",
            }
        },
            {
            x: 7,
            y: 6,
            block_tile_x:294,
            block_tile_y:180,
            tile_x:294,
            tile_y:180,
            width: 39,
            height: 27,
            top: 180,
            right: 333,
            bottom: 207,
            left: 294,
            center: {
                x: 313.5,
                y: 193.5
            },
            ground: "dirt",
            offset: {
                n: 0,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "",
                e: "Fennel",
                s: "Slope Street",
                w: "",
            }
        },
            {
            x: 1,
            y: 0,
            block_tile_x:42,
            block_tile_y:0,
            tile_x:42,
            tile_y:0,
            width: 42,
            height: 30,
            top: 0,
            right: 84,
            bottom: 30,
            left: 42,
            center: {
                x: 63,
                y: 15
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 8,
            y: 0,
            block_tile_x:336,
            block_tile_y:0,
            tile_x:336,
            tile_y:0,
            width: 42,
            height: 30,
            top: 0,
            right: 378,
            bottom: 30,
            left: 336,
            center: {
                x: 357,
                y: 15
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 7,
            y: 0,
            block_tile_x:294,
            block_tile_y:0,
            tile_x:294,
            tile_y:0,
            width: 42,
            height: 30,
            top: 0,
            right: 336,
            bottom: 30,
            left: 294,
            center: {
                x: 315,
                y: 15
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 8,
            y: 1,
            block_tile_x:336,
            block_tile_y:30,
            tile_x:336,
            tile_y:30,
            width: 42,
            height: 30,
            top: 30,
            right: 378,
            bottom: 60,
            left: 336,
            center: {
                x: 357,
                y: 45
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 8,
            y: 2,
            block_tile_x:336,
            block_tile_y:60,
            tile_x:336,
            tile_y:60,
            width: 42,
            height: 30,
            top: 60,
            right: 378,
            bottom: 90,
            left: 336,
            center: {
                x: 357,
                y: 75
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 6,
            y: 0,
            block_tile_x:252,
            block_tile_y:0,
            tile_x:252,
            tile_y:0,
            width: 42,
            height: 30,
            top: 0,
            right: 294,
            bottom: 30,
            left: 252,
            center: {
                x: 273,
                y: 15
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 8,
            y: 8,
            block_tile_x:336,
            block_tile_y:240,
            tile_x:336,
            tile_y:240,
            width: 42,
            height: 30,
            top: 240,
            right: 378,
            bottom: 270,
            left: 336,
            center: {
                x: 357,
                y: 255
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 8,
            y: 7,
            block_tile_x:336,
            block_tile_y:210,
            tile_x:340,
            tile_y:210,
            width: 38,
            height: 30,
            top: 210,
            right: 378,
            bottom: 240,
            left: 340,
            center: {
                x: 359,
                y: 225
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "Fennel",
            }
        },
            {
            x: 7,
            y: 8,
            block_tile_x:294,
            block_tile_y:240,
            tile_x:294,
            tile_y:244,
            width: 42,
            height: 26,
            top: 244,
            right: 336,
            bottom: 270,
            left: 294,
            center: {
                x: 315,
                y: 257
            },
            ground: "forest",
            offset: {
                n: 4,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "Rise Road",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 1,
            y: 8,
            block_tile_x:42,
            block_tile_y:240,
            tile_x:42,
            tile_y:240,
            width: 42,
            height: 30,
            top: 240,
            right: 84,
            bottom: 270,
            left: 42,
            center: {
                x: 63,
                y: 255
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 2,
            y: 8,
            block_tile_x:84,
            block_tile_y:240,
            tile_x:84,
            tile_y:240,
            width: 42,
            height: 30,
            top: 240,
            right: 126,
            bottom: 270,
            left: 84,
            center: {
                x: 105,
                y: 255
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 6,
            y: 8,
            block_tile_x:252,
            block_tile_y:240,
            tile_x:252,
            tile_y:244,
            width: 42,
            height: 26,
            top: 244,
            right: 294,
            bottom: 270,
            left: 252,
            center: {
                x: 273,
                y: 257
            },
            ground: "forest",
            offset: {
                n: 4,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "Rise Road",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 0,
            y: 8,
            block_tile_x:0,
            block_tile_y:240,
            tile_x:0,
            tile_y:240,
            width: 42,
            height: 30,
            top: 240,
            right: 42,
            bottom: 270,
            left: 0,
            center: {
                x: 21,
                y: 255
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 0,
            y: 7,
            block_tile_x:0,
            block_tile_y:210,
            tile_x:0,
            tile_y:210,
            width: 42,
            height: 30,
            top: 210,
            right: 42,
            bottom: 240,
            left: 0,
            center: {
                x: 21,
                y: 225
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 0,
            y: 6,
            block_tile_x:0,
            block_tile_y:180,
            tile_x:0,
            tile_y:180,
            width: 42,
            height: 30,
            top: 180,
            right: 42,
            bottom: 210,
            left: 0,
            center: {
                x: 21,
                y: 195
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 0,
            y: 0,
            block_tile_x:0,
            block_tile_y:0,
            tile_x:0,
            tile_y:0,
            width: 42,
            height: 30,
            top: 0,
            right: 42,
            bottom: 30,
            left: 0,
            center: {
                x: 21,
                y: 15
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 0,
            y: 1,
            block_tile_x:0,
            block_tile_y:30,
            tile_x:0,
            tile_y:30,
            width: 42,
            height: 30,
            top: 30,
            right: 42,
            bottom: 60,
            left: 0,
            center: {
                x: 21,
                y: 45
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 0,
            y: 2,
            block_tile_x:0,
            block_tile_y:60,
            tile_x:0,
            tile_y:60,
            width: 42,
            height: 30,
            top: 60,
            right: 42,
            bottom: 90,
            left: 0,
            center: {
                x: 21,
                y: 75
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 0,
            y: 3,
            block_tile_x:0,
            block_tile_y:90,
            tile_x:0,
            tile_y:90,
            width: 42,
            height: 30,
            top: 90,
            right: 42,
            bottom: 120,
            left: 0,
            center: {
                x: 21,
                y: 105
            },
            ground: "forest",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 4,
            y: 4,
            block_tile_x:168,
            block_tile_y:120,
            tile_x:172,
            tile_y:120,
            width: 35,
            height: 27,
            top: 120,
            right: 207,
            bottom: 147,
            left: 172,
            center: {
                x: 189.5,
                y: 133.5
            },
            ground: "cement",
            offset: {
                n: 0,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "",
                e: "Midway Street",
                s: "Through Street",
                w: "Crabapple Street",
            }
        },
            {
            x: 6,
            y: 2,
            block_tile_x:252,
            block_tile_y:60,
            tile_x:256,
            tile_y:64,
            width: 35,
            height: 23,
            top: 64,
            right: 291,
            bottom: 87,
            left: 256,
            center: {
                x: 273.5,
                y: 75.5
            },
            ground: "dirt",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Third Street",
                e: "Escarole",
                s: "Second Street",
                w: "Daikon",
            }
        },
            {
            x: 5,
            y: 4,
            block_tile_x:210,
            block_tile_y:120,
            tile_x:214,
            tile_y:120,
            width: 38,
            height: 27,
            top: 120,
            right: 252,
            bottom: 147,
            left: 214,
            center: {
                x: 233,
                y: 133.5
            },
            ground: "cement",
            offset: {
                n: 0,
                e: 0,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "",
                e: "",
                s: "Through Street",
                w: "Midway Street",
            }
        },
            {
            x: 4,
            y: 3,
            block_tile_x:168,
            block_tile_y:90,
            tile_x:172,
            tile_y:90,
            width: 35,
            height: 30,
            top: 90,
            right: 207,
            bottom: 120,
            left: 172,
            center: {
                x: 189.5,
                y: 105
            },
            ground: "cement",
            offset: {
                n: 0,
                e: 3,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "",
                e: "Midway Street",
                s: "",
                w: "Crabapple Street",
            }
        },
            {
            x: 5,
            y: 3,
            block_tile_x:210,
            block_tile_y:90,
            tile_x:214,
            tile_y:90,
            width: 35,
            height: 30,
            top: 90,
            right: 249,
            bottom: 120,
            left: 214,
            center: {
                x: 231.5,
                y: 105
            },
            ground: "cement",
            offset: {
                n: 0,
                e: 3,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "",
                e: "Daikon",
                s: "",
                w: "Midway Street",
            }
        },
            {
            x: 6,
            y: 4,
            block_tile_x:252,
            block_tile_y:120,
            tile_x:252,
            tile_y:124,
            width: 39,
            height: 23,
            top: 124,
            right: 291,
            bottom: 147,
            left: 252,
            center: {
                x: 271.5,
                y: 135.5
            },
            ground: "cement",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "First Street",
                e: "Escarole",
                s: "Through Street",
                w: "",
            }
        },
            {
            x: 1,
            y: 7,
            block_tile_x:42,
            block_tile_y:210,
            tile_x:42,
            tile_y:210,
            width: 42,
            height: 30,
            top: 210,
            right: 84,
            bottom: 240,
            left: 42,
            center: {
                x: 63,
                y: 225
            },
            ground: "marsh",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 2,
            y: 7,
            block_tile_x:84,
            block_tile_y:210,
            tile_x:84,
            tile_y:214,
            width: 39,
            height: 26,
            top: 214,
            right: 123,
            bottom: 240,
            left: 84,
            center: {
                x: 103.5,
                y: 227
            },
            ground: "marsh",
            offset: {
                n: 4,
                e: 3,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "Slope Street",
                e: "Blackberry Street",
                s: "",
                w: "",
            }
        },
            {
            x: 3,
            y: 8,
            block_tile_x:126,
            block_tile_y:240,
            tile_x:126,
            tile_y:244,
            width: 42,
            height: 26,
            top: 244,
            right: 168,
            bottom: 270,
            left: 126,
            center: {
                x: 147,
                y: 257
            },
            ground: "marsh",
            offset: {
                n: 4,
                e: 0,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "Rise Road",
                e: "",
                s: "",
                w: "",
            }
        },
            {
            x: 4,
            y: 8,
            block_tile_x:168,
            block_tile_y:240,
            tile_x:168,
            tile_y:240,
            width: 39,
            height: 30,
            top: 240,
            right: 207,
            bottom: 270,
            left: 168,
            center: {
                x: 187.5,
                y: 255
            },
            ground: "marsh",
            offset: {
                n: 0,
                e: 3,
                s: 0,
                w: 0,
            },
            bounds: {
                n: "",
                e: "Midway Street",
                s: "",
                w: "",
            }
        },
            {
            x: 5,
            y: 8,
            block_tile_x:210,
            block_tile_y:240,
            tile_x:214,
            tile_y:240,
            width: 38,
            height: 30,
            top: 240,
            right: 252,
            bottom: 270,
            left: 214,
            center: {
                x: 233,
                y: 255
            },
            ground: "marsh",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "Midway Street",
            }
        },
            {
            x: 5,
            y: 7,
            block_tile_x:210,
            block_tile_y:210,
            tile_x:214,
            tile_y:214,
            width: 36,
            height: 26,
            top: 214,
            right: 250,
            bottom: 240,
            left: 214,
            center: {
                x: 232,
                y: 227
            },
            ground: "marsh",
            offset: {
                n: 4,
                e: 2,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "Slope Street",
                e: "Daikon",
                s: "",
                w: "Midway Street",
            }
        },
            {
            x: 4,
            y: 7,
            block_tile_x:168,
            block_tile_y:210,
            tile_x:172,
            tile_y:214,
            width: 35,
            height: 26,
            top: 214,
            right: 207,
            bottom: 240,
            left: 172,
            center: {
                x: 189.5,
                y: 227
            },
            ground: "marsh",
            offset: {
                n: 4,
                e: 3,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "Slope Street",
                e: "Midway Street",
                s: "",
                w: "Crabapple Street",
            }
        },
            {
            x: 6,
            y: 3,
            block_tile_x:252,
            block_tile_y:90,
            tile_x:256,
            tile_y:94,
            width: 35,
            height: 23,
            top: 94,
            right: 291,
            bottom: 117,
            left: 256,
            center: {
                x: 273.5,
                y: 105.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Second Street",
                e: "Escarole",
                s: "First Street",
                w: "Daikon",
            }
        },
            {
            x: 3,
            y: 3,
            block_tile_x:126,
            block_tile_y:90,
            tile_x:130,
            tile_y:94,
            width: 35,
            height: 23,
            top: 94,
            right: 165,
            bottom: 117,
            left: 130,
            center: {
                x: 147.5,
                y: 105.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Second Street",
                e: "Crabapple Street",
                s: "First Street",
                w: "Blackberry Street",
            }
        },
            {
            x: 3,
            y: 2,
            block_tile_x:126,
            block_tile_y:60,
            tile_x:130,
            tile_y:64,
            width: 35,
            height: 23,
            top: 64,
            right: 165,
            bottom: 87,
            left: 130,
            center: {
                x: 147.5,
                y: 75.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Third Street",
                e: "Crabapple Street",
                s: "Second Street",
                w: "Blackberry Street",
            }
        },
            {
            x: 3,
            y: 7,
            block_tile_x:126,
            block_tile_y:210,
            tile_x:130,
            tile_y:214,
            width: 35,
            height: 23,
            top: 214,
            right: 165,
            bottom: 237,
            left: 130,
            center: {
                x: 147.5,
                y: 225.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Slope Street",
                e: "Crabapple Street",
                s: "Rise Road",
                w: "Blackberry Street",
            }
        },
            {
            x: 3,
            y: 1,
            block_tile_x:126,
            block_tile_y:30,
            tile_x:130,
            tile_y:34,
            width: 38,
            height: 23,
            top: 34,
            right: 168,
            bottom: 57,
            left: 130,
            center: {
                x: 149,
                y: 45.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 0,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Fourth Street",
                e: "",
                s: "Third Street",
                w: "Blackberry Street",
            }
        },
            {
            x: 2,
            y: 2,
            block_tile_x:84,
            block_tile_y:60,
            tile_x:88,
            tile_y:64,
            width: 35,
            height: 23,
            top: 64,
            right: 123,
            bottom: 87,
            left: 88,
            center: {
                x: 105.5,
                y: 75.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Third Street",
                e: "Blackberry Street",
                s: "Second Street",
                w: "Apple Street",
            }
        },
            {
            x: 5,
            y: 2,
            block_tile_x:210,
            block_tile_y:60,
            tile_x:214,
            tile_y:64,
            width: 35,
            height: 26,
            top: 64,
            right: 249,
            bottom: 90,
            left: 214,
            center: {
                x: 231.5,
                y: 77
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "Third Street",
                e: "Daikon",
                s: "",
                w: "Midway Street",
            }
        },
            {
            x: 2,
            y: 4,
            block_tile_x:84,
            block_tile_y:120,
            tile_x:88,
            tile_y:124,
            width: 38,
            height: 23,
            top: 124,
            right: 126,
            bottom: 147,
            left: 88,
            center: {
                x: 107,
                y: 135.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 0,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "First Street",
                e: "",
                s: "Through Street",
                w: "Apple Street",
            }
        },
            {
            x: 3,
            y: 4,
            block_tile_x:126,
            block_tile_y:120,
            tile_x:126,
            tile_y:124,
            width: 39,
            height: 23,
            top: 124,
            right: 165,
            bottom: 147,
            left: 126,
            center: {
                x: 145.5,
                y: 135.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "First Street",
                e: "Crabapple Street",
                s: "Through Street",
                w: "",
            }
        },
            {
            x: 3,
            y: 5,
            block_tile_x:126,
            block_tile_y:150,
            tile_x:126,
            tile_y:154,
            width: 39,
            height: 23,
            top: 154,
            right: 165,
            bottom: 177,
            left: 126,
            center: {
                x: 145.5,
                y: 165.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "Through Street",
                e: "Crabapple Street",
                s: "Valley Road",
                w: "",
            }
        },
            {
            x: 4,
            y: 5,
            block_tile_x:168,
            block_tile_y:150,
            tile_x:172,
            tile_y:154,
            width: 35,
            height: 26,
            top: 154,
            right: 207,
            bottom: 180,
            left: 172,
            center: {
                x: 189.5,
                y: 167
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "Through Street",
                e: "Midway Street",
                s: "",
                w: "Crabapple Street",
            }
        },
            {
            x: 2,
            y: 5,
            block_tile_x:84,
            block_tile_y:150,
            tile_x:88,
            tile_y:154,
            width: 38,
            height: 23,
            top: 154,
            right: 126,
            bottom: 177,
            left: 88,
            center: {
                x: 107,
                y: 165.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 0,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Through Street",
                e: "",
                s: "Valley Road",
                w: "Apple Street",
            }
        },
            {
            x: 3,
            y: 6,
            block_tile_x:126,
            block_tile_y:180,
            tile_x:126,
            tile_y:184,
            width: 39,
            height: 23,
            top: 184,
            right: 165,
            bottom: 207,
            left: 126,
            center: {
                x: 145.5,
                y: 195.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "Valley Road",
                e: "Crabapple Street",
                s: "Slope Street",
                w: "",
            }
        },
            {
            x: 2,
            y: 6,
            block_tile_x:84,
            block_tile_y:180,
            tile_x:88,
            tile_y:184,
            width: 38,
            height: 23,
            top: 184,
            right: 126,
            bottom: 207,
            left: 88,
            center: {
                x: 107,
                y: 195.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 0,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Valley Road",
                e: "",
                s: "Slope Street",
                w: "Apple Street",
            }
        },
            {
            x: 4,
            y: 2,
            block_tile_x:168,
            block_tile_y:60,
            tile_x:172,
            tile_y:64,
            width: 35,
            height: 26,
            top: 64,
            right: 207,
            bottom: 90,
            left: 172,
            center: {
                x: 189.5,
                y: 77
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "Third Street",
                e: "Midway Street",
                s: "",
                w: "Crabapple Street",
            }
        },
            {
            x: 4,
            y: 6,
            block_tile_x:168,
            block_tile_y:180,
            tile_x:172,
            tile_y:180,
            width: 35,
            height: 27,
            top: 180,
            right: 207,
            bottom: 207,
            left: 172,
            center: {
                x: 189.5,
                y: 193.5
            },
            ground: "grass",
            offset: {
                n: 0,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "",
                e: "Midway Street",
                s: "Slope Street",
                w: "Crabapple Street",
            }
        },
            {
            x: 5,
            y: 6,
            block_tile_x:210,
            block_tile_y:180,
            tile_x:214,
            tile_y:180,
            width: 36,
            height: 27,
            top: 180,
            right: 250,
            bottom: 207,
            left: 214,
            center: {
                x: 232,
                y: 193.5
            },
            ground: "grass",
            offset: {
                n: 0,
                e: 2,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "",
                e: "Daikon",
                s: "Slope Street",
                w: "Midway Street",
            }
        },
            {
            x: 5,
            y: 5,
            block_tile_x:210,
            block_tile_y:150,
            tile_x:214,
            tile_y:154,
            width: 36,
            height: 26,
            top: 154,
            right: 250,
            bottom: 180,
            left: 214,
            center: {
                x: 232,
                y: 167
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 2,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "Through Street",
                e: "Daikon",
                s: "",
                w: "Midway Street",
            }
        },
            {
            x: 2,
            y: 3,
            block_tile_x:84,
            block_tile_y:90,
            tile_x:88,
            tile_y:94,
            width: 35,
            height: 23,
            top: 94,
            right: 123,
            bottom: 117,
            left: 88,
            center: {
                x: 105.5,
                y: 105.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 4,
            },
            bounds: {
                n: "Second Street",
                e: "Blackberry Street",
                s: "First Street",
                w: "Apple Street",
            }
        },
            {
            x: 4,
            y: 1,
            block_tile_x:168,
            block_tile_y:30,
            tile_x:168,
            tile_y:34,
            width: 39,
            height: 23,
            top: 34,
            right: 207,
            bottom: 57,
            left: 168,
            center: {
                x: 187.5,
                y: 45.5
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "Fourth Street",
                e: "Midway Street",
                s: "Third Street",
                w: "",
            }
        },
            {
            x: 4,
            y: 0,
            block_tile_x:168,
            block_tile_y:0,
            tile_x:168,
            tile_y:0,
            width: 39,
            height: 27,
            top: 0,
            right: 207,
            bottom: 27,
            left: 168,
            center: {
                x: 187.5,
                y: 13.5
            },
            ground: "grass",
            offset: {
                n: 0,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "",
                e: "Midway Street",
                s: "Fourth Street",
                w: "",
            }
        },
            {
            x: 5,
            y: 0,
            block_tile_x:210,
            block_tile_y:0,
            tile_x:214,
            tile_y:0,
            width: 38,
            height: 30,
            top: 0,
            right: 252,
            bottom: 30,
            left: 214,
            center: {
                x: 233,
                y: 15
            },
            ground: "grass",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "Midway Street",
            }
        },
            {
            x: 6,
            y: 5,
            block_tile_x:252,
            block_tile_y:150,
            tile_x:255,
            tile_y:154,
            width: 37,
            height: 24,
            top: 154,
            right: 292,
            bottom: 178,
            left: 255,
            center: {
                x: 273.5,
                y: 166
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 2,
                s: 2,
                w: 3,
            },
            bounds: {
                n: "Through Street",
                e: "Escarole",
                s: "Valley Road",
                w: "Daikon",
            }
        },
            {
            x: 6,
            y: 6,
            block_tile_x:252,
            block_tile_y:180,
            tile_x:255,
            tile_y:183,
            width: 39,
            height: 24,
            top: 183,
            right: 294,
            bottom: 207,
            left: 255,
            center: {
                x: 274.5,
                y: 195
            },
            ground: "grass",
            offset: {
                n: 3,
                e: 0,
                s: 3,
                w: 3,
            },
            bounds: {
                n: "Valley Road",
                e: "",
                s: "Slope Street",
                w: "Daikon",
            }
        },
            {
            x: 8,
            y: 6,
            block_tile_x:336,
            block_tile_y:180,
            tile_x:340,
            tile_y:180,
            width: 38,
            height: 30,
            top: 180,
            right: 378,
            bottom: 210,
            left: 340,
            center: {
                x: 359,
                y: 195
            },
            ground: "grass",
            offset: {
                n: 0,
                e: 0,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "",
                e: "",
                s: "",
                w: "Fennel",
            }
        },
            {
            x: 8,
            y: 5,
            block_tile_x:336,
            block_tile_y:150,
            tile_x:340,
            tile_y:154,
            width: 38,
            height: 26,
            top: 154,
            right: 378,
            bottom: 180,
            left: 340,
            center: {
                x: 359,
                y: 167
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 0,
                s: 0,
                w: 4,
            },
            bounds: {
                n: "Through Street",
                e: "",
                s: "",
                w: "Fennel",
            }
        },
            {
            x: 7,
            y: 5,
            block_tile_x:294,
            block_tile_y:150,
            tile_x:297,
            tile_y:154,
            width: 36,
            height: 26,
            top: 154,
            right: 333,
            bottom: 180,
            left: 297,
            center: {
                x: 315,
                y: 167
            },
            ground: "grass",
            offset: {
                n: 4,
                e: 3,
                s: 0,
                w: 3,
            },
            bounds: {
                n: "Through Street",
                e: "Fennel",
                s: "",
                w: "Escarole",
            }
        },
            {
            x: 1,
            y: 4,
            block_tile_x:42,
            block_tile_y:120,
            tile_x:42,
            tile_y:120,
            width: 39,
            height: 27,
            top: 120,
            right: 81,
            bottom: 147,
            left: 42,
            center: {
                x: 61.5,
                y: 133.5
            },
            ground: "grass",
            offset: {
                n: 0,
                e: 3,
                s: 3,
                w: 0,
            },
            bounds: {
                n: "",
                e: "Apple Street",
                s: "Through Street",
                w: "",
            }
        },
        ],
    nodes: [   
            {
            x: 5,
            y: 5,
            center_x: 210,
            center_y: 150,
            tile_x: 207,
            tile_y: 147,
            top: 147,
            right: 214,
            bottom: 154,
            left: 207,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            found: 1
                },
            },
        },
            {
            x: 9,
            y: 5,
            center_x: 378,
            center_y: 150,
            tile_x: 375,
            tile_y: 147,
            top: 147,
            right: 382,
            bottom: 154,
            left: 375,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
            },
        },
            {
            x: 5,
            y: 9,
            center_x: 210,
            center_y: 270,
            tile_x: 207,
            tile_y: 267,
            top: 267,
            right: 214,
            bottom: 274,
            left: 207,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 5,
            y: 0,
            center_x: 210,
            center_y: 0,
            tile_x: 207,
            tile_y: -3,
            top: -3,
            right: 214,
            bottom: 4,
            left: 207,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 0,
            y: 5,
            center_x: 0,
            center_y: 150,
            tile_x: -3,
            tile_y: 147,
            top: 147,
            right: 4,
            bottom: 154,
            left: -3,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 2,
            y: 5,
            center_x: 84,
            center_y: 150,
            tile_x: 81,
            tile_y: 147,
            top: 147,
            right: 88,
            bottom: 154,
            left: 81,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 0,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    found: 1
                },
            },
        },
            {
            x: 4,
            y: 5,
            center_x: 168,
            center_y: 150,
            tile_x: 165,
            tile_y: 147,
            top: 147,
            right: 172,
            bottom: 154,
            left: 165,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                    lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 1
                },
            },
        },
            {
            x: 4,
            y: 4,
            center_x: 168,
            center_y: 120,
            tile_x: 165,
            tile_y: 117,
            top: 117,
            right: 172,
            bottom: 124,
            left: 165,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    found: 1
                },
            },
        },
            {
            x: 3,
            y: 4,
            center_x: 126,
            center_y: 120,
            tile_x: 123,
            tile_y: 117,
            top: 117,
            right: 130,
            bottom: 124,
            left: 123,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                    lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 1
                },
            },
        },
            {
            x: 2,
            y: 4,
            center_x: 84,
            center_y: 120,
            tile_x: 81,
            tile_y: 117,
            top: 117,
            right: 88,
            bottom: 124,
            left: 81,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 4,
            y: 3,
            center_x: 168,
            center_y: 90,
            tile_x: 165,
            tile_y: 87,
            top: 87,
            right: 172,
            bottom: 94,
            left: 165,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                        lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            found: 1
                },
            },
        },
            {
            x: 4,
            y: 2,
            center_x: 168,
            center_y: 60,
            tile_x: 165,
            tile_y: 57,
            top: 57,
            right: 172,
            bottom: 64,
            left: 165,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                    lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 1
                },
            },
        },
            {
            x: 2,
            y: 2,
            center_x: 84,
            center_y: 60,
            tile_x: 81,
            tile_y: 57,
            top: 57,
            right: 88,
            bottom: 64,
            left: 81,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 1,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 3,
            y: 2,
            center_x: 126,
            center_y: 60,
            tile_x: 123,
            tile_y: 57,
            top: 57,
            right: 130,
            bottom: 64,
            left: 123,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: 1,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    found: 1
                },
            },
        },
            {
            x: 3,
            y: 3,
            center_x: 126,
            center_y: 90,
            tile_x: 123,
            tile_y: 87,
            top: 87,
            right: 130,
            bottom: 94,
            left: 123,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                            lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        found: 1
                },
            },
        },
            {
            x: 2,
            y: 3,
            center_x: 84,
            center_y: 90,
            tile_x: 81,
            tile_y: 87,
            top: 87,
            right: 88,
            bottom: 94,
            left: 81,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 5,
            y: 2,
            center_x: 210,
            center_y: 60,
            tile_x: 207,
            tile_y: 57,
            top: 57,
            right: 214,
            bottom: 64,
            left: 207,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 1,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                            lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        found: 1
                },
            },
        },
            {
            x: 6,
            y: 2,
            center_x: 252,
            center_y: 60,
            tile_x: 249,
            tile_y: 57,
            top: 57,
            right: 256,
            bottom: 64,
            left: 249,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    found: 1
                },
            },
        },
            {
            x: 7,
            y: 2,
            center_x: 294,
            center_y: 60,
            tile_x: 291,
            tile_y: 57,
            top: 57,
            right: 298,
            bottom: 64,
            left: 291,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                    lanes: 1,
                    name: "Third Street",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 1
                },
            },
        },
            {
            x: 7,
            y: 3,
            center_x: 294,
            center_y: 90,
            tile_x: 291,
            tile_y: 87,
            top: 87,
            right: 298,
            bottom: 94,
            left: 291,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                found: 1
                },
            },
        },
            {
            x: 8,
            y: 3,
            center_x: 336,
            center_y: 90,
            tile_x: 333,
            tile_y: 87,
            top: 87,
            right: 340,
            bottom: 94,
            left: 333,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Fennel",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        found: 1
                },
            },
        },
            {
            x: 8,
            y: 4,
            center_x: 336,
            center_y: 120,
            tile_x: 333,
            tile_y: 117,
            top: 117,
            right: 340,
            bottom: 124,
            left: 333,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Fennel",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Fennel",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                            found: 1
                },
            },
        },
            {
            x: 7,
            y: 4,
            center_x: 294,
            center_y: 120,
            tile_x: 291,
            tile_y: 117,
            top: 117,
            right: 298,
            bottom: 124,
            left: 291,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "ns",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                    found: 1
                },
            },
        },
            {
            x: 7,
            y: 5,
            center_x: 294,
            center_y: 150,
            tile_x: 291,
            tile_y: 147,
            top: 147,
            right: 298,
            bottom: 154,
            left: 291,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "s",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                            found: 1
                },
            },
        },
            {
            x: 6,
            y: 4,
            center_x: 252,
            center_y: 120,
            tile_x: 249,
            tile_y: 117,
            top: 117,
            right: 256,
            bottom: 124,
            left: 249,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "ns",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "First Street",
                    dir: "ew",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "ns",
                    connect: -2,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 6,
            y: 3,
            center_x: 252,
            center_y: 90,
            tile_x: 249,
            tile_y: 87,
            top: 87,
            right: 256,
            bottom: 94,
            left: 249,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Second Street",
                    dir: "ew",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "ns",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 7,
            y: 6,
            center_x: 294,
            center_y: 180,
            tile_x: 292,
            tile_y: 178,
            top: 178,
            right: 297,
            bottom: 183,
            left: 292,
            width: 5,
            height: 5,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "s",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Valley Road",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Escarole",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    lanes: 1,
                    name: "Valley Road",
                    dir: "w",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                found: 1
                },
            },
        },
            {
            x: 2,
            y: 6,
            center_x: 84,
            center_y: 180,
            tile_x: 81,
            tile_y: 177,
            top: 177,
            right: 88,
            bottom: 184,
            left: 81,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Valley Road",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 4,
            y: 6,
            center_x: 168,
            center_y: 180,
            tile_x: 165,
            tile_y: 177,
            top: 177,
            right: 172,
            bottom: 184,
            left: 165,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Valley Road",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            lanes: 1,
                    name: "Valley Road",
                    dir: "ew",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                        found: 1
                },
            },
        },
            {
            x: 6,
            y: 6,
            center_x: 252,
            center_y: 180,
            tile_x: 250,
            tile_y: 178,
            top: 178,
            right: 255,
            bottom: 183,
            left: 250,
            width: 5,
            height: 5,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "n",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Valley Road",
                    dir: "w",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "s",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 6,
            y: 5,
            center_x: 252,
            center_y: 150,
            tile_x: 250,
            tile_y: 147,
            top: 147,
            right: 255,
            bottom: 154,
            left: 250,
            width: 5,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "n",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    found: 1
                },
            },
        },
            {
            x: 5,
            y: 7,
            center_x: 210,
            center_y: 210,
            tile_x: 207,
            tile_y: 207,
            top: 207,
            right: 214,
            bottom: 214,
            left: 207,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 9,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                    found: 1
                },
            },
        },
            {
            x: 2,
            y: 7,
            center_x: 84,
            center_y: 210,
            tile_x: 81,
            tile_y: 207,
            top: 207,
            right: 88,
            bottom: 214,
            left: 81,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 8,
            y: 7,
            center_x: 336,
            center_y: 210,
            tile_x: 333,
            tile_y: 207,
            top: 207,
            right: 340,
            bottom: 214,
            left: 333,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Fennel",
                    dir: "ns",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Fennel",
                    dir: "ns",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                found: 1
                },
            },
        },
            {
            x: 8,
            y: 8,
            center_x: 336,
            center_y: 240,
            tile_x: 333,
            tile_y: 237,
            top: 237,
            right: 340,
            bottom: 244,
            left: 333,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Fennel",
                    dir: "ns",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Rise Road",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Fennel",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        lanes: 1,
                    name: "Rise Road",
                    dir: "ew",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                            found: 1
                },
            },
        },
            {
            x: 4,
            y: 8,
            center_x: 168,
            center_y: 240,
            tile_x: 165,
            tile_y: 237,
            top: 237,
            right: 172,
            bottom: 244,
            left: 165,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Rise Road",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            lanes: 1,
                    name: "Rise Road",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                                                                                                                        found: 1
                },
            },
        },
            {
            x: 4,
            y: 7,
            center_x: 168,
            center_y: 210,
            tile_x: 165,
            tile_y: 207,
            top: 207,
            right: 172,
            bottom: 214,
            left: 165,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Crabapple Street",
                    dir: "ns",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                                                                                                    found: 1
                },
            },
        },
            {
            x: 6,
            y: 7,
            center_x: 252,
            center_y: 210,
            tile_x: 250,
            tile_y: 207,
            top: 207,
            right: 255,
            bottom: 214,
            left: 250,
            width: 5,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "s",
                    connect: 6,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "s",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                        found: 1
                },
            },
        },
            {
            x: 6,
            y: 8,
            center_x: 252,
            center_y: 240,
            tile_x: 250,
            tile_y: 237,
            top: 237,
            right: 255,
            bottom: 244,
            left: 250,
            width: 5,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "s",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Rise Road",
                    dir: "ew",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Daikon",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 3,
            y: 8,
            center_x: 126,
            center_y: 240,
            tile_x: 123,
            tile_y: 237,
            top: 237,
            right: 130,
            bottom: 244,
            left: 123,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Rise Road",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 3,
            y: 7,
            center_x: 126,
            center_y: 210,
            tile_x: 123,
            tile_y: 207,
            top: 207,
            right: 130,
            bottom: 214,
            left: 123,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 4,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: 8,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                lanes: 1,
                    name: "Slope Street",
                    dir: "ew",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                    found: 1
                },
            },
        },
            {
            x: 5,
            y: 1,
            center_x: 210,
            center_y: 30,
            tile_x: 207,
            tile_y: 27,
            top: 27,
            right: 214,
            bottom: 34,
            left: 207,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 0,
                    sidewalk: 1,
                    parking: 0,
                                        found: 1
                },
                e: {
                                        lanes: 1,
                    name: "Fourth Street",
                    dir: "ew",
                    connect: -1,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Midway Street",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        lanes: 1,
                    name: "Fourth Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                                                            found: 1
                },
            },
        },
            {
            x: 3,
            y: 1,
            center_x: 126,
            center_y: 30,
            tile_x: 123,
            tile_y: 27,
            top: 27,
            right: 130,
            bottom: 34,
            left: 123,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Fourth Street",
                    dir: "ew",
                    connect: 5,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Blackberry Street",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            lanes: 1,
                    name: "Fourth Street",
                    dir: "ew",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                                        found: 1
                },
            },
        },
            {
            x: 2,
            y: 1,
            center_x: 84,
            center_y: 30,
            tile_x: 81,
            tile_y: 27,
            top: 27,
            right: 88,
            bottom: 34,
            left: 81,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Fourth Street",
                    dir: "ew",
                    connect: 3,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Apple Street",
                    dir: "ns",
                    connect: 2,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                found: 0
                },
            },
        },
            {
            x: 8,
            y: 5,
            center_x: 336,
            center_y: 150,
            tile_x: 333,
            tile_y: 147,
            top: 147,
            right: 340,
            bottom: 154,
            left: 333,
            width: 7,
            height: 7,

            streets: {  
                n: {
                                        found: 0
                },
                e: {
                                        lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 9,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                s: {
                                        lanes: 1,
                    name: "Fennel",
                    dir: "ns",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                    found: 1
                },
                w: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            lanes: 1,
                    name: "Through Street",
                    dir: "ew",
                    connect: 7,
                    sidewalk: 1,
                    parking: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                        found: 1
                },
            },
        },
        ],
    propertyLines: [
                {
            lines: {
                x: 0,
                y: 0,
                width: 19,
                height: 11
            },
            block: {
                x: 3,
                y: 1
            },
            address: {
                name: "",
                facing: "N",
                number: "",
                street: "",
            }
        },
        
                {
            lines: {
                x: 19,
                y: 0,
                width: 19,
                height: 11
            },
            block: {
                x: 3,
                y: 1
            },
            address: {
                name: "",
                facing: "N",
                number: "",
                street: "",
            }
        },
        
                {
            lines: {
                x: 0,
                y: 11,
                width: 19,
                height: 11
            },
            block: {
                x: 3,
                y: 1
            },
            address: {
                name: "",
                facing: "W",
                number: "",
                street: "",
            }
        },
        
                {
            lines: {
                x: 19,
                y: 11,
                width: 19,
                height: 11
            },
            block: {
                x: 3,
                y: 1
            },
            address: {
                name: "",
                facing: "S",
                number: "",
                street: "",
            }
        },
        
                {
            lines: {
                x: 0,
                y: 11,
                width: 11,
                height: 11
            },
            block: {
                x: 2,
                y: 1
            },
            address: {
                name: "",
                facing: "W",
                number: "400",
                street: "Apple Street",
            }
        },
        
                {
            lines: {
                x: 22,
                y: 11,
                width: 11,
                height: 11
            },
            block: {
                x: 2,
                y: 1
            },
            address: {
                name: "",
                facing: "E",
                number: "401",
                street: "Blackberry Street",
            }
        },
        
                {
            lines: {
                x: 0,
                y: 15,
                width: 17,
                height: 15
            },
            block: {
                x: 4,
                y: 3
            },
            address: {
                name: "",
                facing: "W",
                number: "200",
                street: "Crabapple Street",
            }
        },
        
                {
            lines: {
                x: 0,
                y: 0,
                width: 17,
                height: 15
            },
            block: {
                x: 4,
                y: 3
            },
            address: {
                name: "",
                facing: "W",
                number: "202",
                street: "Crabapple Street",
            }
        },
        
                {
            lines: {
                x: 23,
                y: 8,
                width: 9,
                height: 12
            },
            block: {
                x: 3,
                y: 3
            },
            address: {
                name: "",
                facing: "S",
                number: "201",
                street: "First Street",
            }
        },
        
                {
            lines: {
                x: 13,
                y: 8,
                width: 9,
                height: 12
            },
            block: {
                x: 3,
                y: 3
            },
            address: {
                name: "",
                facing: "S",
                number: "203",
                street: "First Street",
            }
        },
        
                {
            lines: {
                x: 3,
                y: 4,
                width: 9,
                height: 15
            },
            block: {
                x: 3,
                y: 3
            },
            address: {
                name: "",
                facing: "S",
                number: "205",
                street: "First Street",
            }
        },
        
                {
            lines: {
                x: 23,
                y: 4,
                width: 9,
                height: 16
            },
            block: {
                x: 2,
                y: 3
            },
            address: {
                name: "",
                facing: "S",
                number: "301",
                street: "First Street",
            }
        },
        
                {
            lines: {
                x: 13,
                y: 4,
                width: 9,
                height: 16
            },
            block: {
                x: 2,
                y: 3
            },
            address: {
                name: "",
                facing: "S",
                number: "303",
                street: "First Street",
            }
        },
        
                {
            lines: {
                x: 3,
                y: 4,
                width: 9,
                height: 16
            },
            block: {
                x: 2,
                y: 3
            },
            address: {
                name: "",
                facing: "S",
                number: "305",
                street: "First Street",
            }
        },
        
                {
            lines: {
                x: 22,
                y: 0,
                width: 11,
                height: 11
            },
            block: {
                x: 2,
                y: 1
            },
            address: {
                name: "",
                facing: "N",
                number: "300",
                street: "Fourth Street",
            }
        },
        
                {
            lines: {
                x: 11,
                y: 0,
                width: 11,
                height: 11
            },
            block: {
                x: 2,
                y: 1
            },
            address: {
                name: "",
                facing: "N",
                number: "302",
                street: "Fourth Street",
            }
        },
        
                {
            lines: {
                x: 0,
                y: 0,
                width: 11,
                height: 11
            },
            block: {
                x: 2,
                y: 1
            },
            address: {
                name: "",
                facing: "N",
                number: "304",
                street: "Fourth Street",
            }
        },
        
                {
            lines: {
                x: 17,
                y: 15,
                width: 17,
                height: 15
            },
            block: {
                x: 4,
                y: 3
            },
            address: {
                name: "",
                facing: "E",
                number: "201",
                street: "Midway Street",
            }
        },
        
                {
            lines: {
                x: 17,
                y: 0,
                width: 17,
                height: 15
            },
            block: {
                x: 4,
                y: 3
            },
            address: {
                name: "",
                facing: "E",
                number: "203",
                street: "Midway Street",
            }
        },
        
                {
            lines: {
                x: 13,
                y: 4,
                width: 19,
                height: 4
            },
            block: {
                x: 3,
                y: 3
            },
            address: {
                name: "",
                facing: "N",
                number: "200",
                street: "Second Street",
            }
        },
        
                {
            lines: {
                x: 22,
                y: 4,
                width: 10,
                height: 15
            },
            block: {
                x: 3,
                y: 2
            },
            address: {
                name: "",
                facing: "S",
                number: "201",
                street: "Second Street",
            }
        },
        
                {
            lines: {
                x: 12,
                y: 4,
                width: 10,
                height: 15
            },
            block: {
                x: 3,
                y: 2
            },
            address: {
                name: "",
                facing: "S",
                number: "203",
                street: "Second Street",
            }
        },
        
                {
            lines: {
                x: 3,
                y: 4,
                width: 9,
                height: 15
            },
            block: {
                x: 3,
                y: 2
            },
            address: {
                name: "",
                facing: "S",
                number: "205",
                street: "Second Street",
            }
        },
        
                {
            lines: {
                x: 11,
                y: 11,
                width: 11,
                height: 11
            },
            block: {
                x: 2,
                y: 1
            },
            address: {
                name: "",
                facing: "S",
                number: "301",
                street: "Third Street",
            }
        },
        
            ]
    
};
export default MAP_CONFIG;