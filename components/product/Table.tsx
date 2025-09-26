import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/ProductsConditions.module.css";
import { Fragment } from "react";
interface Props {
  title: string;
}

function Table({
  first,
  last,
  list,
  firstClassName,
}: {
  first: string;
  last: string;
  list: string[][][];
  firstClassName: string;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0">
      <table className={`${styles.table} w-full`}>
        <thead>
          <motion.tr
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <th
              className={`${firstClassName} intro-font text-[10px] md:text-2xl !bg-primary !text-neutral`}
            >
              {first}
            </th>
            <th className="intro-font text-[10px] md:text-2xl !bg-primary !text-neutral">
              {last}
            </th>
          </motion.tr>
        </thead>
        <tbody>
          {list.map((item, i) => {
            const [first, last] = item;
            const rows = Math.max(first.length, last.length);
            return (
              <Fragment key={i}>
                {new Array(rows).fill(undefined).map((_, index) => (
                  <motion.tr
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 100 },
                      visible: { opacity: 1, y: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {first.length > 1 || index === 0 ? (
                      <td
                        rowSpan={last.length}
                        className="bg-[#40444C] text-[10px] md:text-base text-white"
                      >
                        {first[index]}
                      </td>
                    ) : null}
                    {last.length > 1 || index === 0 ? (
                      <td
                        rowSpan={first.length}
                        className="bg-[#24272E] text-[10px] md:text-base text-white"
                      >
                        {last[index]}
                      </td>
                    ) : null}
                  </motion.tr>
                ))}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
