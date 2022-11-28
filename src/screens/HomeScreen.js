import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";

const HomeScreen = () => {
  return (
    <div className="bg-[#410068] min-h-screen min-w-full flex justify-center items-start sm:items-center flex-col">
      <div className="w-[100%] sm:w-auto flex items-center justify-center  flex-col gap-4">
        <h1 className="w-[100%] sm:w-[500px] flex items-center justify-center p-3 bg-[#5e0098] ">
          Todo
        </h1>
        <div className="w-[100%] sm:w-[500px] flex bg-[#5A20CB] items-center ">
          <input type="text" className="h-10 w-[75%] bg-white m-2 " />
          <RiAddCircleLine
            className="btn btn-primary px-1 rounded-2xl mx-2"
            size={40}
            color="white"
          />
          <AiOutlineSearch
            className="btn btn-primary p-1 rounded-2xl"
            size={40}
            color="white"
          />
        </div>
      </div>
      <div className="w-[100%] sm:w-[500px] sm:h-[500px] grow sm:grow-0 bg-white overflow-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        mollitia, voluptatibus rem quidem atque ea eos sint, iusto beatae nobis
        doloribus! Nisi, officia earum? Commodi aut eaque odit animi
        consequuntur. Iste dolores nulla molestias nesciunt impedit corporis
        dignissimos fugiat perspiciatis corrupti sequi in, expedita quisquam
        totam earum. Impedit, illum fugiat? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Sint, repellendus quod. Possimus
        perspiciatis at voluptatum dolorem pariatur fuga placeat. Error quo
        maiores consequuntur, ipsa quidem unde explicabo rem ad placeat ratione
        ea, tempora reprehenderit eligendi beatae deleniti provident, a aliquam!
        Voluptate explicabo impedit reiciendis ducimus provident ratione quo
        sapiente voluptas reprehenderit commodi saepe, modi, nulla hic nemo
        magni suscipit unde mollitia odio nesciunt assumenda laudantium.
        Perferendis nam a, corrupti magni consequatur autem ullam excepturi. Qui
        iusto officia commodi illum dolor quisquam ab. Eveniet voluptates omnis
        vitae deserunt ab adipisci optio provident, quod laudantium nisi, enim
        amet, atque eum ullam a quis ut necessitatibus? Eligendi aut vero ipsa
        accusamus, libero expedita inventore excepturi ad quae impedit qui dolor
        voluptatem earum atque iste. Libero culpa aut nulla placeat voluptate
        eius quibusdam impedit maxime nisi excepturi quo accusamus dolores,
        totam perferendis vel corrupti, perspiciatis suscipit rem explicabo.
        Soluta aut harum fugit minus quas.
      </div>
    </div>
  );
};

export default HomeScreen;
