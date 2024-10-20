
export default function ComponentsTitle({tag,title,extraText}) {
  return (
    <div className="my-20 flex flex-col items-center gap-10 ">
        <div className="flex flex-row items-center gap-3">
        <span className="titleBorder"></span>
            <span className="bg-current text-white py-2 px-3 rounded-full">{tag}</span>
        <span className="titleBorder"></span>
        </div>
        <h2 className="text-4xl lg:text-5xl">
            <span className="font-bold">{title} </span>
            {extraText && <span className="font-sans">{extraText}</span>}
        </h2>
    </div>
  )
}
