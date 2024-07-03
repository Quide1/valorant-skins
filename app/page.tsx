"use client";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-[95vh] flex-col items-center justify-between p-24 bg-slate-800">
        <div>
          <Button
            onClick={() => {
              console.log("hola");
            }}
          >
            Click me
          </Button>
        </div>
      </main>
    </>
  );
}
