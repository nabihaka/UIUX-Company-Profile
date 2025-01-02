import * as React from "react";
import Navbar from "./Navbar";
import Home from "../section/Home";
import PopularArticles from "../section/PopularArticles";
import RecentArticles from "../section/RecentArticles";
import CaseStudies from "../section/CaseStudies";
import AllArticles from "../section/AllArticles";
import Footer from "../general/Footer";

const BlogPage = () => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Home />
      <PopularArticles />
      <RecentArticles />
      <CaseStudies />
      <AllArticles />
      <Footer />
    </div>
  );
};

export default BlogPage;
