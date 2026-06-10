import { createBrowserRouter } from 'react-router';
import Root from './Root';
import HomePage from './pages/HomePage';
import VehicleListingsPage from './pages/VehicleListingsPage';
import VehicleDetailPage from './pages/VehicleDetailPage';
import SellCarPage from './pages/SellCarPage';
import VehicleRequestPage from './pages/VehicleRequestPage';
import FinanceCalculatorPage from './pages/FinanceCalculatorPage';
import ReviewsPage from './pages/ReviewsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'vehicles', Component: VehicleListingsPage },
      { path: 'vehicles/:id', Component: VehicleDetailPage },
      { path: 'sell', Component: SellCarPage },
      { path: 'request', Component: VehicleRequestPage },
      { path: 'finance', Component: FinanceCalculatorPage },
      { path: 'reviews', Component: ReviewsPage },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/:slug', Component: BlogPostPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'admin', Component: AdminDashboardPage },
    ],
  },
]);
