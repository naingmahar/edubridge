"use client"
import { useRecoilState, useRecoilValue } from "recoil";
import {RegisterRoutes} from "../RegisterRoutes";
import { registerState } from "@/feature/recoilState";
import { ReactNode } from "react";

export default function Home() {
  const [state,setState] = useRecoilState(registerState);

  const currentScreen = RegisterRoutes[state.route].componet

  return (
    <div className="min-h-screen min-w-max h-full bg-gray-100">
      {currentScreen({state,setState})}
    </div>
  );
}
