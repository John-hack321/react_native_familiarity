import { Slot } from "expo-router";
import React from "react";
import "../globals.css";

export default function _layout() {

    const isAuthenticated= true;
    // if (!isAuthenticated) return <Redirect href={'/sign-in'}/>
    return <Slot/>
}