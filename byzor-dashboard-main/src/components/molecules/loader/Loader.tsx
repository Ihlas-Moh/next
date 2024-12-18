"use client"
import React from 'react';
import animationData from "./animation.json"
import Lottie from 'react-lottie';
import Image from "next/image";

function Loader() {

    console.log(animationData)
    console.log("Hello")

    const defaultOptions = React.useMemo(() => {
        return {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }, [])

    return (
        <div>
            Loading...
            <Image alt={"Loader"} src={"/loader.gif"} width={150} height={150}/>
            <Lottie
                options={defaultOptions}
                height={100}
                width={100}
            />
        </div>
    );
}

export default Loader;
