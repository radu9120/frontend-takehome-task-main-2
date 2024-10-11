import Footer from "../common/Footer";
import UserProfile from "../common/Header";
import Sidebar from "../common/SideBar";

import DashboardLayout from "../layout/DashboardLayout";
import SearchPageResults from "../features/SearchPageResult";

const SearchPage = () => {
  return (
    <DashboardLayout>
      <UserProfile />
      <Sidebar />
      <SearchPageResults />
      <Footer />
    </DashboardLayout>
  );
};

export default SearchPage;
