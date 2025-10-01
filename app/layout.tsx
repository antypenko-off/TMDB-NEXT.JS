import "./globals.css";

import {Metadata} from "next";
import {GetGenres} from "@/lib/data.service";
import Header from "@/Components/HeaderComponent";

export const metadata: Metadata = {
    title: {
        default: "Movies",
        template: "%s | Movies",
    },
    description: "Demo application using TMDB API with Next.js",
    openGraph: {
        title: "Movies",
        description: "Browse movies from TMDB",
        siteName: "Movies",
        locale: "en_US",
        type: "website",
    },
};


 const  RootLayout =  async ({ children }: { children: React.ReactNode }) => {
        const genres = await GetGenres();
    return (
        <html lang="en"><body>
        <Header genres={genres}/>
        {children}
        </body></html>
    );
}
    export default RootLayout;