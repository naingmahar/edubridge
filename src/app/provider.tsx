"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname, useRouter } from "next/navigation";
import Router  from "next/router";
import React, { ReactNode, useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";

interface Props {
  children: ReactNode;
}


const Providers = ({ children }: Props) => {
  const [queryClient] = React.useState(() => new QueryClient())
  const route = usePathname()
  return (
          <RecoilRoot>
                {/* <ReactQueryDevtools initialIsOpen={false} />   */}
              <QueryClientProvider client={queryClient}>
                {children}
                </QueryClientProvider>
          </RecoilRoot>
        );
};

export default Providers;