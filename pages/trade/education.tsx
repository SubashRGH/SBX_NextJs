import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { getYTVideo, getYTVideoPlay } from "../api";
import News from "../../components/News";
import Link from "next/link";
import ReactPlayer from "react-player";
import { XMarkIcon } from "@heroicons/react/24/solid";
import PageBanner from "@/components/PageBanner";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Head from "next/head";

const channelId = "UCzL-_B4-6kDhr3bBatualHg";

var fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YT}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

function education() {
  const { t, i18n } = useTranslation("common");
  const [videoId, setVideoId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [allVideos, setAllVideos] = useState([]);
  const [allVideosPlay, setallVideosPlay] = useState([]);
  const [doc, setDoc] = useState<any>([]);
  const [lang, setLang] = useState<any>();
  const router = useRouter();
  const fetchAllVideos = async () => {
    try {
      const res = await getYTVideo(5);
      setAllVideos(res?.items);
    } catch (error) {
      console.log("something error");
    }
  };

  const fetchAllPlaylist = async () => {
    try {
      const res = await getYTVideoPlay(3);
      setallVideosPlay(res?.items);
      console.log(res?.items);
    } catch (error) {
      console.log("something error playlists");
    }
  };

  const openVideo = (id: any) => {
    setShowModal(true);
    setVideoId(id);
  };

  const getPromotion = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/SiteAPI/GetPromotionList`, {
      method: "POST",
      body: JSON.stringify({
        sec_name: "promotions",
        lang_name: "en",
        lic_name: "SA",
        country_code: sessionStorage.getItem("countryDefault"),
        action_name: "promotions",
        page_name: "accounts/promotions",
        sort_field: "country_code",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setDoc(response?.data?.result);
      });
  };

  const handleUpdate = (item: any) => {
    router.push({
      pathname: "/trade/playlist-details",
      query: { id: item },
    });
  };

  // get language first
  const getLang = () => {
    setLang(sessionStorage.getItem("lang") || "en");
  };

  useEffect(() => {
    getLang();
  }, []);

  useEffect(() => {
    if (lang) getPromotion();
  }, [lang]);

  const fetchVideo = () => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((res: any) => {
        console.log(res?.items);
        // this.documents = res.data.documents
        setAllVideos(res?.items);
      });
  };
  useEffect(() => {
    //  fetchVideo();
    fetchAllVideos();
    fetchAllPlaylist();
  }, []);

  const isRtl = i18n.language === "ar";

  return (
    <>
      <Head>
        <title>Best Ways To Invest Money | Trading Platforms | Stockbanx</title>
        <meta
          name="description"
          content="Looking for the best ways to invest money? Discover Stockbanx'
          trading platform and start investing with confidence. Explore our
          market overview now!"
          key="Best Ways To Invest Money | Trading Platforms"
        />
      </Head>

      <PageBanner
        title={t("Stockbanx Academy")}
        description={t(
          "Education is an essential component for successful trading. That’s why you can now explore a variety of valuable resources and information for all traders. Scroll down and find out more!"
        )}
        imgSrc="/static/images/videoguides/education-page-banner.png"
        size="sm"
      />

      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-4">
        <div className="flex sm:flex-row lg:flex-row  flex-col justify-between items-center">
          <div className="">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="stkbnx-heading-white mb-5 md:mb-0 xl:mb-0 lg:mb-0 md:w-10/12 xl:w-2/3 lg:w-2/3">
                {t(
                  "Dive into the Learning Hub to Unlock your Trading Potential."
                )}
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-auto lg:w-auto xl:w-auto">
            <Link href="/trade/all-videos">
              <button className="rounded-full quick-btn-black demo-white h-[46px] flex justify-center items-center !max-w-full md:max-w-max lg:max-w-max xl:max-w-max xl:!w-auto lg:!w-auto px-4">
                {" "}
                {t("Explore All Videos")}
                <ArrowLongRightIcon className="h-5 w-5 ml-2" />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto md:py-8 xl:py-8 lg:py-8 py-4">
        <Splide
          dir={isRtl ? "rtl" : "ltr"}
          options={{
            type: "loop",
            gap: "10px",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 5,
            breakpoints: {
              640: {
                perPage: 2,
              },
              767: {
                perPage: 2,
              },
              1000: {
                perPage: 4,
              },
              1024: {
                perPage: 4,
              },
              1600: {
                perPage: 4,
              },
              1700: {
                perPage: 5,
              },
              1850: {
                perPage: 5,
              },
              2000: {
                perPage: 5,
              },
            },
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: true,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {allVideos &&
            allVideos?.map((item: any, i: any) => {
              return (
                <SplideSlide key={i}>
                  <>
                    <a
                      onClick={() => openVideo(item.id.videoId)}
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="youtube-vd"
                        style={{
                          backgroundImage: `url('${item.snippet.thumbnails.medium.url}')`,
                          backgroundRepeat: "no-repeat",
                          width: item.snippet.thumbnails.medium.width,
                          height: item.snippet.thumbnails.medium.height,
                          backgroundSize: "contain",
                          borderRadius: "20px",
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
                            width="80"
                            height="80"
                          />
                        </div>
                        <div className="video-line"> </div>
                      </div>
                    </a>
                  </>
                </SplideSlide>
              );
            })}
        </Splide>
      </div>

      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 !py-2">
        <div className="product-type-list-bg rounded-3xl px-8">
          <div className="flex sm:flex-row lg:flex-row  flex-col-reverse justify-between items-center lg:mt-20">
            <div className="md:basis-4/5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading-white mb-5 mt-4 xl:mt-0 lg:mt-0 md:mt-4 text-center lg:text-left">
                  {t(
                    "Sharpen your trading skills with our live webinars hosted by industry experts"
                  )}
                </div>
                <Link href="/trade/webinars">
                  <button className="rounded-full quick-btn-black demo-white h-[46px] mt-6 flex justify-center items-center !max-w-full md:max-w-max lg:max-w-max xl:max-w-max xl:!w-auto lg:!w-auto px-4">
                    {" "}
                    {t("Explore All Webinars")}
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="md:basis-2/5 w-full mt-6 md:mt-0 xl:mt-0 lg:mt-0">
              <div className="">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    alt="leader"
                    src="/static/images/webinars/zoom.png"
                    width="410"
                    height="273"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* featured articles */}
      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-8">
        <div className="flex sm:flex-row lg:flex-row  flex-col justify-between mt-20">
          <div className="md:basis-4/5">
            <div className="stkbnx-heading-white mb-5">
              {t(
                "Explore Our Extensive Collection of Tutorials, Informative Videos and In-Depth Learning Materials"
              )}
            </div>
            <div className="video-items playlis-items">
              {allVideosPlay &&
                allVideosPlay?.map((item: any, i: any) => {
                  return (
                    <>
                      <div className="video-item playlis-item" key={i}>
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
          </div>
          <div className="md:basis-1/5 w-full mt-6 md:mt-0 xl:mt-0 lg:mt-0">
            <div className="">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <Link href="/trade/all-playlist">
                <button className="rounded-full quick-btn-black demo-white h-[46px] flex justify-center items-center !max-w-full md:max-w-max lg:max-w-max xl:max-w-max xl:!w-auto lg:!w-auto px-4">
                  {" "}
                  {t("Explore All Playlists")}
                  <ArrowLongRightIcon className="h-5 w-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-8">
        <div className="product-type-list-bg rounded-3xl px-8">
          {doc &&
            doc?.slice(0, 1)?.map((item: any, i: any) => {
              return (
                <div
                  className="flex sm:flex-row lg:flex-row  flex-col justify-between items-center md:mt-20 lg:mt-20 xl:mt-20"
                  key={i}
                >
                  <div className="md:basis-4/5">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 1 },
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className="stkbnx-heading-white mb-5 mt-4 xl:mt-0 lg:mt-0 md:mt-4"
                        dangerouslySetInnerHTML={{
                          __html: t(item.title, {
                            interpolation: { escapeValue: false },
                          }),
                        }}
                      />
                      <Link href="/accounts/promotions">
                        <button className="text-white rounded-full educate quick-btn-black demo-white h-[46px] mt-6 flex justify-center items-center !max-w-full md:max-w-max lg:max-w-max xl:max-w-max xl:!w-auto lg:!w-auto px-4">
                          {" "}
                          {t("Explore All Promotions")}{" "}
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                  <div className="md:basis-2/5 w-full mt-6 md:mt-0 xl:mt-0 lg:mt-0">
                    <div className="">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 1 },
                        }}
                        transition={{ duration: 1 }}
                      >
                        <Image
                          alt="leader"
                          src={item.image_URL}
                          width="250"
                          height="250"
                          objectFit="contain"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* <div className="flex sm:flex-row lg:flex-row  flex-col justify-between items-center md:mt-20 lg:mt-20 xl:mt-20">
            <div className="md:basis-4/5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading-white mb-5 mt-4 xl:mt-0 lg:mt-0 md:mt-4">
                  {t(
                    "Sharpen your trading skills with our live webinars hosted by industry experts"
                  )}
                </div>
                <Link href="/accounts/promotions">
                  <button className="rounded-full quick-btn-black demo-white h-[46px] mt-6 flex justify-center items-center !max-w-full md:max-w-max lg:max-w-max xl:max-w-max xl:!w-auto lg:!w-auto px-4">
                    {" "}
                    {t("Explore All Promotions")}{" "}
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="md:basis-2/5 w-full mt-6 md:mt-0 xl:mt-0 lg:mt-0">
              <div className="">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 1 },
                  }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    alt="leader"
                    src="/static/images/webinars/zoom.png"
                    width="250"
                    height="250"
                    objectFit="contain"
                  />
                </motion.div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* featured articles */}
      <div className="stkbnx-container mx-auto md:py-8 xl:py-8 lg:py-8 py-8">
        <div className="flex sm:flex-row lg:flex-row  flex-col justify-between items-center">
          <div className="md:basis-1/5 w-full mt-6 md:mt-0 xl:mt-0 lg:mt-0">
            <div className="">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="stkbnx-heading-white mb-5 md:mb-0 xl:mb-0 lg:mb-0 md:w-10/12 xl:w-2/3 lg:w-2/3">
                  {t("Featured Articles")}
                </div>
              </motion.div>
              <Link href="/trade/knowledge-articles">
                <button className="rounded-full quick-btn-black demo-white h-[46px] mt-6 flex justify-center items-center !max-w-full md:max-w-max lg:max-w-max xl:max-w-max xl:!w-auto lg:!w-auto px-4">
                  {" "}
                  {t("Explore All Articles")}{" "}
                  <ArrowLongRightIcon className="h-5 w-5 ml-2" />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="md:basis-4/5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <News classText="md:basis-[30%]" />
            </motion.div>
          </div>
        </div>
      </div>
      {/* video modal open here */}
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed lg:inset-0 xl:inset-0 top-7 z-50 outline-none focus:outline-none overlay p-7 top-modal">
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

export default education;

