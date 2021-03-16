//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.4;

contract LockRelease {
    //money locker - might be dumb or redundant code, but a start
    //create variable to represent the owner of the money locker
    address payable owner;
    
    //I believe that this makes our contract payable
    receive() external payable{
    }
   
    //a function which, when called, allows an outsider to lock funds in the contract. This function also sets owner = to the address of the person who locked initial funds
    function lock() public payable {
        address(this).transfer(msg.value);
        owner = msg.sender;
    }
    
    //this function allows the person who locked the funds (and no one else) to drain the funds back out. 'require' might be better for this - will research. 
    function release() public {
        if(msg.sender == owner) {
        msg.sender.transfer(address(this).balance);
    } 
    }
    
}