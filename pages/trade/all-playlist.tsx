import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getYTVideoPlay } from "../api";
import Loader from "../../components/Loader";
import ReactPlayer from "react-player";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
function AllVideos() {
  const { t } = useTranslation("common");
  const [allVideosPlay, setallVideosPlay] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const fetchAllPlaylist = async () => {
    setLoading(true);
    try {
      const res = await getYTVideoPlay(30);
      setallVideosPlay(res?.items);
      setLoading(false);
    } catch (error) {
      console.log("something error playlists");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPlaylist();
  }, []);

  const handleUpdate = (item: any) => {
    router.push({
      pathname: "/trade/playlist-details",
      query: { id: item },
    });
  };

  return (
    <>
      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-4">
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
                        <a onClick={() => handleUpdate(item.id)}>
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
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default AllVideos;
