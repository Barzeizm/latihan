import BtnPrimary from "./components/BtnPrimary";
import Link from "next/link";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
        <div className="px-9 pt-40 min-h-screen border-dashed border-b-2 border-black">
          <div className="">
            <h1 className="font-mon font-bold text-xl">Mau buat acara sendiri tapi takut ribet? 🤔</h1>
            <p className="font-pop">Kami disini menyediakan jasa sewa alat untuk menunjang ke berhasilan dan kemudahan acara anda.</p>
            <div className="mt-4 flex gap-4 items-center justify-between sm:justify-start w-full">
              <BtnPrimary children={'Sewa Sekarang'}></BtnPrimary>  
              <a href="/produk" className="font-light hover:underline">Alatnya apa aja sih →</a>
            </div>
          </div>
        </div>
        <div className="px-9 py-20 border-dashed border-b-2 border-black">
          <h1 className="font-mon font-bold text-xl">Keunggulan dan Manfaat sewa ditempat kami ✨</h1>
          <div className="flex flex-col mt-10 gap-10">
          <Card 
            title={"GRATIS ONGKIR"} 
            icon={"🚚"} 
            body={"Gratis Ongkos Kirim selama masih di dalam daerah Bogor Barat"}>
          </Card>
          <Card 
            title={"GRATIS ONGKIR"} 
            icon={"🚚"} 
            body={"Gratis Ongkos Kirim selama masih di dalam daerah Bogor Barat"}>
          </Card>
          <Card 
            title={"GRATIS KONSULTASI"} 
            icon={"☎"} 
            body={"Tim kami siap melayani anda di jam oprasional pukul 09.00 sd 22.00 WIB"}>
          </Card>
          </div>
        </div>
    </>
  );
}
