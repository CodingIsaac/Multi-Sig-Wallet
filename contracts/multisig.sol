// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4; 

/**

1. The purpose of a multi-sig wallet --- to ensure we have multiple signers to a transaction.
2. What then do we need to implement this and how shoule we implement it?
a. keeping track of the ID of the signers to ensure they can only sign/ approve once
b. keep track of the exact number of the valid signers 
c. keep track of their addresses, side by side witht he amount.
d. on the event that the valid signers choose to revoke their approval how do they achieve that.
e. How do we determine quorum?
f. if to numbers of approval
g. bear in mind that the purpose of mapping is to keep track of address, id, and amount


*/

contract MultiSig {

    address[] validSigner;

    uint ID = 4;
    uint public Quorum = 5; 

    /** what are we checking for?
    1. mapping of transaction ID to number of approval status
    2. mapping of transaction ID to number of approval.
    3. check if an address has apporved a transaction
    4. check if there is quorum.
    5. 
    */
    mapping(uint => mapping (uint => bool)) approvalStatus;
    mapping(uint => uint) public noOfApproval;
    mapping(address => mapping (uint => bool)) approvalSignature;
    mapping (uint => address) beneficiary;
    mapping(uint => uint) amount;

    constructor(address[] memory _validSigner) {
        validSigner = _validSigner;
    }

    receive() external payable {

    }
    fallback() external payable {

    }

    // function to create the valid Owners/Signers

    function validOwner() private view returns (bool success) {
        address valid;
        for (uint256 i = 0; i < validSigner.length; i++) {
            if(msg.sender == validSigner[i]) {
                valid = msg.sender;
            }

        }
        assert(valid != address(0));
        success = true;
    }

    // Function to approve 

    function approveTransaction(uint id) public {
        /** create local variables to interact with the function 
        and state storage.
        */
        bool valid = validOwner();
        require(valid, "Not a valid signer");
        uint value = amount[id];
        address participants = beneficiary[id];
        assert(approvalSignature [msg.sender][id] == false);
        approvalSignature [msg.sender][id] ==true;
        noOfApproval[id] = noOfApproval[id] +1;
        if (noOfApproval[id] >= Quorum) {
            approvalStatus[id][noOfApproval[id]] = true;
            payable(participants).transfer(value);
        }


    }

    function withdrawEther(uint _amount) external {
        bool valid = validOwner();
        require(valid, "Not a valid signer");
        beneficiary[ID] = msg.sender;
        amount[ID] = _amount;
        approveTransaction(ID);
        ID++;

    } 

    function contractBalance() external view returns (uint256) {
        return address(this).balance;
    }

}