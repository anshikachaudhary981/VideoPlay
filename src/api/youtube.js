import axios from "axios";


const KEY = 'AIzaSyBm37BFghc0qRDPvwZVrFyN0DbHVKEekcw';


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params : {
      part : 'snippet',
      maxResults : 5,
      key : KEY
  }
});
