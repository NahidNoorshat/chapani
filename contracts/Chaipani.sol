// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Chapani {
    struct Memo {
        string name;
        string massage;
        uint timestamp;
        address from;
    }

    Memo [] memos;

    address payable owner;

    constructor () {
        owner = payable(msg.sender);

    }

    function buychai ( string memory name, string memory massage ) public payable {
        require(msg.value>0, "Please sent more then 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,massage,block.timestamp,msg.sender));
    }

    function getmemos() public view returns (Memo[] memory) {
        return memos;
    }

}