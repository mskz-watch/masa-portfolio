import { useState, useCallback } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-6faoummmyn";
import sheetSvgPaths from "../imports/svg-lr6lw5q3lo";
import { RecipeCard } from "./components/RecipeCard";
import { SearchInputScreen } from "./components/SearchInputScreen";
import { SearchResultsScreen } from "./components/SearchResultsScreen";
import { AddCondimentScreen } from "./components/AddCondimentScreen";
import { PantryScreen } from "./components/PantryScreen";
import { RecipeDetailScreen } from "./components/RecipeDetailScreen";
import { CameraScanScreen } from "./components/CameraScanScreen";
import { CourseConfirmScreen } from "./components/CourseConfirmScreen";
import { SplashScreen } from "./components/SplashScreen";
import { recipeDetails } from "./components/recipeData";
import type { PantryItem } from "./components/AddCondimentScreen";
import IOsStatusBar from "../imports/IOsStatusBar";

const recipes = recipeDetails.map((r) => ({
  id: r.id,
  image: r.image,
  title: r.title,
  time: r.time,
  fireLevel: r.fireLevel,
  consumptionAmount: r.consumptionAmount,
  consumptionMl: r.consumptionMl,
  tags: r.tags,
  highlightTag: r.highlightTag,
}));

function Header() {
  return (
    <header className="bg-[#3e76bd] w-full px-6 py-3 flex items-center justify-between shrink-0 sticky top-0 z-30">
      <p className="font-['Noto_Sans_JP',sans-serif] text-white text-lg tracking-[0.01px]" style={{ fontWeight: 700 }}>
        Karappo
      </p>
      <svg className="size-6 shrink-0" fill="none" viewBox="0 0 23.9982 23.9982">
        <path d={svgPaths.p3df4a300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
        <path d={svgPaths.p2cd52c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
      </svg>
    </header>
  );
}

function SearchBar({ onTap }: { onTap: () => void }) {
  return (
    <button
      onClick={onTap}
      className="w-full bg-white rounded-2xl shadow-[0px_3px_4px_-2px_rgba(0,0,0,0.25)] flex items-center px-4 py-3 gap-2 text-left cursor-pointer active:scale-[0.98] transition-transform"
    >
      <svg className="size-6 shrink-0" fill="none" viewBox="0 0 24 24">
        <mask height="24" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g><path d={svgPaths.pc423380} fill="#3E76BD" /></g>
      </svg>
      <span className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#b0aeae]" style={{ fontWeight: 500 }}>
        使いきりたい調味料を検索
      </span>
    </button>
  );
}

function SectionHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="font-['Noto_Sans_JP',sans-serif] text-lg text-[#1d293d] tracking-[-0.44px]" style={{ fontWeight: 700 }}>
        今すぐ作れる
      </h2>
      <button className="font-['Noto_Sans_JP',sans-serif] text-sm text-[#99a1af] tracking-[-0.15px]" style={{ fontWeight: 500 }}>
        すべて見る
      </button>
    </div>
  );
}

function BottomNav({
  activeTab,
  onTabChange,
}: {
  activeTab: "home" | "pantry";
  onTabChange: (tab: "home" | "pantry") => void;
}) {
  return (
    <nav className="bg-white w-full flex items-center border-t border-[#f3f4f6] shrink-0 sticky bottom-0 z-30">
      <button className="flex-1 flex flex-col items-center justify-center py-2 gap-1" onClick={() => onTabChange("home")}>
        <svg className="size-7" fill="none" viewBox="0 0 27.9951 27.9951">
          <path d={svgPaths.p28dc7b00} stroke={activeTab === "home" ? "#3E76BD" : "#CBD5E1"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d={svgPaths.p23600700} stroke={activeTab === "home" ? "#3E76BD" : "#CBD5E1"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
        </svg>
        <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] tracking-[0.12px]" style={{ fontWeight: 500, color: activeTab === "home" ? "#3E76BD" : "#CBD5E1" }}>ホーム</span>
      </button>
      <button className="flex-1 flex flex-col items-center justify-center py-2 gap-1" onClick={() => onTabChange("pantry")}>
        <svg className="size-7" fill="none" viewBox="0 0 27.9951 27.9951">
          <path d={svgPaths.p192e2f00} stroke={activeTab === "pantry" ? "#3E76BD" : "#CBD5E1"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d="M5.83231 11.6646H22.1628" stroke={activeTab === "pantry" ? "#3E76BD" : "#CBD5E1"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
          <path d="M17.4969 8.16524V15.164" stroke={activeTab === "pantry" ? "#3E76BD" : "#CBD5E1"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33293" />
        </svg>
        <span className="font-['Noto_Sans_JP',sans-serif] text-[12px] tracking-[0.12px]" style={{ fontWeight: 500, color: activeTab === "pantry" ? "#3E76BD" : "#CBD5E1" }}>パントリー</span>
      </button>
    </nav>
  );
}

/* ───── Bottom sheet icons ───── */

function CameraSheetIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 23.9937 23.9937">
      <path d={sheetSvgPaths.p2fbaad00} stroke="#2A5A94" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99948" />
      <path d={sheetSvgPaths.p7a2e100} stroke="#2A5A94" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99948" />
    </svg>
  );
}

function SearchSheetIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 23.9937 23.9937">
      <path d={sheetSvgPaths.pd624e80} stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99948" />
      <path d={sheetSvgPaths.p119c36b0} stroke="#FF6900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99948" />
    </svg>
  );
}

function ChevronRightSmall() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 19.9964 19.9964">
      <path d={sheetSvgPaths.p31c05d00} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
    </svg>
  );
}

function FloatingActionButton({
  onKeywordSearch,
  onCameraScan,
}: {
  onKeywordSearch: () => void;
  onCameraScan: () => void;
}) {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <>
      <button
        className="absolute bottom-20 right-5 z-40 bg-[#1d293d] rounded-full size-12 flex items-center justify-center shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] active:scale-95 transition-transform"
        onClick={() => setShowSheet(true)}
      >
        <svg className="size-6" fill="none" viewBox="0 0 23.9982 23.9982">
          <path d="M4.99963 11.9991H18.9986" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
          <path d="M11.9991 4.99963V18.9986" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99985" />
        </svg>
      </button>

      {showSheet && (
        <div className="absolute inset-0 z-50 flex items-end justify-center">
          <motion.div
            className="absolute inset-0 bg-black/20"
            onClick={() => setShowSheet(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative w-full bg-white rounded-t-3xl pt-4 pb-10 px-6"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className="flex justify-center mb-5">
              <div className="w-12 h-1 bg-[#e5e7eb] rounded-full" />
            </div>
            <h3 className="font-['Noto_Sans_JP',sans-serif] text-lg text-[#1e2939] text-center mb-5 tracking-[-0.44px]" style={{ fontWeight: 700 }}>
              食材・調味料を追加
            </h3>
            <div className="flex flex-col gap-3">
              {/* Camera option */}
              <button
                className="w-full bg-[#f9fafb] rounded-[14px] px-4 py-4 flex items-center gap-4 relative active:scale-[0.98] transition-transform"
                onClick={() => { setShowSheet(false); onCameraScan(); }}
              >
                <div className="absolute inset-0 border border-[#f3f4f6] rounded-[14px] pointer-events-none" />
                <div className="size-12 rounded-full bg-[#cbfbf1] flex items-center justify-center shrink-0"><CameraSheetIcon /></div>
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#1e2939] tracking-[-0.31px]" style={{ fontWeight: 700 }}>カメラで撮影して追加</span>
                  <span className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#6a7282]" style={{ fontWeight: 500 }}>バーコードや食材をスキャン</span>
                </div>
                <ChevronRightSmall />
              </button>
              {/* Keyword search option */}
              <button
                className="w-full bg-[#f9fafb] rounded-[14px] px-4 py-4 flex items-center gap-4 relative active:scale-[0.98] transition-transform"
                onClick={() => { setShowSheet(false); onKeywordSearch(); }}
              >
                <div className="absolute inset-0 border border-[#f3f4f6] rounded-[14px] pointer-events-none" />
                <div className="size-12 rounded-full bg-[#ffedd4] flex items-center justify-center shrink-0"><SearchSheetIcon /></div>
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="font-['Noto_Sans_JP',sans-serif] text-[16px] text-[#1e2939] tracking-[-0.31px]" style={{ fontWeight: 700 }}>キーワード検索で追加</span>
                  <span className="font-['Noto_Sans_JP',sans-serif] text-xs text-[#6a7282]" style={{ fontWeight: 500 }}>商品名から探して登録</span>
                </div>
                <ChevronRightSmall />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

type Screen =
  | { type: "splash" }
  | { type: "home" }
  | { type: "searchInput" }
  | { type: "searchResults"; query: string }
  | { type: "addCondiment" }
  | { type: "cameraScan" }
  | { type: "pantry" }
  | { type: "recipeDetail"; recipeId: number }
  | { type: "courseConfirm"; query: string };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ type: "splash" });
  const [pantryItems, setPantryItems] = useState<PantryItem[]>([]);

  const navigate = useCallback((next: Screen) => {
    setScreen(next);
  }, []);

  const handleAddToPantry = (items: PantryItem[]) => {
    setPantryItems((prev) => {
      const existingIds = new Set(prev.map((i) => i.id));
      const newItems = items.filter((i) => !existingIds.has(i.id));
      return [...prev, ...newItems];
    });
    navigate({ type: "pantry" });
  };

  const handleRemoveFromPantry = (id: string) => {
    setPantryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const pantryItemNames = pantryItems.map((i) => i.name);

  const navigateToRecipe = (recipeId: number) => {
    navigate({ type: "recipeDetail", recipeId });
  };

  const fabProps = {
    onKeywordSearch: () => navigate({ type: "addCondiment" }),
    onCameraScan: () => navigate({ type: "cameraScan" }),
  };

  const navProps = (tab: "home" | "pantry") => ({
    activeTab: tab as "home" | "pantry",
    onTabChange: (t: "home" | "pantry") => navigate({ type: t === "home" ? "home" : "pantry" }),
  });

  const renderScreen = () => {
    switch (screen.type) {
      case "splash":
        return (
          <SplashScreen onStart={() => navigate({ type: "home" })} />
        );
      case "searchInput":
        return (
          <SearchInputScreen
            onBack={() => navigate({ type: "home" })}
            onSearch={(query) => navigate({ type: "searchResults", query })}
          />
        );
      case "searchResults":
        return (
          <SearchResultsScreen
            onBack={() => navigate({ type: "searchInput" })}
            initialQuery={screen.query}
            onCourseConfirm={(query) => navigate({ type: "courseConfirm", query })}
            onRecipeTap={navigateToRecipe}
          />
        );
      case "courseConfirm":
        return (
          <CourseConfirmScreen
            query={screen.query}
            onGoHome={() => navigate({ type: "recipeDetail", recipeId: 1 })}
          />
        );
      case "recipeDetail": {
        const recipe = recipeDetails.find((r) => r.id === screen.recipeId);
        if (!recipe) return null;
        return (
          <RecipeDetailScreen
            recipe={recipe}
            onBack={() => navigate({ type: "home" })}
            onCook={() => navigate({ type: "home" })}
            pantryItemNames={pantryItemNames}
          />
        );
      }
      case "addCondiment":
        return (
          <AddCondimentScreen
            onBack={() => navigate({ type: "home" })}
            onAdd={handleAddToPantry}
            existingIds={pantryItems.map((i) => i.id)}
          />
        );
      case "cameraScan":
        return (
          <CameraScanScreen
            onBack={() => navigate({ type: "home" })}
            onAdd={handleAddToPantry}
            existingIds={pantryItems.map((i) => i.id)}
          />
        );
      case "pantry":
        return (
          <>
            <PantryScreen
              items={pantryItems}
              onRemove={handleRemoveFromPantry}
              onAddMore={() => navigate({ type: "addCondiment" })}
            />
            <FloatingActionButton {...fabProps} />
            <BottomNav {...navProps("pantry")} />
          </>
        );
      default:
        return (
          <>
            <Header />
            <main className="flex-1 overflow-y-auto px-6 pt-6 pb-20 flex flex-col gap-4">
              <SearchBar onTap={() => navigate({ type: "searchInput" })} />
              <SectionHeader />
              <div className="flex flex-col gap-4">
                {recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                    time={recipe.time}
                    fireLevel={recipe.fireLevel}
                    consumptionAmount={recipe.consumptionAmount}
                    consumptionMl={recipe.consumptionMl}
                    tags={recipe.tags}
                    highlightTag={recipe.highlightTag}
                    onTap={() => navigateToRecipe(recipe.id)}
                  />
                ))}
              </div>
            </main>
            <FloatingActionButton {...fabProps} />
            <BottomNav {...navProps("home")} />
          </>
        );
    }
  };

  const showStatusBar = screen.type !== "splash";

  return (
    <div className="flex justify-center w-full min-h-screen bg-[#e8e8e8]">
      <div
        className="relative flex flex-col w-full max-w-[430px] h-screen bg-[#fffcf4] overflow-hidden"
      >
        <div className="flex flex-col w-full h-full absolute inset-0">
          {showStatusBar && (
            <div className="w-full h-[54px] shrink-0 z-40">
              <IOsStatusBar />
            </div>
          )}
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}