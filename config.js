var config = {
    style: 'mapbox://styles/rexarski/cl1ml96jh000314p8x11eqtlj',
    accessToken: 'pk.eyJ1IjoicmV4YXJza2kiLCJhIjoiY2wxank5OHc4MTZ3OTNpbzQ5Yng0dmFrMCJ9.0WJwQ4dlHEGAar-JdA2KTA',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: 'Taku Glacier: 30 Years of Glacial Recession',
    // subtitle: 'Subtitle',
    // byline: 'Byline here',
    footer: '[TODO] Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'glacier-np',
            alignment: 'left',
            title: '',
            image: 'slr.png',
            description: '[TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-97.54880, 38.91349],
                zoom: 3.86,
                pitch: 32.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'taku-overview',
            alignment: 'right',
            title: 'Taku Glacier Overview',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Taku_Glacier_1992.jpg',
            description: '[TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-134.00918, 58.48176],
                zoom: 8.83,
                pitch: 38.50,
                bearing: -0.21
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
                {
                    layer: 'taku-1986-poly',
                    opacity: 0.25
                },
                {
                    layer: 'taku-1986-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2011-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2011-line',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-line',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'taku-1986-poly',
                    opacity: 0.25
                },
                {
                    layer: 'taku-1986-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2011-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2011-line',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-line',
                    opacity: 0
                },
            ]
        },
        {
            id: 'taku1986',
            alignment: 'left',
            title: 'Taku Glacier, 1986',
            image: '',
            description: '[TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-134.071, 58.435],
                zoom: 11.41,
                pitch: 15.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'taku-1986-poly',
                    opacity: 0.25
                },
                {
                    layer: 'taku-1986-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2011-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2011-line',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-line',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'taku-1986-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-1986-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2011-poly',
                    opacity: 0.25
                },
                {
                    layer: 'taku-2011-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2021-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-line',
                    opacity: 0
                },
            ]
        },
        {
            id: 'taku2011',
            alignment: 'left',
            title: 'Taku Glacier, 2011',
            image: '',
            description: '[TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-134.071, 58.435],
                zoom: 12.41,
                pitch: 15.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'taku-1986-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-1986-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2011-poly',
                    opacity: 0.25
                },
                {
                    layer: 'taku-2011-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2021-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-line',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'taku-1986-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-1986-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2011-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2011-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2021-poly',
                    opacity: 0.25
                },
                {
                    layer: 'taku-2021-line',
                    opacity: 1
                },
            ]
        },
        {
            id: 'taku2021',
            alignment: 'left',
            title: 'Taku Glacier, 2021',
            image: '',
            description: '[TODO] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-134.071, 58.435],
                zoom: 12.41,
                pitch: 15.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'taku-1986-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-1986-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2011-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2011-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2021-poly',
                    opacity: 0.25
                },
                {
                    layer: 'taku-2021-line',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'taku-1986-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-1986-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2011-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2011-line',
                    opacity: 1
                },
                {
                    layer: 'taku-2021-poly',
                    opacity: 0
                },
                {
                    layer: 'taku-2021-line',
                    opacity: 1
                },
            ]
        },
    ]
};
