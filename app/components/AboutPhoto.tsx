"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPhoto() {
  const [bursting, setBursting] = useState(false);

  function handleClick() {
    setBursting(true);
    setTimeout(() => setBursting(false), 500);
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileTap={{ scale: 0.92, rotate: -4 }}
      className="relative shrink-0 self-center md:self-start"
      aria-label="Abhishek Ravinuthala"
    >
      <motion.div
        animate={bursting ? { rotate: [0, -6, 6, -3, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/photo.jpeg"
          alt="Abhishek Ravinuthala"
          width={310}
          height={415}
          className="h-52 w-auto rounded-2xl border border-navy-lightest object-cover md:h-64"
        />
      </motion.div>
    </motion.button>
  );
}
