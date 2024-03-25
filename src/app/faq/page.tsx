"use client"

import { useEffect, useState } from "react";
import {faqData} from "../../feature/firebase/register"
import { FaqCard, IFaqProps } from "./componet/FaqCard";
import { BrowserView } from "react-device-detect";
export default function faq() {
    const [state,setState] = useState<IFaqProps[]>([])
    useEffect(()=>{
       faqData((faq)=>{
        setState(faq.data);
       });
    },[])
    return (
      <div className="min-h-screen max-w-max mt-16 lg:px-16 lg:py-10">
        <BrowserView>
            <div className="bg-white px-5 py-3 rounded-lg my-5">
                <h4 className="font-semibold text-lg text-green-950">University Visa Questions</h4>
            </div>
        </BrowserView>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-4">
            {
               state.map((row)=>{
                return(
                    <FaqCard {...row} />
                )
               })
            }
        </div>
      </div> 
    );
  }
  