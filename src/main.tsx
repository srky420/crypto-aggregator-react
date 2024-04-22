import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom'
import { Error } from './components/globals/Error.tsx'
import { LandingPage } from './components/landingPage/LandingPage.tsx'
import { TokensPage } from './components/tokensPage/TokensPage.tsx'
import { AboutPage } from './components/aboutPage/AboutPage.tsx'
import { BlogPage } from './components/blogPage/BlogPage.tsx'
import { ContactPage } from './components/contactPage/ContactPage.tsx'
import { AccountPage } from './components/accountPage/AccountPage.tsx'


// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/token-listings',
        element: <TokensPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/blogs',
        element: <BlogPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/account',
        element: <AccountPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
