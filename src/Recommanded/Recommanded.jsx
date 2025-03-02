const Recommanded = () => {
  return (
    <div className=" ml-[17rem] mt-4 gap-y-2 flex flex-wrap flex-col">
      <div className=" font-medium text-2xl">Recommanded</div>
      <div className=" flex gap-x-2">
        <button className=" border px-2 py-1 rounded-xl shadow shadow-black">All Products</button>
        <button className=" border px-2 py-1 rounded-xl shadow shadow-black">Nike</button>
        <button className=" border px-2 py-1 rounded-xl shadow shadow-black">Adidas</button>
        <button className=" border px-2 py-1 rounded-xl shadow shadow-black">Puma</button>
        <button className=" border px-2 py-1 rounded-xl shadow shadow-black">Vans</button>
      </div>
    </div>
  )
}

export default Recommanded