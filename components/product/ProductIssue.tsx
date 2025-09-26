import { motion } from "framer-motion";
import Image from "next/image";
import PanelHeader from "../PanelHeader";

interface Props {
  title: string;
  description?: string;
  list: { label: string; img: string }[];
  headerClassName?: string;
}

export default function ProductIssue({
  title,
  description,
  list,
  headerClassName,
}: Props) {
  return (
    <div className="m-commodities-title py-10 md:py-14 px-4 product-issue">
      <PanelHeader
        title={title}
        description={description}
        className={headerClassName}
      />
      <ul className="max-w-6xl mx-auto lg:space-x-[30px] xl:space-x-[30px] md:space-x-[22px] flex sm:flex-row lg:flex-row flex-col">
        {list.map((item) => (
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
            key={item.label}
            className="flex-1 flex flex-col items-center rounded-[40px] py-14 md:py-10 space-y-3 md:space-y-6 product-type-list-bg "
          >
            <div className="">
              <Image src={item.img} width={90} height={90} alt="product" />
            </div>
            <div className="text-center text-2xl text-white ">{item.label}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

