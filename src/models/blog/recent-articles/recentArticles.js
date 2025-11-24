import RecentArticlesImg1 from "@/assets/svg/recent_articles_img1.svg";
import RecentArticlesImg2 from "@/assets/svg/recent_articles_img2.svg";
import RecentArticlesImg3 from "@/assets/svg/recent_articles_img3.svg";
import LinaHicks from "@/assets/svg/lina_hicks.svg";
import TylerMurray from "@/assets/svg/tyler_murray.svg";
import WarrenCasey from "@/assets/svg/warren_casey.svg";

export const RECENT_ARTICLES_DATA = [
  {
    id: 1,
    imgBg: RecentArticlesImg1,
    title: "Future of Work",
    desc: "Majority of peole will work in jobs that don’t exist today.",
    imgAuthor: LinaHicks,
    name: "lina hicks",
    date: "25 December 2024",
  },
  {
    id: 2,
    imgBg: RecentArticlesImg2,
    title: "Future of Data",
    desc: "Thanks to never-ending piles of data & the amount of insight",
    imgAuthor: TylerMurray,
    name: "tyler murray",
    date: "7 January 2025",
  },
  {
    id: 3,
    imgBg: RecentArticlesImg3,
    title: "Future of Learning",
    desc: "A constant ability to learn will be on the most crucial skills",
    imgAuthor: WarrenCasey,
    name: "warren casey",
    date: "18 December 2024",
  },
];
