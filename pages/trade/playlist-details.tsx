import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getYTVideoPlayListItem } from "../api";
import Loader from "../../components/Loader";
import ReactPlayer from "react-player";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import router, { useRouter } from "next/router";
import Link from "next/link";
function AllVideos() {
  const { t } = useTranslation("common");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const [allVideosPlay, setallVideosPlay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoId, setVideoId] = useState<any>("");
  const [isPlaying, setIsPlaying] = useState(true);
  const PlayListItem = async () => {
    setLoading(true);
    try {
      const res = await getYTVideoPlayListItem(videoId);
      setallVideosPlay(res?.items);
      setLoading(false);
    } catch (error) {
      console.log("something error playlists");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (videoId) PlayListItem();
  }, [videoId]);

  useEffect(() => {
    if (router.isReady) {
      const item = router.query.id;
      setVideoId(item);
    }
  }, [router.isReady]);

  const openVideo = (id: any) => {
    setShowModal(true);
    setVideoId(id);
  };

  return (
    <>
      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-4">
        <div>
          <Link href="/trade/education">
            <button className="rounded-full quick-btn border border-solid border-white transition ease-in-out hover:bg-primary hover:text-white h-[46px] flex justify-center items-center mb-4">
              {" "}
              <ArrowLongLeftIcon className="h-5 w-5 mr-2" /> {t("Back")}
            </button>
          </Link>
        </div>
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <div className="video-items">
              {allVideosPlay &&
                allVideosPlay?.map((item: any, i: any) => {
                  return (
                    <>
                      <div className="video-item" key={i}>
                        <a
                          onClick={() =>
                            openVideo(item.snippet.resourceId.videoId)
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            className="youtube-vd"
                            style={{
                              backgroundImage: `url('${item.snippet.thumbnails.medium.url}')`,
                            }}
                          >
                            <div className="flex yt-title">
                              <h3 className="line-clamp-2">
                                {" "}
                                {item.snippet.title}{" "}
                              </h3>
                              <img
                                alt="play"
                                src="/static/images/icons/play.svg"
                                width="60"
                                height="60"
                              />
                            </div>
                            <div className="video-line"> </div>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
            </div>
          </>
        )}
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed lg:inset-0 xl:inset-0 top-7 z-50 outline-none focus:outline-none overlay p-7">
            <div className="relative modal-video lg:p-2 xl:p-2 p-2 mx-aut bg-white rounded-lg">
              <button
                className="bg-white rounded-full flex items-center justify-center border-0 text-black float-right absolute w-8 h-8 top-[-10px] right-[-14px]"
                onClick={() => setShowModal(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              {/* Modal data here */}
              <>
                <ReactPlayer
                  controls
                  url={`https://www.youtube.com/watch?v=${videoId}&ab_channel=CPTMarkets`}
                  width="100%"
                  height="550px"
                  playing={isPlaying}
                />
              </>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default AllVideos;

