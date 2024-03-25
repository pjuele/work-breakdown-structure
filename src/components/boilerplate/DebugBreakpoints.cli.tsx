'use client';

export default function DebugBreakpoints() {
    return (
        <div className="border-[1px] border-blue-500 dark:border-none fixed left-0 w-screen bottom-3 bg-blue-100 dark:bg-blue-950 text-blue-500 dark:text-blue-200 p-1 text-xs font-bold flex flex-row align-middle justify-center gap-1">
          <span className="inline sm:hidden">XS</span>
          <span className="hidden sm:inline md:hidden">SM</span>
          <span className="hidden md:inline lg:hidden">MD</span>
          <span className="hidden lg:inline xl:hidden">LG</span>
          <span className="hidden xl:inline 2xl:hidden">XL</span>
          <span className="hidden 2xl:inline">2XL</span>
          <span className="hidden landscape:inline">landscape</span>
          <span className="hidden portrait:inline">portrait</span>
        </div>
    );
}