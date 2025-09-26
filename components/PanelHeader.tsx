import classNames from "classnames";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description?: string;
  className?: string;
  semiTitle?: string;
}

export default function PanelHeader({
  title,
  description,
  className,
  semiTitle,
}: Props) {
  return (
    <div
      className={classNames("space-y-3 md:space-y-4 mb-4 mx-auto", className)}
    >
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="intro-font text-[28px] xl:text-[28px] text-center text-white mb-6 leading-[normal]"
      >
        {title}
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
          className="text-white2 text-center md:w-5/6 xl:w-5/6 lg:w-5/6 m-auto text-base md:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
      {semiTitle ? (
        <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 1 },
          }}
          transition={{ duration: 0.6 }}
          className="text-white2 text-base text-center md:w-5/6 xl:w-5/6 lg:w-5/6 m-auto font-bold"
        >
          {semiTitle}
        </motion.h4>
      ) : null}
    </div>
  );
}

