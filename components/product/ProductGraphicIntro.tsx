import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  img: string;
  withLearnMoreBtn?: boolean;
}

export default function ProductGraphicIntro({
  title,
  description,
  img,
  withLearnMoreBtn,
}: Props) {
  const { t } = useTranslation("common");

  return (
    <div className="py-10 md:py-14">
      <div className="py-0 md:py-10">
        <div className="max-w-6xl mx-auto product-type-list-bg space-y-4 md:space-y-0 py-8 md:py-0 rounded-2xl md:rounded-3xl md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="md:relative md:w-5/12 flex-shrink-0"
          >
            <div
              style={{ width: 259, height: 259 }}
              className="mx-auto md:mx-0 md:absolute md:left-1/3 md:top-1/2 md:-translate-y-1/2 md:-translate-x-[15%]"
            >
              <Image
                width={259}
                height={259}
                src={img}
                objectFit="cover"
                alt="product"
              />
            </div>
          </motion.div>
          <div className="flex-1 md:pr-28 md:py-14 space-y-2 md:space-y-4 px-4 md:px-0">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="md:text-4xl lg:text-4xl xl:text-4xl text-2xl intro-font whitespace-pre-wrap break-words text-center md:text-left md:w-[90%] xl:w-[70%] lg:w-[70%] text-white"
            >
              {title}
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="text-white2 text-center md:text-left md:h-[123px] lg:h-[123px] xl:h-[123px]"
            >
              {description}
            </motion.p>
            {withLearnMoreBtn && (
              <motion.button
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="rounded-full cmn-btn bg-primary text-neutral block mx-auto md:mx-0 py-[0.5rem] px-[1.5rem]"
              >
                <Link href="/trade/knowledge-articles">{t("Learn more")}</Link>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
