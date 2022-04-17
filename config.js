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
            image: './process.png',
            description: 'The advent of satellite imaging presents a better paradigm for tracking glacier change over time. Imagery can be obtained from vendors easily and quickly, almost completely removing the need for teams to conduct the often dangerous, expensive, and time-consuming physical surveys of a glacier. To highlight the capabilities of satellite imagery for measuring glacial recession, we show how imagery from <a href="https://landsat.gsfc.nasa.gov/">LANDSAT</a> and <a href="https://sentinel.esa.int/web/sentinel/missions/sentinel-2">Sentinal-2</a> can help us track glacier recession on Taku. The blue polygon to the right shows the extent of Taku glacier in 1986, created by overlaying and digitizing historic imagery of the glacier, as shown above.',
            location: {
                center: [-134.091, 58.435],
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
            description: 'We can compare the extent of the glacier in 1986 to the digitized extent of the glacier in 2011, shown in yellow. Visualizations like these enable researchers to quickly gain both a figurative and literal birds-eye view of the glacier\'s evolution, tracking the recession of different parts of the glacier\'s terminus. For instance, we can see a significant amount of recession on the far east side of the terminus, while other areas have stayed reletively constant, and in some cases, even advanced slightly.  ',
            location: {
                center: [-134.091, 58.435],
                zoom: 11.41,
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
            description: 'In 2021 we see more pronounced recession in the more western edges of the terminus. The eastern portions seem reletively untouched during this time period. However, when compared to Taku\'s extent in 1986, the glacier has lost significant area across its terminus. <br><br> Digitizing glacial extents in the manner done in these images is a useful tool for communicating broad trends in glacier advance and retreat, and serves as a queuing tool for further investigation. Visualizations like these also provide a starting point for more in-depth analysis, which can focus on volumetric analysis, incorperate hydrological information, or consider many other sources of data. For a more analytical and specific look at the details of this project, please feel free to access our poster here. ',
            location: {
                center: [-134.091, 58.435],
                zoom: 11.41,
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
