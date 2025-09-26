import { useTranslation } from 'next-i18next';
import React from 'react'

const LotsText = () => {
  const { t } = useTranslation("common");
  return (
    <div className='sm:ml-12 lg:ml-[5rem] ml-0'>
      <p className="text-sm text-[#A8ADBA] mb-3">
        {t("New clients must fulfill below criteria for the Partner to be qualified for the rewards:")}
      </p>
      <p className="text-sm text-[#A8ADBA]">
        {t("1. Minimum 8 standard lots traded per client")}   </p>
      <p className="text-sm text-[#A8ADBA]">
        {t("2. Minimum deposit of $1,000")}</p>
    </div>
  )
}

export default LotsText