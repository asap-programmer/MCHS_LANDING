import Image from 'next/image';
import logo from "@/assets/mchs.png";

export default function Logo({className} : {
  className?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        <Image fill src={logo} alt="mchs_logo" className="object-contain" />
      </div>
      <div>
        <h1 className={`text-xl font-bold ${className} text-gray-900`}>Лицензия МЧС</h1>
        <p className="text-sm text-gray-600">Под ключ</p>
      </div>
    </div>
  );
}
