import { ethers } from "./../node_modules/ethers/dist/ethers.min";
// import { Container } from "postcss";

const BuyChai = ({ state }) => {
  const buychai = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const massage = document.querySelector("#massage").value;
    console.log(name, massage, contract);
    const amount = { value: ethers.parseEther("0.001") };
    const transaction = await contract.buychai(name, massage, amount);
  };
  return (
    <div className=" w-full mx-3 my-3 ">
      <form className="flex flex-col" onSubmit={buychai}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" placeholder="Enter you name" />
        <label htmlFor="massage">massage</label>
        <input type="text" id="massage" placeholder="Type your massage.." />
        <button type="submit">pay</button>
      </form>
    </div>
  );
};

export default BuyChai;
