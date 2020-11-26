import Head from "next/head";
import NavbarComponent from "../components/Navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>Bud Smith Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://bootswatch.com/4/slate/bootstrap.min.css"
            />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans"></link>
        </Head>
        <NavbarComponent />
        {props.children}
    </div>
);

export default Layout;
