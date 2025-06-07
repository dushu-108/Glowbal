function Card({ title, description }) {
  return (
    <div className="bg-gray-900 rounded-lg p-8 m-4 w-[300px] min-h-[270px] hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:border-2 hover:border-blue-500">
      <div className="flex flex-col h-full mt-12">
        <div className="mb-6">
          <h2 className="text-white text-2xl h-[60px]">{title}</h2>
        </div>
        <div className="flex-grow">
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
