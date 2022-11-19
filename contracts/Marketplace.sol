// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// importing OpenZeppelin's contracts
import "@openzeppelin/contracts/utils/Counters.sol"; // keep the track of NFTs
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

// importing Hardat
import "hardhat/console.sol";

contract Marketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 0.025 ether;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketItemCreated(
        uint256 tokenId,
        address payable seller,
        address payable owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    constructor() ERC721("Marketplace", "MKT") {
        owner = payable(msg.sender);
    }

    function updateListingPrice(uint256 _price) public payable onlyOwner() {
        listingPrice = _price;
    }

    function getListingsPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createToken(string memory tokenURI, uint256 price) public payable returns(uint) {
        require(price > 0, "Price must be greater than 0");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(owner, newItemId);
        _setTokenURI(newItemId, tokenURI);

        createMarketItem(newItemId, price);

        return newItemId;
    }

    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be greater than 0");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        IERC721(this).transferFrom(msg.sender, address(this), tokenId);

        emit MarketItemCreated(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );
    }

    function reSellToken(uint256 tokenId, uint256 price) public payable {
        require(price > 0, "Price must be greater than 0");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        MarketItem storage marketItem = idMarketItem[tokenId];
        require(marketItem.owner == msg.sender, "You are not the owner of this token");

        marketItem.price = price;
        marketItem.sold = false;
        marketItem.seller = owner;
        marketItem.owner = payable(address(this));

        _itemsSold.decrement();

        IERC721(this).transferFrom(msg.sender, address(this), tokenId);
    }

    function createMarketSale(uint256 tokenId) public payable {
        MarketItem storage marketItem = idMarketItem[tokenId];
        require(marketItem.owner == msg.sender, "You are not the owner of this token");
        require(marketItem.price == msg.value, "Please submit the correct price in order to complete the purchase");
        require(marketItem.sold == false, "Token is already sold");

        marketItem.seller.transfer(marketItem.price);
        marketItem.owner = payable(msg.sender);
        marketItem.seller = payable(address(0));
        marketItem.sold = true;

        _itemsSold.increment();

        IERC721(this).transferFrom(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(marketItem.seller).transfer(msg.value);
    }

    function getMarketItems() public view returns (MarketItem[] memory) {
        uint256 unsoldTokens = _tokenIds.current() - _itemsSold.current();
        MarketItem[] memory items = new MarketItem[](unsoldTokens);
        uint256 counter = 0;

        for (uint256 i = 1; i <= _tokenIds.current(); i++) {
            if (idMarketItem[i].owner == address(this)) {
                uint256 currentId = idMarketItem[i].tokenId;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[counter] = currentItem;
                counter++;
            }
        }

        return items;
    }

    function getMyNFTs() public view returns (MarketItem[] memory) {
        uint256 counter = 0;

        for (uint256 i = 1; i <= _tokenIds.current(); i++) {
            if (idMarketItem[i].owner == address(msg.sender)) {
                counter++;
            }
        }

        MarketItem[] memory items = new MarketItem[](counter);

        for (uint256 i = 1; i <= _tokenIds.current(); i++) {
            if (idMarketItem[i].owner == address(msg.sender)) {
                uint256 currentId = idMarketItem[i].tokenId;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[counter] = currentItem;
                counter++;
            }
        }

        return items;
    }

    function getItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalCount = 0;
        uint256 itemcount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 1; i < totalCount; i++) {
            if(idMarketItem[i].seller == address(msg.sender)) {
                itemcount++;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemcount);

        for(uint256 i = 1; i < totalCount; i++) {
            if(idMarketItem[i].seller == address(msg.sender)) {
                uint256 currentId = i;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
            }
        }

        return items;
    }
}