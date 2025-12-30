// Navbar.jsx
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsBtnRef = useRef(null);
  const productsMenuRef = useRef(null);

  // ESC로 드롭다운/모바일 메뉴 닫기
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // 드롭다운: 바깥 클릭 시 닫기
  useEffect(() => {
    const onClickAway = (e) => {
      if (!productsOpen) return;
      const btn = productsBtnRef.current;
      const menu = productsMenuRef.current;
      if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    window.addEventListener("click", onClickAway);
    return () => window.removeEventListener("click", onClickAway);
  }, [productsOpen]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm items-center h-14 justify-center md:h-16 py-2 md:py-5 my-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        {/* 상단 바 */}
        <div className="flex h-14 items-center justify-between w-full">
          {/* 로고 */}
          <div className="flex items-center gap-2">
            <a href="/" className="inline-flex items-center gap-2" aria-label="홈으로 이동">
              <span aria-hidden className="inline-block h-8 w-8 rounded bg-indigo-600" />
              <span className="text-lg font-semibold text-gray-900">Brand</span>
            </a>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">홈</a>

            {/* 드롭다운: 제품 */}
            <div className="relative">
              <button
                ref={productsBtnRef}
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                aria-haspopup="menu"
                aria-expanded={productsOpen}
                aria-controls="products-menu"
                onClick={() => setProductsOpen((v) => !v)}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    setProductsOpen(true);
                  }
                }}
              >
                제품
                <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 011.04 1.08l-4.25 3.85a.75.75 0 01-1.04 0l-4.25-3.85a.75.75 0 01.02-1.1z" />
                </svg>
              </button>

              <div
                ref={productsMenuRef}
                id="products-menu"
                role="menu"
                aria-label="제품 메뉴"
                data-open={productsOpen ? "true" : "false"}
                className="absolute left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg transition origin-top opacity-0 translate-y-1 pointer-events-none data-[open=true]:opacity-100 data-[open=true]:translate-y-0 data-[open=true]:pointer-events-auto"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <a href="#" role="menuitem" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">대시보드</a>
                <a href="#" role="menuitem" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">리포트</a>
                <a href="#" role="menuitem" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">통합</a>
              </div>
            </div>

            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">가격</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">문의</a>
          </div>

          {/* 우측 액션 */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">로그인</a>
            <a href="#" className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">시작하기</a>
          </div>

          {/* 모바일 토글 */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? '모바일 메뉴 닫기' : '모바일 메뉴 열기'}
          >
            <span className="sr-only">모바일 메뉴</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 패널 */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-gray-200 transition-all duration-200 overflow-hidden ${mobileOpen ? 'max-h-screen opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <div className="space-y-1 px-4 py-3">
          <a href="#" className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100">홈</a>
          <details className="rounded">
            <summary className="cursor-pointer rounded px-3 py-2 text-gray-700 hover:bg-gray-100">제품</summary>
            <div className="mt-1 ml-3 space-y-1">
              <a href="#" className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">대시보드</a>
              <a href="#" className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">리포트</a>
              <a href="#" className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">통합</a>
            </div>
          </details>
          <a href="#" className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100">가격</a>
          <a href="#" className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100">문의</a>
          <div className="mt-3 flex gap-2">
            <a href="#" className="flex-1 rounded border border-gray-300 px-3 py-2 text-center text-gray-700 hover:bg-gray-100">로그인</a>
            <a href="#" className="flex-1 rounded bg-indigo-600 px-3 py-2 text-center text-white hover:bg-indigo-700">시작하기</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
