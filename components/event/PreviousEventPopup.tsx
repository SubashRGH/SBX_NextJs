import { XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from 'next/image'
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { changeLang } from "../../utils/utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import LazyLoad from "../LazyLoad";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface Props {
  showModel: boolean
  closeModal: () => void;
  title: string;
  dis: string;
  details: string;
  images: string[]
}

function PreviousEventPopup({ showModel, closeModal,
  title, dis, details, images }: Props) {
  const { t } = useTranslation("common");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    console.log("here ")
    const interval = setInterval(() => {
      // Increment the current image index, or reset to 0 if at the end
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentImageIndex, images.length]);
  return (


    <div className={`img-modal lg:absolute xl:absolute top-[0px]  lg:h-[100vh] xl:h-[100vh] modal ${showModel ? 'visible' : 'hidden'}`}>
      <>
        <div className="flex justify-center items-center lg:inset-0 xl:inset-0 top-7 z-50 outline-none focus:outline-none overlay">
          <div className="blur-bg relative w-full lg:p-2 xl:p-12  p-2 mx-aut bg-white -500" style={{
            height: 'auto',
          }}>

            {/*close button*/}
            <button
              className="blur-bg rounded-full flex items-center justify-center border-0 text-black float-right absolute w-8 h-8 top-[10px] right-[8px]"
            >
              <XMarkIcon
                className="h-5 w-5"
                onClick={() => closeModal()}
              />
            </button>
            {/* Modal data here */}
            {/*title*/}
            <div className='font-extrabold md:text-4xl lg:text-4xl xl:text-4xl text-2xl pb-4 pt-10 text-white'> {title} </div>
            {/*dis*/}
            <div className='  md:text-2xl lg:text-2xl xl:text-2xl text-lg pb-4 text-white	'> {dis} </div>
            {/*details*/}
            <div className="md:flex xl:flex lg:flex flex-col md:pt-10 xl:pt-10 lg:pt-10 pb-10">
              <div className="mr-4">
                <p className="text-lg pr-10 text-white"> {t("INTRODUCTION")}</p>
              </div>
              <div>
                <p className="text-lg text-white"> {t("Daily workshops led by renowned authors and historians covered topics like researching historical contexts, character development, and narrative techniques specific to historical fiction. The retreat also included guided tours to nearby historical sites and individual mentoring sessions, culminating in a cozy fireside reading session where participants shared excerpts from their works in progress.")} </p>
              </div>
            </div>

            {/*image slider*/}
            <div className="image-slider" style={{ overflow: 'hidden' }}>
              {/* Display all images in a row */}
              {/* <div className="image-container" style={{ display: 'flex' }}>
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
        style={{ height: '100px', width: '100px', margin: '0 5px', transition: 'transform 0.5s ease' }}
      />
    ))}
  </div> */}

              <div className="sm:mx-0 lg:mx-0 xl:mx-0 mx-0">
                <Splide
                  options={{
                    type: "loop",
                    gap: "5px",
                    drag: "free",
                    arrows: true,
                    pagination: false,
                    breakpoints: {
                      640: {
                        perPage: 2,

                      },
                      767: {
                        perPage: 2,

                      },
                      1000: {
                        perPage: 3,
                      },
                      1024: {
                        perPage: 3,
                      },
                      1600: {
                        perPage: 5,
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

                  }}
                >
                  {images?.map((item: any, index: number) => (
                    <>
                      <SplideSlide key={index}>
                        <div className=" relative">
                          <LazyLoad
                            src={item}
                            alt="stock"
                            width={250}
                            height={180}
                          />
                        </div>
                      </SplideSlide>
                    </>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>

      </>
    </div>
  )

}

export default PreviousEventPopup

