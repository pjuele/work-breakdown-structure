'use client';

export default function DebugBreakpoints() {
    return (
        <div className="fixed bottom-3 left-3 rounded-lg bg-blue-950 p-2 text-xs font-bold flex flex-row gap-1">
          <span className="inline sm:hidden">XS</span>
          <span className="hidden sm:inline md:hidden">SM</span>
          <span className="hidden md:inline lg:hidden">MD</span>
          <span className="hidden lg:inline xl:hidden">LG</span>
          <span className="hidden xl:inline 2xl:hidden">XL</span>
          <span className="hidden 2xl:inline">2XL</span>
          <span className="hidden landscape:inline">land</span>
          <span className="hidden portrait:inline">port</span>
        </div>
    );
}