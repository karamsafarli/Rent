import Home from "./components/pages/Home/Home";
import Blog from "./components/pages/Blog/Blog";
import About from "./components/pages/About/About";
import News from "./components/pages/News/News";
import Faq from "./components/pages/Faq/Faq";
import Detail from "./components/pages/Detail/Detail";

const route = [
    {
        name: 'Home',
        path: '/',
        element: <Home />
    },
    {
        name: 'About',
        path: '/about',
        element: <About />
    },
    {
        name: 'News',
        path: '/news',
        element: <News />
    },
    {
        name: 'FAQ',
        path: '/faq',
        element: <Faq />

    },
    {
        name: 'Blog',
        path: '/blog',
        element: <Blog />
    },
    {
        name: 'Detail',
        path: '/blog/:id',
        element: <Detail />
    }
]

export default route