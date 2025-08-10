import CartBtn from "./CartBtn";
function Card({ cakes,ref }) {

  return (
    
    <>
      {cakes.map((cake, index) => {
        return (
          <div 
          
            key={index}
            className="relative card w-2/13 min-w-74 p-4 items-center bg-[#FFF2EB] rounded-lg hover:shadow-xl shadow-lg shadow-[#FF9898] flex flex-col gap-2 border-[.5px] border-[#d75454]"
          >
            <h1 className="card-title font-[logo] py-2 px-4 rounded-lg text-xl bg-purple-300 text-black absolute">
              {cake.title}
            </h1>
            <div className="w-[96%] h-60">
              <img
                src={cake.pic}
                alt="black forest"
                className="rounded-lg w-full object-cover h-full"
              />
            </div>
            <h1 className="font-[logo] text-[#d75454] text-xl">{cake.name}</h1>
            <h3 className="font-[heading] text-[#ff7322]">
              Prince : {cake.price} &#8377;
            </h3>
            <button
              onClick={() => addItems(index)}
              className="px-4 py-2 hover:bg-purple-800 bg-purple-600 w-full rounded-md text-purple-200 font-[buttonFont] tracking-wide font-bold"
            >
             View
            </button>
          </div>
        );
      })}
      <CartBtn />
    </>
  );
}

export default Card;
