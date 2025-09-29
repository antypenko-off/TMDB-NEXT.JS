import "./globals.css";

import {Metadata} from "next";
import {GetGenres} from "@/lib/data.service";
import Header from "@/Components/HeaderComponent";

export const metadata:Metadata = { title: "Movies", description: "TMDB demo" };

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