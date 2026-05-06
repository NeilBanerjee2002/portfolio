import Hero from '../components/hero';
import Details_Home from '../components/Details_Home';
import Bottom_Container from '../components/Bottom_container'

export default function Home({ t }) {
    return (
        <>
            <Hero t={t} />
            <Details_Home t={t} />
            <Bottom_Container />
        </>
    );
}