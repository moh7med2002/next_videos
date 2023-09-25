'use client'
import "styles/globals.css";
import { ReactNode } from "react";
import Providers from "./Providers";
import Layout from "components/layout/Layout";
import { usePathname } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  const noLayout =  ['/auth/signIn', '/auth/signup'];
  const pathname = usePathname();
  console.log(pathname);
  
  
  return (
    <html lang="en">
      <body>
        <Providers>
          {
            noLayout.find(path=>path.includes(pathname||""))&&pathname!=="/"?
            <div>{children}</div>
            :
            <Layout>
            <div>{children}</div>
          </Layout>
          }       
          </Providers>
          <ToastContainer />
      </body>
    </html>
  );
}
