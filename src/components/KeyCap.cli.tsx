'use client';

const KeyCap = ({keys, children}: {keys?: string[], children?: JSX.Element}) => {
    return (
        <div className="flex flex-row grid-5 align-middle min-w-max">
            {keys && keys.map((k, i) =>
                <div key={i} className="bg-violet-600 max-w-max max-h-max text-xs border-[1px] rounded-md border-accent p-1">{k}</div>
            )}
            <div className="max-w-max max-h-max text-sm rounded-md border-accent p-2">
                {children}
            </div>
        </div>
    )
}

export default KeyCap;
