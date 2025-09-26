import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <div className="gray-bg">
        <div className="stkbnx-container mx-auto py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="stkbnx-page-heading text-center">
              Oops, Page Not Found!
            </div>
            <div className="text-center">
              <Image
                src="/static/images/banner/404.png"
                alt="404"
                width={646}
                height={417}
              />
            </div>
          </motion.div>
          <div className="text-center mt-5">
            <Link href="/">
              <a className="rounded-full cmn-btn bg-primary mt-3">
                Go Back Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

