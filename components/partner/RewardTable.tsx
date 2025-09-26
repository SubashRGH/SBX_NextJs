import classNames from "classnames"
import { motion } from "framer-motion"
import { useState } from "react"

function RewardTable() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="max-w-6xl mx-auto pb-8 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="rounded-xl md:rounded-3xl shadow"
      >
        <div className="overflow-x-auto">
          <table className="w-full rounded-b-xl md:rounded-b-3xl">
            <thead className="bg-[#0C2038] text-white">
              <tr className="h-12 md:h-16 text-center text-sm md:text-base whitespace-nowrap">
                <th className="border-b border-[#C0CFE2]">Tier</th>
                <th className="border-b border-[#C0CFE2]">Category</th>
                <th className="border-b border-[#C0CFE2]">NTCs</th>
                <th className="border-b border-[#C0CFE2]">Min Lots per client</th>
                <th className="border-b border-[#C0CFE2]">Min Deposit $</th>
                <th className="border-b border-[#C0CFE2]">Net Funding $</th>
                <th className="border-b border-[#C0CFE2]">Total Lots Traded</th>
                <th className="border-b border-[#C0CFE2]">Rewards</th>
              </tr>
            </thead>
            <tbody>
              <motion.tr
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="h-12 md:h-16 odd:bg-[#F5F6FA] text-sm md:text-base"
              >
                <td>1</td>
                <td>CPTPartner</td>
                <td>1</td>
                <td>1</td>
                <td>1000</td>
                <td>-</td>
                <td>-</td>
                <td>Welcome Kit</td>
              </motion.tr>
              <motion.tr
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="h-12 md:h-16 odd:bg-[#F5F6FA] text-sm md:text-base"
              >
                <td>2</td>
                <td>CPTPremium</td>
                <td>1</td>
                <td>1</td>
                <td>1000</td>
                <td>-</td>
                <td>-</td>
                <td>Welcome Kit</td>
              </motion.tr>
              <motion.tr
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="h-12 md:h-16 odd:bg-[#F5F6FA] text-sm md:text-base"
              >
                <td>3</td>
                <td>CPTPartner</td>
                <td>1</td>
                <td>1</td>
                <td>1000</td>
                <td>-</td>
                <td>-</td>
                <td>Welcome Kit</td>
              </motion.tr>
              <motion.tr
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="h-12 md:h-16 odd:bg-[#F5F6FA] text-sm md:text-base"
              >
                <td>4</td>
                <td>CPTPartner</td>
                <td>1</td>
                <td>1</td>
                <td>1000</td>
                <td>-</td>
                <td>-</td>
                <td>Welcome Kit</td>
              </motion.tr>
              <motion.tr
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="h-12 md:h-16 odd:bg-[#F5F6FA] text-sm md:text-base"
              >
                <td>5</td>
                <td>CPTPartner</td>
                <td>1</td>
                <td>1</td>
                <td>1000</td>
                <td>-</td>
                <td>-</td>
                <td>Welcome Kit</td>
              </motion.tr>
              <motion.tr
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="h-12 md:h-16 odd:bg-[#F5F6FA] text-sm md:text-base"
              >
                <td>6</td>
                <td>CPTPartner</td>
                <td>1</td>
                <td>1</td>
                <td>1000</td>
                <td>-</td>
                <td>-</td>
                <td>Welcome Kit</td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default RewardTable