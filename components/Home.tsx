"use client"

import Feature from "./Home/Feature";
import Hero from "./Home/Hero";
import HeroBanner from "./Home/HeroBanner";
import Insight from "./Home/Insight";
import NavBar from "./Home/NavBar";
import TopBanner from "./Home/TopBanner";
import { ALL, SEAMLESS, BUDGET, GRAPH, TRACK, USERS, STOP, SECURE, SEARCH, DASHBOARD, PLAN } from "@/images";
import { IconCancel, IconCards, IconGraph, IconGraphOff, IconGrid4x4, IconLayersIntersect, IconLock, IconMap, IconSearch, IconTarget, IconUsers } from "@tabler/icons-react";
import Testimonial from "./Home/Testimonial";
import BottomBanner from "./BottomBanner";
import Footer from "./Footer";

export default function Home() {

  const features = [
    {
      image: SEAMLESS,
      icon: <IconLayersIntersect />,
      title: "Seamless and secure data connectivity for accurate bet tracking and AI-driven insights.",
      description: "Zort integrates with multiple data sources, surpassing competitors, to ensure seamless bet tracking and real-time AI-driven insights—keeping all your wagers in sync",
    },
    {
      image: TRACK,
      icon: <IconCards />,
      title: "Smart tracking rules to keep your bets and transactions organized effortlessly.",
      description: "Zort leverages AI to analyze your bets and track your slips with precision—getting smarter over time. For ultimate control, customize tracking rules to organize bet details, categories, tags, and notes effortlessly",
    },
    {
      image: BUDGET,
      icon: <IconMap />,
      title: "Powerful budgeting tools with flexible controls and rollover tracking to keep your bets and bankroll in check.",
      description: "Take control of your betting bankroll with customizable budgets and rollovers. Set budgets by category or group, and let Zort-App keep you on track with smart notifications and real-time insights",
    },
    {
      image: GRAPH,
      icon: <IconGraph />,
      title: "Track your bets and see exactly where your money goes.",
      description: "Our charts make it easy to track where every dollar flows, giving you a clear view of your spending patterns.",
    },
    {
      image: USERS,
      icon: <IconUsers />,
      title: "Collaborate securely with your partner to track and analyze your bets",
      description: "Invite a partner or advisor to collaborate at no extra cost. Both get their own login and a shared view of your betting activity.",
    },
    {
      image: ALL,
      icon: <IconGraphOff />,
      title: "Track all your bet slips and investment holdings in one place.",
      description: "Sync all your bets and investments into one view to track performance, historical trends, and allocations",
    },
    {
      image: PLAN,
      icon: <IconTarget />,
      title: "Track your progress towards your betting and financial goals.",
      description: "Track your betting goals and create a plan to achieve them. If you fall off track, Zort-App will help you get back on course.",
    },
    {
      image: DASHBOARD,
      icon: <IconGrid4x4 />,
      title: "Custom dashboard and reports",
      description: "Customize your dashboard to track your bets and spot trends. Build custom reports for deeper insights into your performance.",
    },
    {
      image: SEARCH,
      icon: <IconSearch />,
      title: "Search for anything",
      description: "Zort-App brings all your betting data into one place, making it easy to track and analyze your bets.",
    },
    {
      image: SECURE,
      icon: <IconLock />,
      title: "Security you can rely on",
      description: "Zort-App ensures your data is protected with bank-level security. Your login details are never stored, and account access is read-only—your funds are safe",
    },
    {
      image: STOP,
      icon: <IconCancel />,
      title: "No advertisements",
      description: "At Zort-App, we're dedicated to creating the best experience for tracking your bets. Enjoy a clean, ad-free interface, and rest assured—we never sell your data to third parties",
    }
  ]

  return (
    <main className="font-century">
      
      <TopBanner />
      <NavBar />

      <div className="h-full pb-[10%] bg-gradient-to-b from-black from-0% to-black-one to-60%">
        <HeroBanner />
        <Hero />
      </div>

      <Insight />

      <div className="h-full flex flex-col items-center justify-center space-y-[0vh]">
        {
          features.map((_, index) => (
            <div key={index}
              className={`w-full h-full flex items-center justify-center text-white text-lg font-bold`}>
              {
                (index + 1) % 2 == 0 ?
                  <Feature title={_.title} image={_.image} icon={_.icon} description={_.description} key={index} reversed />
                  :
                  <Feature title={_.title} image={_.image} icon={_.icon} description={_.description} key={index} />
              }
            </div>
          ))
        }
      </div>

      <Testimonial />
      <BottomBanner />
      <Footer />

    </main>
  );
}
