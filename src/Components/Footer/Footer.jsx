// import Link from "next/link";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// export default function Footer() {
//   return (
//     <footer className="bg-[#1f4035] text-white py-12 px-6 md:px-12 flex flex-col items-center">
      
//       {/* Container for max-width to keep it looking good on ultra-wide screens */}
//       <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10">
        
//         {/* Top Section: Branding & Description */}
//         <div className="text-center max-w-2xl">
//           <h2 className="text-7xl font-bold mb-4 tracking-wide">KeenKeeper</h2>
//           <p className="text-sm text-gray-300 leading-relaxed">
//             Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
//           </p>
//         </div>

//         {/* Middle Section: Social Links */}
//         <div className="flex flex-col items-center gap-3">
//           <h3 className="font-semibold text-sm tracking-widest uppercase">Social Links</h3>
//           <div className="flex gap-4">
//             {/* Replace these divs with your actual icon components (e.g., from react-icons) */}
//             <a href="#" className="w-10 h-10 bg-white text-[#1f4035] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
//               <FaFacebook />
//             </a>
//             <a href="#" className="w-10 h-10 bg-white text-[#1f4035] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
//               <FcGoogle />
//             </a>
//             <a href="#" className="w-10 h-10 bg-white text-[#1f4035] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         {/* Bottom Section: Copyright & Legal Links */}
//         {/* Mobile: flex-col, Desktop: md:flex-row */}
//         <div className="w-full pt-8 mt-4 border-t border-[#2e5e4d] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300">
//           <p>© 2026 KeenKeeper. All rights reserved.</p>
          
//           <div className="flex gap-6">
//             <Link href="/privacy" className="hover:text-white transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="hover:text-white transition-colors">
//               Terms of Service
//             </Link>
//             <Link href="/cookies" className="hover:text-white transition-colors">
//               Cookies
//             </Link>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Footer() {
  return (
    <footer className="bg-[#1f4035] text-white py-12 px-4 md:px-12 flex flex-col items-center overflow-hidden">
      
      {/* Container */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-10">
        
        {/* Top Section: Branding & Description */}
        <div className="text-center w-full max-w-2xl px-2">
          {/* 🐛 Fix 1: Responsive Text Size & Word Breaking */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-wide break-words">
            KeenKeeper
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Middle Section: Social Links */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-semibold text-sm tracking-widest uppercase">Social Links</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white text-[#1f4035] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaFacebook className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-white text-[#1f4035] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FcGoogle className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-white text-[#1f4035] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal Links */}
        {/* 🐛 Fix 2: Added text-center & flex-wrap for super small screens */}
        <div className="w-full pt-8 mt-4 border-t border-[#2e5e4d] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs text-gray-300 text-center">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors whitespace-nowrap">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors whitespace-nowrap">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}