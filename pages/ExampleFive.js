import { useEffect, useState } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExampleFive() {

    /* we want to setup a counter
    after every one second the number increases by 1
    we want to display that number on screen as it increases 
    no button in needed it will update automatically
    */

    var [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return(
        <>
            <Header/>
            <main>
                <div>
                    <h1>Counter {count}</h1>
                </div>
            </main>
            <Footer/>
        </>
    )
}