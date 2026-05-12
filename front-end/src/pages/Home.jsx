import Hero from '../components/hero';
import Details_Home from '../components/Details_Home';
import Bottom_Container from '../components/Bottom_container'
import SocialSidebar from "../components/SocialSidebar.jsx";
import RecruiterSection from '../components/RecruiterSection'

export default function Home({ t }) {
    return (
        <>
            <SocialSidebar />
            <Hero t={t} />
            <Details_Home t={t} />
            <RecruiterSection t={t} />
        </>
    );
}