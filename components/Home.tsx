"use client"

import { useEffect, useRef, useState } from "react";
import Feature from "./Home/Feature";
import Hero from "./Home/Hero";
import HeroBanner from "./Home/HeroBanner";
import Insight from "./Home/Insight";
import NavBar from "./Home/NavBar";
import TopBanner from "./Home/TopBanner";
import { motion, useScroll, useTransform } from 'motion/react'
import { ALL, SEAMLESS, BUDGET, GRAPH, TRACK, USERS, STOP, SECURE, SEARCH, DASHBOARD, PLAN } from "@/images";
import { IconCancel, IconCards, IconGraph, IconGraphOff, IconGrid4x4, IconLayersIntersect, IconLock, IconMap, IconSearch, IconTarget, IconUsers } from "@tabler/icons-react";
import Testimonial from "./Home/Testimonial";
import BottomBanner from "./BottomBanner";
import Footer from "./Footer";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const [screenHeight, setScreenHeight] = useState(0);

  // Update screen height on resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setScreenHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);


  const firstY = useTransform(scrollYProgress, [0, 0.1], [(screenHeight < 769 ? 150 : 100), 0]);
  const firstOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const secondY = useTransform(scrollYProgress, [0.1, 0.2], [(screenHeight < 769 ? 100 : 50), 0]);
  const secondOpacity = useTransform(scrollYProgress, [0.1, 0.18], [1, 0]);

  const thirdY = useTransform(scrollYProgress, [0.2, 0.3], [(screenHeight < 769 ? 100 : 50), 0]);
  const thirdOpacity = useTransform(scrollYProgress, [0.2, 0.28], [1, 0]);

  const fourthY = useTransform(scrollYProgress, [0.3, 0.4], [(screenHeight < 769 ? 100 : 50), 0]);
  const fourthOpacity = useTransform(scrollYProgress, [0.3, 0.38], [1, 0]);

  const fifthY = useTransform(scrollYProgress, [0.4, 0.5], [(screenHeight < 769 ? 100 : 100), 0]);
  const fifthOpacity = useTransform(scrollYProgress, [0.4, 0.48], [1, 0]);

  const sixthY = useTransform(scrollYProgress, [0.5, 0.6], [(screenHeight < 769 ? 100 : 150), 0]);
  const sixthOpacity = useTransform(scrollYProgress, [0.5, 0.58], [1, 0]);

  const seventhY = useTransform(scrollYProgress, [0.6, 0.7], [(screenHeight < 769 ? 100 : 100), 0]);
  const seventhOpacity = useTransform(scrollYProgress, [0.6, 0.68], [1, 0]);

  const eighthY = useTransform(scrollYProgress, [0.7, 0.8], [(screenHeight < 769 ? 100 : 50), 0]);
  const eighthOpacity = useTransform(scrollYProgress, [0.7, 0.78], [1, 0]);

  const ninthY = useTransform(scrollYProgress, [0.8, 0.9], [(screenHeight < 769 ? 100 : 50), 0]);
  const ninthOpacity = useTransform(scrollYProgress, [0.8, 0.88], [1, 0]);

  const tenthY = useTransform(scrollYProgress, [0.9, 1], [(screenHeight < 769 ? 100 : 50), 300]);

  const eleventhY = useTransform(scrollYProgress, [1, 1.1], [(screenHeight < 769 ? 500 : 50), -400]); // No fade-out

  const features = [
    {
      image: SEAMLESS,
      icon: <IconLayersIntersect />,
      title: "Seamless and secure data connectivity for accurate bet tracking and AI-driven insights.",
      description: "Zort integrates with multiple data sources, surpassing competitors, to ensure seamless bet tracking and real-time AI-driven insights—keeping all your wagers in sync",
      y: firstY,
      opacity: firstOpacity
    },
    {
      image: TRACK,
      icon: <IconCards />,
      title: "Smart tracking rules to keep your bets and transactions organized effortlessly.",
      description: "Zort leverages AI to analyze your bets and track your slips with precision—getting smarter over time. For ultimate control, customize tracking rules to organize bet details, categories, tags, and notes effortlessly",
      y: secondY,
      opacity: secondOpacity
    },
    {
      image: BUDGET,
      icon: <IconMap />,
      title: "Powerful budgeting tools with flexible controls and rollover tracking to keep your bets and bankroll in check.",
      description: "Take control of your betting bankroll with customizable budgets and rollovers. Set budgets by category or group, and let Zort-App keep you on track with smart notifications and real-time insights",
      y: thirdY,
      opacity: thirdOpacity
    },
    {
      image: GRAPH,
      icon: <IconGraph />,
      title: "Track your bets and see exactly where your money goes.",
      description: "Our charts make it easy to track where every dollar flows, giving you a clear view of your spending patterns.",
      y: fourthY,
      opacity: fourthOpacity
    },
    {
      image: USERS,
      icon: <IconUsers />,
      title: "Collaborate securely with your partner to track and analyze your bets",
      description: "Invite a partner or advisor to collaborate at no extra cost. Both get their own login and a shared view of your betting activity.",
      y: fifthY,
      opacity: fifthOpacity
    },
    {
      image: ALL,
      icon: <IconGraphOff />,
      title: "Track all your bet slips and investment holdings in one place.",
      description: "Sync all your bets and investments into one view to track performance, historical trends, and allocations",
      y: sixthY,
      opacity: sixthOpacity
    },
    {
      image: PLAN,
      icon: <IconTarget />,
      title: "Track your progress towards your betting and financial goals.",
      description: "Track your betting goals and create a plan to achieve them. If you fall off track, Zort-App will help you get back on course.",
      y: seventhY,
      opacity: seventhOpacity
    },
    {
      image: DASHBOARD,
      icon: <IconGrid4x4 />,
      title: "Custom dashboard and reports",
      description: "Customize your dashboard to track your bets and spot trends. Build custom reports for deeper insights into your performance.",
      y: eighthY,
      opacity: eighthOpacity
    },
    {
      image: SEARCH,
      icon: <IconSearch />,
      title: "Search for anything",
      description: "Zort-App brings all your betting data into one place, making it easy to track and analyze your bets.",
      y: ninthY,
      opacity: ninthOpacity
    },
    {
      image: SECURE,
      icon: <IconLock />,
      title: "Security you can rely on",
      description: "Zort-App ensures your data is protected with bank-level security. Your login details are never stored, and account access is read-only—your funds are safe",
      y: tenthY,
      opacity: 1
    },
    {
      image: STOP,
      icon: <IconCancel />,
      title: "No advertisements",
      description: "At Zort-App, we're dedicated to creating the best experience for tracking your bets. Enjoy a clean, ad-free interface, and rest assured—we never sell your data to third parties",
      y: eleventhY,
      opacity: 1
    }
  ]

  return (
    <main className="font-century">

      <section>
        <TopBanner />

        <div className="relative pb-[10%] bg-gradient-to-b from-black from-0% to-black-one to-60%">
          <NavBar />
          <HeroBanner />
          <Hero />
        </div>

        <Insight />

        <div ref={ref}  className="h-full flex flex-col items-center justify-center space-y-[50vh]">

          {
            features.map((_, index) => (
              <motion.div key={index}
                style={{ y: _.y, opacity: _.opacity }}
                className={`w-full h-[70vh] flex items-center justify-center text-white text-lg font-bold ${index === 10 && 'hidden'}`}>
                {
                  (index + 1) % 2 == 0 ?
                    <Feature title={_.title} image={_.image} icon={_.icon} description={_.description} key={index} reversed />
                    :
                    <Feature title={_.title} image={_.image} icon={_.icon} description={_.description} key={index} />
                }
              </motion.div>
            ))
          }
        </div>
      </section>
      
      <Testimonial />
      <BottomBanner />
      <Footer />

    </main>
  );
}
