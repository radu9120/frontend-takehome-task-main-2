import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Home, Briefcase, Users, Search, FileText, Settings, HelpCircle } from "lucide-react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // New state to track scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track last scroll position

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if scrolling up or down
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Set last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, [lastScrollTop]); // Re-run effect when `lastScrollTop` changes

  return (
    <>
      {/* Toggle button for mobile screens */}
      <S.SidebarToggleButton
        className={isSidebarOpen ? "open" : ""}
        onClick={toggleSidebar}
        style={{ display: isScrollingUp ? "block" : "none" }} // Show button only when scrolling up
      >
        <span></span>
        <span></span>
        <span></span>
      </S.SidebarToggleButton>

      {/* Overlay */}
      <S.Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />

      {/* Sidebar */}
      <S.SidebarWrapper className={isSidebarOpen ? "open" : ""}>
        <S.SidebarContainer>
          <S.SidebarLogo>
            <img src="/icon.png" alt="Main Logo" width={36} height={36} />
          </S.SidebarLogo>

          {isSidebarOpen && <S.CloseButton onClick={toggleSidebar}></S.CloseButton>}

          {/* Icons */}
          <S.SidebarIcon>
            <Home size={32} />
          </S.SidebarIcon>

          <S.SidebarIcon>
            <Briefcase size={32} /> {/* Briefcase (Suitcase) icon */}
          </S.SidebarIcon>

          <S.SidebarIcon>
            <Users size={32} /> {/* Contacts icon */}
          </S.SidebarIcon>

          <S.SidebarIcon>
            <FileText size={32} /> {/* File icon */}
          </S.SidebarIcon>

          <S.SidebarIcon isActive>
            <Search size={32} color="#008347" /> {/* Search icon */}
          </S.SidebarIcon>

          <S.SidebarIcon>
            <Settings size={32} /> {/* Settings icon */}
          </S.SidebarIcon>

          <S.SidebarIcon>
            <HelpCircle size={32} /> {/* Question (Help) icon */}
          </S.SidebarIcon>
        </S.SidebarContainer>
      </S.SidebarWrapper>
    </>
  );
};

export default Sidebar;
