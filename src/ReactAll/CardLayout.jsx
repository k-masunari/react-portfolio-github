// import React from "react";
// import LightBoxButton from "./LightBoxButton";
// import image1 from "../img/portfolio/eye.png";
// import image2 from "../img/portfolio/d.png";
// import image3 from "../img/portfolio/eye.png";
// import image4 from "../img/portfolio/it.png";
// import image5 from "../img/portfolio/jrep.png";
// import image6 from "../img/portfolio/kikkake.png";
// import image7 from "../img/portfolio/orange.png";
// import image8 from "../img/portfolio/power-after.png";
// import image9 from "../img/portfolio/ri.png";
// import image10 from "../img/portfolio/shop.png";
// import image11 from "../img/portfolio/vie.png";
// import image12 from "../img/portfolio/zero.png";
// import image13 from "../img/portfolio/zeroichi.png";

// const titles = [
//   { id: 1, src: "鎌ケ谷市少年野球連盟 HP" },
//   { id: 2, src: "電話占い師名鑑プラス HP" },
//   { id: 3, src: "アイケアラボ LP" },
//   { id: 4, src: "株式会社ITプラス HP" },
//   { id: 5, src: "株式会社日本再生エネルギープロジェクト HP" },
//   { id: 6, src: "合同会社キッカケ HP" },
//   { id: 7, src: "オレンジグループ HP" },
//   { id: 8, src: "パワーグレード LP" },
//   { id: 9, src: "株式会社リバティーブリッジ LP" },
//   { id: 10, src: "合同会社キッカケ専用販売サイト HP" },
//   { id: 11, src: "VIE HUIT HP" },
//   { id: 12, src: "ゼロワン LP" },
//   { id: 13, src: "WEB制作ゼロイチ HP" },
// ];

// const CardLayout = () => {
//   const title1 = titles.find((title) => title.id === 1);
//   const title2 = titles.find((title) => title.id === 2);
//   const title3 = titles.find((title) => title.id === 3);
//   const title4 = titles.find((title) => title.id === 4);
//   const title5 = titles.find((title) => title.id === 5);
//   const title6 = titles.find((title) => title.id === 6);
//   const title7 = titles.find((title) => title.id === 7);
//   const title8 = titles.find((title) => title.id === 8);
//   const title9 = titles.find((title) => title.id === 9);
//   const title10 = titles.find((title) => title.id === 10);
//   const title11 = titles.find((title) => title.id === 11);
//   const title12 = titles.find((title) => title.id === 12);
//   const title13 = titles.find((title) => title.id === 13);

//   return (
//     <div className="scroll-x">
//       <div className="d-flex scroll-x-in">
//         <div className="card history-card px-2 mx-3">
//           <img src={image1} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title1 ? title1.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image2} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title2 ? title2.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image3} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title3 ? title3.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image4} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title4 ? title4.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image5} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title5 ? title5.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image6} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title6 ? title6.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image7} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title7 ? title7.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image8} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title8 ? title8.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image9} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title9 ? title9.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image10} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title10 ? title10.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image11} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title11 ? title11.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image12} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title12 ? title12.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//         <div className="card history-card px-2 mx-3">
//           <img src={image13} alt="" />
//           <div className="py-3 border-top">
//             <div className="mb-3">
//               <h6 className="fw-bold">
//                 {title13 ? title13.src : "タイトルが見つかりません"}
//               </h6>
//             </div>
//             <LightBoxButton />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardLayout;
