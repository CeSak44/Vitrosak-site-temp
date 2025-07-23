"use client";

// import { Button } from "@/componants/ui/button";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
//       {/* Glass texture background overlay */}
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `url('https://thumbs.dreamstime.com/b/blue-frosted-glass-texture-soft-shadows-clean-blurred-background-surface-high-resolution-digital-photo-professional-color-386314525.jpg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       />

//       {/* Geometric glass overlays */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-white/30 backdrop-blur-sm rounded-lg rotate-12 border border-white/20 hidden lg:block" />
//       <div className="absolute top-1/3 right-16 w-24 h-40 bg-blue-100/40 backdrop-blur-sm rounded-xl rotate-45 border border-blue-200/30 hidden lg:block" />
//       <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-slate-200/30 backdrop-blur-sm rounded-full border border-slate-300/20 hidden lg:block" />
//       <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-200/40 backdrop-blur-sm rounded-lg rotate-12 border border-blue-300/30 hidden lg:block" />

//       {/* Main content container */}
//       <div className="relative z-10 min-h-screen flex flex-col">

//         {/* Header */}
//         <header className="py-8 px-4">
//           <div className="container mx-auto text-center">
//             <h1 className="text-3xl md:text-4xl font-light text-slate-700 tracking-wide">
//               <span className="font-normal">SARL</span>{" "}
//               <span className="font-semibold text-blue-600">VITROSAK</span>
//             </h1>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mt-2 rounded-full" />
//           </div>
//         </header>

//         {/* Main content */}
//         <main className="flex-1 flex items-center justify-center px-4 py-12">
//           <div className="max-w-4xl mx-auto text-center">

//             {/* Development notice */}
//             <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 mb-12">
//               <div className="mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-slate-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
//                   <svg
//                     className="w-8 h-8 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
//                     />
//                   </svg>
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-light text-slate-700 mb-4">
//                   Site Web en Développement
//                 </h2>
//               </div>

//               <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
//                 Nous travaillons actuellement sur le lancement de notre site web officiel.
//                 Merci de votre patience pendant que nous finalisons son développement.
//                 En attendant, n'hésitez pas à consulter notre catalogue ou à nous contacter directement.
//               </p>

//               {/* Catalog button */}
//               <div className="space-y-4">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
//                   onClick={() => window.open('/catalogue-vitrosak.pdf', '_blank')}
//                 >
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   Consulter Notre Catalogue
//                 </Button>
//                 <p className="text-sm text-slate-500">
//                   (PDF s'ouvre dans un nouvel onglet)
//                 </p>
//               </div>
//             </div>

//             {/* Company specialization note */}
//             <div className="bg-gradient-to-r from-blue-50/80 to-slate-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100/50">
//               <p className="text-slate-600 font-medium">
//                 Spécialiste en fabrication et transformation du verre plat
//               </p>
//               <p className="text-slate-500 text-sm mt-1">
//                 Applications automobiles et décoratives
//               </p>
//             </div>
//           </div>
//         </main>

//         {/* Footer */}
        // <footer className="py-12 px-4 bg-gradient-to-r from-slate-800/95 to-blue-900/95 backdrop-blur-md border-t border-white/10">
        //   <div className="container mx-auto">
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">

        //       {/* Company Headquarters */}
        //       <div className="text-center md:text-left">
        //         <h3 className="text-lg font-semibold mb-4 text-blue-200">
        //           Siège Social
        //         </h3>
        //         <div className="space-y-2">
        //           <div className="flex items-center justify-center md:justify-start space-x-2">
        //             <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
        //               <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        //             </svg>
        //             <span className="text-slate-200">Guedjel, Sétif</span>
        //           </div>
        //           <div className="flex items-center justify-center md:justify-start space-x-2">
        //             <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
        //               <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1.101a.75.75 0 01-.363.636l-3.097 1.875.229.229a.75.75 0 010 1.06l-.229.229 3.097 1.875a.75.75 0 01.363.636V13a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" clipRule="evenodd" />
        //             </svg>
        //             <span className="text-slate-200">Algeria</span>
        //           </div>
        //           <Button
        //             variant="outline"
        //             size="sm"
        //             className="mt-3 border-blue-300 text-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
        //             onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=36.19,5.41', '_blank')}
        //           >
        //             Voir sur Google Maps
        //           </Button>
        //         </div>
        //       </div>

        //       {/* Showroom */}
        //       <div className="text-center md:text-left">
        //         <h3 className="text-lg font-semibold mb-4 text-blue-200">
        //           Showroom
        //         </h3>
        //         <div className="space-y-2">
        //           <div className="flex items-center justify-center md:justify-start space-x-2">
        //             <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
        //               <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        //             </svg>
        //             <span className="text-slate-200">Bir El Djir, Oran</span>
        //           </div>
        //           <div className="flex items-center justify-center md:justify-start space-x-2">
        //             <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
        //               <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1.101a.75.75 0 01-.363.636l-3.097 1.875.229.229a.75.75 0 010 1.06l-.229.229 3.097 1.875a.75.75 0 01.363.636V13a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" clipRule="evenodd" />
        //             </svg>
        //             <span className="text-slate-200">Algeria</span>
        //           </div>
        //           <Button
        //             variant="outline"
        //             size="sm"
        //             className="mt-3 border-blue-300 text-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
        //             onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=35.72,-0.545', '_blank')}
        //           >
        //             Voir sur Google Maps
        //           </Button>
        //         </div>
        //       </div>

        //       {/* Contact Information */}
        //       <div className="text-center md:text-left lg:col-span-1 md:col-span-2 lg:col-span-1">
        //         <h3 className="text-lg font-semibold mb-4 text-blue-200">
        //           Contact
        //         </h3>
        //         <div className="space-y-3">
        //           <div className="flex items-center justify-center md:justify-start space-x-2">
        //             <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
        //               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        //             </svg>
        //             <span className="text-slate-200">+213 [VOTRE NUMÉRO]</span>
        //           </div>
        //           <div className="flex items-center justify-center md:justify-start space-x-2">
        //             <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
        //               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        //               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        //             </svg>
        //             <span className="text-slate-200">[VOTRE EMAIL]</span>
        //           </div>
        //         </div>
        //       </div>
        //     </div>

        //     {/* Copyright */}
        //     <div className="border-t border-slate-700 mt-8 pt-6 text-center">
        //       <p className="text-slate-400 text-sm">
        //         &copy; 2024 SARL VITROSAK. Tous droits réservés.
        //       </p>
        //     </div>
        //   </div>
        // </footer>
//       </div>
//     </div>
//   );
// }

import { Button } from "@/componants/ui/button";
import Logo from "@/resources/LOGO-1.svg";
import Logo2 from "@/resources/Umblum.png";
import Image from "next/image"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* ✅ MODIFIED: Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Geometric glass overlays */}
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/30 backdrop-blur-sm rounded-lg rotate-12 border border-white/20 hidden lg:block" />
      <div className="absolute top-1/3 right-16 w-24 h-40 bg-blue-100/40 backdrop-blur-sm rounded-xl rotate-45 border border-blue-200/30 hidden lg:block" />
      <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-slate-200/30 backdrop-blur-sm rounded-full border border-slate-300/20 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-200/40 backdrop-blur-sm rounded-lg rotate-12 border border-blue-300/30 hidden lg:block" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="py-8 px-4">
          <div className="container mx-auto text-center">
            <div className="flex justify-center items-center gap-4">
              <Image
                src={Logo}
                alt="Vitrosak Logo"
                width={400}
                height={400}
                className="object-contain w-50 h-auto md:w-62"
                priority
              />
            </div>
            <div className="bg-transparent p-0 m-8">
                <p className="text-slate-600 font-medium">
                Spécialiste en fabrication et transformation du verre plat
                </p>
                <p className="text-slate-500 text-sm mt-1">
                Applications automobiles et décoratives
                </p>
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* ... unchanged ... */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/30 mb-12">
              <div className="mb-6">
                <div className="flex justify-center items-center gap-4 mb-6">
                  <Image
                src={Logo2}
                alt="Vitrosak Logo"
                width={200}
                height={200}
                className="object-contain w-24 h-auto md:w-28"
                priority
              />
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-slate-700 mb-4">
                  Site Web en Développement
                </h2>
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Nous travaillons actuellement sur le lancement de notre site web officiel. Merci de votre patience pendant que nous finalisons son développement. En attendant, n'hésitez pas à consulter notre catalogue ou à nous contacter directement.
              </p>

              {/* ✅ MODIFIED: Button link */}
              <div className="space-y-4">
                <Button
                  size="lg"
                className="bg-[#3477AC] hover:bg-[#285e89] text-white text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.open(
                      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/50ef7f7ce_CataloguefinalCompressed.pdf",
                      "_blank"
                    )
                  }
                >
                  Consulter Notre Catalogue
                </Button>
                <p className="text-sm text-slate-500">
                  (Le Catalogue PDF sera téléchargé)
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="py-12 px-4 bg-gradient-to-r from-slate-800/95 to-blue-900/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white place-items-center">

              {/* Company Headquarters */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4 text-blue-200">
                  Siège Social
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-200">Guedjel, Sétif</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-slate-200">+213 675 005 111</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-slate-200">+213 560 535 168</span>
                  </div>

  <div className="flex items-center justify-center md:justify-start space-x-2 mt-3">

  <button
    onClick={() => window.open('https://maps.app.goo.gl/LDpicYgryrKXexjz9', '_blank')}
    className="text-blue-200 font-semibold underline hover:text-white transition-colors"
  >
    Voir sur Google Maps
  </button>
</div>
                </div>
              </div>

              {/* Showroom */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4 text-blue-200">
                  Showroom
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-200">Bir El Djir, Oran</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-slate-200">+213 697 888 680</span>
                  </div>
                <div className="flex items-center justify-center md:justify-start space-x-2 mt-3">
  <button
    onClick={() => window.open('https://maps.app.goo.gl/z16yMcYirr6Dsq5q8', '_blank')}
    className="text-blue-200 font-semibold underline hover:text-white transition-colors"
  >
    Voir sur Google Maps
  </button>
</div>
                </div>
              </div>
              {/* Contact Information */}
              <div className="text-center md:text-left lg:col-span-1 md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-semibold mb-4 text-blue-200">
                  Contacts PDG
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-slate-200">+213 661 888 340</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-slate-200">s.hani@vitrosak.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-700 mt-8 pt-6 text-center">
              <p className="text-slate-400 text-sm">
                &copy; 2025 SARL VITROSAK. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
