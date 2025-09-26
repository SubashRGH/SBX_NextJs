import { motion } from "framer-motion";

interface Props {
  headTitle: string;
  description: string;
  slogan?: string;
}

export default function ProductSlogan({
  headTitle,
  description,
  slogan,
}: Props) {
  return (
    <div className="max-w-6xl mx-auto pt-10 md:pt-28 md:pb-10 px-4">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="intro-font text-2xl md:text-3xl text-center mb-4 text-white"
      >
        {headTitle}
      </motion.h3>
      {description ? (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.6 }}
          className="text-[#a8adba] text-center md:w-[95%] xl:w-100 lg:w-100 m-auto"
        >
          {description}
        </motion.p>
      ) : null}

      {slogan ? (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.6 }}
          className="text-[#6D7988] text-center m-auto mt-5 italic"
        >
          {slogan}
        </motion.p>
      ) : null}
    </div>
  );
}

