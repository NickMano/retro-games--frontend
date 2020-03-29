import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import App from './routes/App'

const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [
      {
        "id": 2,
        "slug": "tvshow-2",
        "title": "In the Dark",
        "type": "Scripted",
        "language": "English",
        "year": 2009,
        "contentRating": "16+",
        "duration": 164,
        "cover": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm1.behance.net%2Frendition%2Fmodules%2F81120883%2Fdisp%2F21bb82db1bc0bfb431106ea5c0b7fd2d.jpg&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 3,
        "slug": "tvshow-3",
        "title": "Instinct",
        "type": "Adventure",
        "language": "English",
        "year": 2002,
        "contentRating": "16+",
        "duration": 137,
        "cover": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg0.etsystatic.com%2F073%2F0%2F11170271%2Fil_570xN.827193768_c902.jpg&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 4,
        "slug": "tvshow-4",
        "title": "Grand Hotel",
        "type": "Comedy",
        "language": "English",
        "year": 2014,
        "contentRating": "16+",
        "duration": 163,
        "cover": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fqwzn9n9gx3mz.png&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 5,
        "slug": "tvshow-5",
        "title": "Stargate Atlantis",
        "type": "Scripted",
        "language": "English",
        "year": 2014,
        "contentRating": "16+",
        "duration": 194,
        "cover": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia-cache-ec0.pinimg.com%2F736x%2Fae%2F9f%2F8a%2Fae9f8a3faafad0e9be6a60417c6fa183.jpg&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 6,
        "slug": "tvshow-6",
        "title": "Final Space",
        "type": "Scripted",
        "language": "English",
        "year": 2017,
        "contentRating": "16+",
        "duration": 124,
        "cover": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fdownload%2Fsuper-mario-minimalism-1080x1920.jpg&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 7,
        "slug": "tvshow-7",
        "title": "The InBetween",
        "type": "Drama",
        "language": "English",
        "year": 2011,
        "contentRating": "16+",
        "duration": 179,
        "cover": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F88%2F7d%2Fed%2F887ded7c8497d3aa749877c00539ae08.jpg&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ],
    "originals": [
      {
        "id": 8,
        "slug": "tvshow-8",
        "title": "Stargate Atlantis",
        "type": "Action",
        "language": "English",
        "year": 2012,
        "contentRating": "16+",
        "duration": 148,
        "cover": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F24.media.tumblr.com%2Ftumblr_mdlq359JDX1qlwf8co2_1280.jpg&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 9,
        "slug": "tvshow-9",
        "title": "Alien Highway",
        "type": "Action",
        "language": "English",
        "year": 2019,
        "contentRating": "16+",
        "duration": 128,
        "cover": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_mdlq359JDX1qlwf8co5_1280.jpg&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 10,
        "slug": "tvshow-10",
        "title": "Elementary",
        "type": "Animation",
        "language": "English",
        "year": 2011,
        "contentRating": "16+",
        "duration": 346,
        "cover": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_mdlq359JDX1qlwf8co5_1280.jpg&f=1&nofb=1",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 11,
        "slug": "tvshow-11",
        "title": "Strange Angel",
        "type": "War",
        "language": "English",
        "year": 2015,
        "contentRating": "16+",
        "duration": 226,
        "cover": "",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      },
      {
        "id": 12,
        "slug": "tvshow-12",
        "title": "Private Eyes",
        "type": "Comedy",
        "language": "English",
        "year": 2018,
        "contentRating": "16+",
        "duration": 190,
        "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ]
}

const store = createStore(reducer, initialState) 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('app')
)