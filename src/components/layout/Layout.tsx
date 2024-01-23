import Navbar from "@components/layout/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <main className="flex">
          <Navbar />
          <section className="pl-[208px] pt-6 w-full h-screen">
            {children}
          </section>          
        </main>        
    </>
  );
}