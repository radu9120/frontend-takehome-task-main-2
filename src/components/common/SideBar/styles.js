import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 81px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid #e4f6ed;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: translateX(-100%);
    &.open {
      transform: translateX(0);
    }
  }
`;

export const SidebarContainer = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 80px;
  height: 50vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 20px;
  gap: 20px;
`;

export const SidebarLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
  font-size: 18px;
  font-weight: bold;
  color: #00a86b;
  position: relative;
`;

// Close "X" button
export const CloseButton = styled.button`
  position: absolute;
  right: -40px;
  top: 0;
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    right: -30px;
    font-size: 24px;
  }
`;

// Styling for each sidebar icon
export const SidebarIcon = styled.div`
  margin: 5px 0;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
  background-color: ${({ isActive }) => (isActive ? "#dff6ec" : "transparent")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  svg {
    stroke: ${({ isActive }) => (isActive ? "#008347" : "#bde9d2")};
    transition: stroke 0.3s ease;
  }

  &:hover {
    background-color: #e0f3e9;
    svg {
      stroke: #008347;
    }
  }
`;

// Toggle button for mobile screen
export const SidebarToggleButton = styled.button`
  position: fixed;
  left: 10px;
  z-index: 0;
  top: 10px;
  background-color: #00a86b;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 999;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
