// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { API_KEY } from "./API_KEYS/API_KEY1";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/CarHomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PublicYoutubePage from "./pages/PublicYoutubePage/PublicYoutubePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";
import VideoMapper from "./components/VideoMapper/VideoMapper";

function App() {
  const [videos, setVideos] = useState([
    {
      kind: "youtube#searchResult",
      etag: "AhhPA2Ngt9utm2bZyBu_IA7jzfs",
      id: {
        kind: "youtube#video",
        videoId: "Mx_OexsUI2M",
      },
      snippet: {
        publishedAt: "2022-10-28T19:30:03Z",
        channelId: "UC2xskkQVFEpLcGFnNSLQY0A",
        title: "Rihanna - Lift Me Up (From Black Panther: Wakanda Forever)",
        description:
          'Rihanna - “Lift Me Up” ▻ Stream / Download: "Lift Me Up": https://rihanna.lnk.to/liftmeup ▻ Follow Rihanna Instagram: ...',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Mx_OexsUI2M/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Mx_OexsUI2M/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Mx_OexsUI2M/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "RihannaVEVO",
        liveBroadcastContent: "none",
        publishTime: "2022-10-28T19:30:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "fQxSYTiZCXlkzlPhffAfX3Yctxo",
      id: {
        kind: "youtube#video",
        videoId: "ospQ06jJe-I",
      },
      snippet: {
        publishedAt: "2022-10-28T04:08:02Z",
        channelId: "UC2xskkQVFEpLcGFnNSLQY0A",
        title: "Rihanna - Lift Me Up (Visualizer)",
        description:
          'Rihanna - “Lift Me Up” ▻ Stream / Download: "Lift Me Up": https://rihanna.lnk.to/liftmeup ▻ Follow Rihanna Instagram: ...',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ospQ06jJe-I/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ospQ06jJe-I/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ospQ06jJe-I/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "RihannaVEVO",
        liveBroadcastContent: "none",
        publishTime: "2022-10-28T04:08:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "dTRHm3gV4Z94ZFGW24lPiJAMpk8",
      id: {
        kind: "youtube#video",
        videoId: "uz2-eYojYAM",
      },
      snippet: {
        publishedAt: "2022-10-28T04:19:53Z",
        channelId: "UC2xskkQVFEpLcGFnNSLQY0A",
        title: "Rihanna - Lift Me Up (Audio)",
        description:
          'Rihanna - “Lift Me Up” ▻ Stream / Download: "Lift Me Up": https://rihanna.lnk.to/liftmeup ▻ Follow Rihanna Instagram: ...',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/uz2-eYojYAM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/uz2-eYojYAM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/uz2-eYojYAM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "RihannaVEVO",
        liveBroadcastContent: "none",
        publishTime: "2022-10-28T04:19:53Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "JP7RD2clNOhITUQUeltg70DGvDs",
      id: {
        kind: "youtube#video",
        videoId: "lWA2pjMjpBs",
      },
      snippet: {
        publishedAt: "2012-11-09T00:18:50Z",
        channelId: "UC2xskkQVFEpLcGFnNSLQY0A",
        title: "Rihanna - Diamonds",
        description:
          "Get Rihanna's eighth studio album ANTI now: Download on TIDAL: http://smarturl.it/downloadANTI Stream on TIDAL: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/lWA2pjMjpBs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/lWA2pjMjpBs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/lWA2pjMjpBs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "RihannaVEVO",
        liveBroadcastContent: "none",
        publishTime: "2012-11-09T00:18:50Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "HfNQzKHbTXurUGyJlOXJ9KLALXA",
      id: {
        kind: "youtube#video",
        videoId: "wfN4PVaOU5Q",
      },
      snippet: {
        publishedAt: "2016-04-20T16:00:05Z",
        channelId: "UC2xskkQVFEpLcGFnNSLQY0A",
        title: "Rihanna - Needed Me",
        description:
          '"Needed Me" from Rihanna\'s eighth studio album ANTI, available now: Download on TIDAL: http://smarturl.it/downloadANTI ...',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/wfN4PVaOU5Q/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/wfN4PVaOU5Q/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/wfN4PVaOU5Q/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "RihannaVEVO",
        liveBroadcastContent: "none",
        publishTime: "2016-04-20T16:00:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "4bpaz_8e2Mj9aEDo7kcSr6iDMaE",
      id: {
        kind: "youtube#video",
        videoId: "JF8BRvqGCNs",
      },
      snippet: {
        publishedAt: "2013-02-12T12:55:10Z",
        channelId: "UC2xskkQVFEpLcGFnNSLQY0A",
        title: "Rihanna - Stay ft. Mikky Ekko",
        description:
          "Get Rihanna's eighth studio album ANTI now: Download on TIDAL: http://smarturl.it/downloadANTI Stream on TIDAL: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/JF8BRvqGCNs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/JF8BRvqGCNs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/JF8BRvqGCNs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "RihannaVEVO",
        liveBroadcastContent: "none",
        publishTime: "2013-02-12T12:55:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "SCinfkVt-2_woDKzZO2spKmWtY8",
      id: {
        kind: "youtube#video",
        videoId: "gQgaS_MWUCw",
      },
      snippet: {
        publishedAt: "2022-05-20T08:19:15Z",
        channelId: "UC7IUDNpxCydqKugTm5vNhHg",
        title: "The Best Of Rihanna - Rihanna Greatest Hits Full Album 2022",
        description:
          "The Best Of Rihanna - Rihanna Greatest Hits Full Album 2022 The Best Of Rihanna - Rihanna Greatest Hits Full Album 2022 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/gQgaS_MWUCw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/gQgaS_MWUCw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/gQgaS_MWUCw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "My Music",
        liveBroadcastContent: "none",
        publishTime: "2022-05-20T08:19:15Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "KsVHvT8EoJAb-X6sm_6HOlChEBE",
      id: {
        kind: "youtube#video",
        videoId: "tg00YEETFzg",
      },
      snippet: {
        publishedAt: "2011-10-20T04:00:00Z",
        channelId: "UC2xskkQVFEpLcGFnNSLQY0A",
        title: "Rihanna - We Found Love ft. Calvin Harris",
        description:
          "Get Rihanna's eighth studio album ANTI now: Download on TIDAL: http://smarturl.it/downloadANTI Stream on TIDAL: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/tg00YEETFzg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/tg00YEETFzg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/tg00YEETFzg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "RihannaVEVO",
        liveBroadcastContent: "none",
        publishTime: "2011-10-20T04:00:00Z",
      },
    },
  ]);
  const [currentVideoID, setCurrentVideoID] = useState("WPiEbYSF9kE");
  const [inputText, setInputText] = useState("WPiEbYSF9kE");
  const [searchResults, setSearchResults] = useState([]);

  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const GetResults = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${inputText}&part=snippet&maxResults=10`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const GetRelatedVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${currentVideoID}&type=video&key=${API_KEY}`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/PublicHomePage"
          element={<PublicYoutubePage/>}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <SearchBar GetResults={GetResults} inputHandler={inputHandler} inputText={inputText}/>
      <VideoMapper searchResults={searchResults} />
      <Footer />
    </div>
  );
}

export default App;
