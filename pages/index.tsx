import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Entry from "../components/Entry";
import PersonalProjects from "../components/PersonalProjects";
import AcademicProjects from "../components/AcademicProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <Layout>
            <Entry />

            <PersonalProjects />

            {/* Thematic break */}
            <hr />

            <AcademicProjects />

            {/* Thematic break */}
            <hr />

            <Contact />

            <Footer />
        </Layout>
    );
}
