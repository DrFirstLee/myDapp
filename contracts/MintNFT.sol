// SPDX-License-Identifier: MIT
 
 pragma solidity ^0.8.7;

 import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
 import "@openzeppelin/contracts/utils/Strings.sol";
 import "@openzeppelin/contracts/access/Ownable.sol";

 contract MintNFT is ERC721Enumerable, Ownable {
    string public metadataURI;
    uint public totalNFT;

    constructor(string memory _name, string memory _symbol ,string memory _metadataURI) ERC721(_name, _symbol) {
        metadataURI = _metadataURI;
    }

    function mintNFT() public onlyOwner {
        require(totalNFT > totalSupply(), "No more mint.");

        uint tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);
    }

    function batchMint(uint _amount) public onlyOwner {
        for(uint i = 0; i < _amount; i++) {
            mintNFT();
        }
    }
    
   function setTotalNFT(uint _totalNFT) public onlyOwner {
       totalNFT = _totalNFT;
   }

    function tokenURI(uint _tokenId) public override view returns(string memory) {
        return string(abi.encodePacked(metadataURI, '/', Strings.toString(_tokenId), '.json'));
    }
 }