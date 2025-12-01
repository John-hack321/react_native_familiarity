import { Slot } from "expo-router";
import React from "react";
import "../globals.css";

export default function Tablayout() {

    const isAuthenticated= true;
    // if (!isAuthenticated) return <Redirect href={'/sign-in'}/>
    return <Slot/>
}