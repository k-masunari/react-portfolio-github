import React, { useState } from "react";
import img from "../../img/Fv/baseball.png";

const Lightbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  // モーダルを開く
  const openLightbox = () => {
    setIsOpen(true);
  };

  // モーダルを閉じる
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* 画像サムネイルの表示 */}
      <div
        onClick={openLightbox}
        style={{ cursor: "pointer" }}
        className="d-inline-block py-2 px-4 btn bg-dark text-white hover"
      >アップで見る</div>

      {/* モーダル */}
      {isOpen && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={img} alt="Image" style={{ width: "100%" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
