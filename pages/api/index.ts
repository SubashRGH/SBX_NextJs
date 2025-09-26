import { request } from "./request";

export const getSymbolPriceList = <T>(body: any) =>
  request.post<T>(`/SiteAPI/GetSymbolPriceList`, body);

import axios from "axios";
 const channelId = 'UCzL-_B4-6kDhr3bBatualHg' 
// const Axios = axios.create(baseURL: `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YT}&channelId=${channelId}&part=snippet,id&order=date&maxResults=`);

 const fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YT}&channelId=${channelId}&part=snippet,id&order=date&maxResults=`
 const playListUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${process.env.NEXT_PUBLIC_YT}&channelId=${channelId}&part=snippet,id&order=date&maxResults=`
 const playListItems = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${process.env.NEXT_PUBLIC_YT}&maxResults=50&playlistId=`


 export const getYTVideo = async (num: number) => {
  const res = await axios.get(fetchUrl+num);
  return res.data
}

export const getYTVideoPlay = async (num: number) => {
  const res = await axios.get(playListUrl+num);
  return res.data
}

export const getYTVideoPlayListItem = async (id: any) => {
  const res = await axios.get(playListItems+id);
  return res.data
}