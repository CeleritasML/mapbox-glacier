var config = {
    style: 'mapbox://styles/rexarski/cl1ml96jh000314p8x11eqtlj',
    accessToken: 'pk.eyJ1IjoicmV4YXJza2kiLCJhIjoiY2wxank5OHc4MTZ3OTNpbzQ5Yng0dmFrMCJ9.0WJwQ4dlHEGAar-JdA2KTA',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: 'Taku Glacier: 30 Years of Glacial Recession',
    // subtitle: 'Subtitle',
    // byline: 'Byline here',
    footer: 'Rui Qui & Daniel Cisek (2022). Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a> and <a href="https://earthexplorer.usgs.gov/">Earth Explorer</a>',
    chapters: [
        {
            id: 'glacier-np',
            alignment: 'left',
            title: '',
            image: 'slr.png',
            description: 'A recent NOAA study announced a chilling finding - by the year 2050, coastal areas across the United States will be dealing with over a foot of sea level rise. Much of this water comes from melting glaciers, which store nearly 70% of the world\'s fresh water. This study shows how one glacier has changed due to the ever-worsening effects of climate change, and how we can use data science to better understand these changes. ',
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
            description: 'Taku Glacier is part of the Juneau Icefield in Alaska. It is both the deepest and thickest alpine temperate glacier in the world, which makes it the topic of frequent research studies. It is also a reletively accessible location for field studies, due to both its proximity to the city of Juneau, Alaska, and its status as one of the southernmost tidewater glaciers in the Northern Hemisphere. The Juneau Icefield Research Program (JIRP) has a long history of recording changes to the glacier\'s extent and thickness, continuously monitoring the glacier since 1946. Much of their work relies on <i> in-situ </i> studies. These are incredibly expensive, requiring teams to traverse much of the glacier, manually recording changes across its terminus. ',
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
            description: 'The advent of satellite imaging presents a better paradigm for tracking glacier change over time. Imagery can be obtained from vendors easily and quickly, almost completely removing the need for teams to conduct the often dangerous, expensive, and time-consuming physical surveys of a glacier. To highlight the capabilities of satellite imagery for measuring glacial recession, we show how imagery from <a href="https://landsat.gsfc.nasa.gov/">LANDSAT</a> and <a href="https://sentinel.esa.int/web/sentinel/missions/sentinel-2">Sentinal-2</a> can help us track glacier recession on Taku.',
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
