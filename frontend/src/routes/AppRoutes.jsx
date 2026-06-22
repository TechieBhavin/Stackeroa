import { Routes, Route } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import PublicLayout from "../layouts/PublicLayout";
import CategoriesPage from "../features/categories/pages/CategoriesPage";
import CategoryDetailsPage from "../features/categories/pages/CategoryDetailsPage";
import BlogDetailsPage from "../features/blogs/pages/BlogDetailsPage";
import BecomeAuthorPage from "../features/authors/pages/BecomeAuthor";
import WhyPage from "../features/info/pages/WhyPage";
import HelpPage from "../features/info/pages/HelpPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import MyArticlesPage from "../features/profile/pages/MyArticlesPage";
import SettingsPage from "../features/profile/pages/SettingsPage";
import SubscribePage from "../features/subscription/pages/SubscribePage";
import BookmarkPage from "../features/bookmarks/pages/BookmarkPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        }
      />
      <Route
        path="/categories"
        element={
          <PublicLayout>
            <CategoriesPage />
          </PublicLayout>
        }
      />
      <Route path="/categories/:slug" element={<CategoryDetailsPage />} />
      <Route path="/blog/:slug" element={<BlogDetailsPage />} />
      <Route path="/becomeAuthor" element={<BecomeAuthorPage />} />
      <Route path="/why" element={<WhyPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/my-articles" element={<MyArticlesPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/subscribe" element={<SubscribePage />} />
      <Route path="/bookmarks" element={<BookmarkPage />} />
    </Routes>
  );
};

export default AppRoutes;
