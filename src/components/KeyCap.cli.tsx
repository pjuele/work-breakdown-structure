'use client';

const KeyCap = ({keys}: {keys: string[]}) => {
    return (
        <div className="flex flex-row grid-5 align-middle min-w-max">
            {keys.map((k, i) =>
                <div key={i} className="max-w-max max-h-max text-xs border-[1px] rounded-md border-accent p-1">{k}</div>
            )}
        </div>
    )
}

export default KeyCap;
