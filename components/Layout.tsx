import Head from "next/head";
import Navbar from "../components/Navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>Bud Smith Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://bootswatch.com/4/slate/bootstrap.min.css"
            />
        </Head>
        <Navbar />
        {props.children}
    </div>
);

export default Layout;
