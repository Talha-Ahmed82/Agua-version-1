"use client";
import React, { useEffect, useState ,useContext} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DefaultLayout from "../../components/maincomp/DefaultLayout";
import Moralis from "moralis";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import {WalletContext} from "../../app/contextApiWallet"
import { ethers } from  "ethers";
import Web3Modal from  "web3modal";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';
import CheckoutForm  from "./checkout-form"
const stripePromise = loadStripe("pk_test_51QVXaeHTOqTBr6uvL8e85QiY6Lz1iFE1ijGulsEObSw9fTAtZpUtIKZNOTp9QrgwaKCCZra80DZxV9x4hHFABpmL0004ctRrYh");

const Payment = () => {
  
  const router = useRouter();
  const { walletAddress, setWalletAddress, signer, setSigner } =
  useContext(WalletContext);
  console.log("this is wallet address from UseContext",walletAddress)
  console.log("This is signer address from UseContext ",signer)
  
  const [goldRate, setGoldRate] = useState(null); // Gold rate (XAU)
  const [silverRate, setSilverRate] = useState(null); // Silver rate (XAG)
  const [userDetails, setUserDetails] = useState(null); // Holds the fetched user details
  const [AguaPrice ,setAguaPrice] = useState(null);
  const [cart, setCart] = useState([]);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
const [selectedCryptoOption, setSelectedCryptoOption] = useState(null);
const [ethereumSubCategory, setEthereumSubCategory] = useState(null);
const [transactionHash, setTransactionHash] = useState(null);
const [gettransactionHash,SetgettransactionHash] = useState("")
 
const [total, setTotal] = useState(null); // Value in USD
const [btcRate, setBtcRate] = useState(null); // BTC rate
const [ethRate, setEthRate] = useState(null); // ETH rate
const [maticRate, setMaticRate] = useState(null); // MATIC rate
const [clientSecret, setClientSecret] = useState("");
const [showPayNowButton, setShowPayNowButton] = useState(true);
const [alert, setAlert] = useState(false);
// console.log("this is client secret",clientSecret);
// Dummy product data (you can replace this with actual data)
  const products = [
    {
      id: 1,
      name: "Gold",
      price: 20,
      img: "/gold2.png", // Replace with your own image path
    },
    {
      id: 2,
      name: "AG (Silver)",
      price: 40,
      img: "/silver1.png", // Replace with your own image path
    },
    {
      id: 3,
      name: "Agua",
      price: 10,
      img: "/Agua-newlogo.png", // Replace with your own image path
    },
  ];

  // Function to add product to cart (increment quantity if already exists)
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to decrement the quantity of a product
  const handleDecrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };
  
  // const fetchPaymentIntent = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/create-payment-intent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ amount: total *100 }), // Dynamic amount
  //     });

  //     const data = await response.json();
  //     console.log("this is Client Secret ",data)
  //     setClientSecret(data.clientSecret);
  //     setShowPayNowButton(false); // Hide the button after fetching clientSecret
  //   } catch (error) {
  //     console.error("Error fetching payment intent:", error);
  //   }
  // };
  

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };
  
useEffect(() => {
  setTotal(calculateTotal()); // Update total whenever cart changes
}, [cart]); // Dependency array ensures recalculation when cart updates
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImJiNDZjNGIxLWQxMGEtNDc2Ni05NGZjLTNmZTA0ZjI4MDViOCIsIm9yZ0lkIjoiNDE3MzE2IiwidXNlcklkIjoiNDI5MDQ5IiwidHlwZUlkIjoiYWU4NTg2OTQtOTlmNy00ZDI3LThmYmYtOGRmNmIxOGVhYzJhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzIyOTI1NzQsImV4cCI6NDg4ODA1MjU3NH0.n5cen_zNhhWRHDbTbdEbaqtdAHQJJ37xzN2axVjlbxs";
  const GOLD_API_KEY = "goldapi-adpnjj19m4wmsac5-io"; // GoldAPI key

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        await Moralis.start({ apiKey: API_KEY });

        // Fetch Bitcoin (BTC) price
        const btcResponse = await Moralis.EvmApi.token.getTokenPrice({
          chain: "0x1",
          address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        });
        const btcPrice = btcResponse.raw.usdPrice;
        console.log("BTC Price:", btcPrice); // Log BTC price
        setBtcRate(btcPrice);

        // Fetch Ethereum (ETH) price
        const ethResponse = await Moralis.EvmApi.token.getTokenPrice({
          chain: "0x1",
          address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 
        });
        const ethPrice = ethResponse.raw.usdPrice;
        console.log("ETH Price:", ethPrice); // Log ETH price
        setEthRate(ethPrice);

        // Fetch Polygon (MATIC) price
        const maticResponse = await Moralis.EvmApi.token.getTokenPrice({
          address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", 
          chain: "0x89", 
        });
        const maticPrice = maticResponse.raw.usdPrice;
        console.log("MATIC Price:", maticPrice); // Log MATIC price
        setMaticRate(maticPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchExchangeRates();
  }, []);

useEffect(() => {
  const fetchMetalRates = async () => {
    try {
      const troyOunceToGram = 31.1035;

      const goldResponse = await axios.get(
        `https://www.goldapi.io/api/XAU/USD`,
        {
          headers: {
            "x-access-token": GOLD_API_KEY,
          },
        }
      );

      console.log("Gold API Response:", goldResponse.data);

      if (goldResponse.data && goldResponse.data.price) {
        const goldPricePerOunce = goldResponse.data.price;
        const goldPricePerGram = goldPricePerOunce / troyOunceToGram;
        console.log("Gold Price (per gram):", goldPricePerGram);
        setGoldRate(goldPricePerGram.toFixed(4));
      }
       else {
        console.error("Invalid data structure from Gold API");
      }
            // Fetch Silver (XAG) price
      const silverResponse = await axios.get(
        `https://www.goldapi.io/api/XAG/USD`,
        {
          headers: {
            "x-access-token": GOLD_API_KEY,
          },
        }
      );
      console.log("Silver API Response:", silverResponse.data);
      if (silverResponse.data && silverResponse.data.price) {
        const silverPricePerOunce = silverResponse.data.price;
        const silverPricePerGram = silverPricePerOunce / troyOunceToGram;
        console.log("Silver Price (per gram):", silverPricePerGram);
        setSilverRate(silverPricePerGram.toFixed(4));
      } else {
        console.error("Invalid data structure from Gold API (Silver)");
      }

    } catch (error) {
      console.error("Error fetching metal data:", error.response?.data || error.message);
    }
  };

  fetchMetalRates();
}, []);

useEffect(() => {
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/product/getAllProducts");
      if (response.data && response.data.length > 0) {
        setUserDetails(response.data[0]); // Assuming you're dealing with one user
      }
    } catch (error) {
      console.error("Error fetching Product details:", error);
      // alert("Failed to load Product  data.");
    }
  };

  fetchUserDetails(); // Fetch data on component mount
}, []);


  // Fetch data from the backend
 
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/product/getAllProducts");
        if (response.data && response.data.length > 0) {
          setUserDetails(response.data[0]); // Assuming you're dealing with one user
          console.log("this is product price : ",response.data[0].role )
          setAguaPrice(response.data[0].role)
        }
      } catch (error) {
        console.error("Error fetching Product details:", error);
        alert("Failed to load Product  data.");
      }
    };
  
    fetchUserDetails(); // Fetch data on component mount
  }, []);

  const displayAlert = () => {
    setAlert(true);
  };
  useEffect(() => {
        if (alert) {
          Swal.fire({
            icon: "success",
            title: "Order Placed Successfully",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            setAlert(false);
          });
        }
      }, [alert]);
  const handleCheckout = () => {
    setShowPaymentOptions(true);
  };


async function EtherpayOwnerForTokens() {

  try {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      chain : 17000
    });

    // Connect to the wallet
    const providerInstance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(providerInstance);

    // Get the signer
    const signer = provider.getSigner();

    // Validate signer
    const userAddress = await signer.getAddress();
    console.log(`Connected with address: ${userAddress}`);

    // Perform calculations
    const PerEtherPrice = ethRate;
    console.log("Per Ether Price:", PerEtherPrice);
    const usdt = total;
    console.log("Total USDT:", usdt);
    const AmountinMatic = usdt /  PerEtherPrice;
    // const AmountinMatic = 0.003;
    console.log("Total Amount in Ethers:", AmountinMatic);

    // Convert to Wei
    const amountInWei = ethers.utils.parseEther(AmountinMatic.toString());

    // Create the transaction
    const tx = await signer.sendTransaction({
      to: "0x6F35a329D8C9566Aa5Ca6D950561AFc5AB12708B", // Replace with the recipient's address
      value: amountInWei,
       gasLimit: 300000, // Adjust as needed
       maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
       maxFeePerGas: "6000000000000",
    });

    console.log("Transaction sent:", tx);

    // Wait for confirmation
    const receipt = await tx.wait();
    console.log("Transaction confirmed:", receipt.transactionHash);
    // SetgettransactionHash(receipt);
    alert(`Payment of ${AmountinMatic} Ether sent successfully!`);

    return receipt.transactionHash;
    
  } catch (error) {
    console.error("Error during payment:", error);
    alert("Failed to send payment: " + error.message);
  }

}
async function PayForPolygonpayOwnerForTokens() {
  try {
      const providerOptions = {
    options: {
            // chainId: "0x13882", // hex of 80002, polygon testnet
            // rpcTarget: "https://rpc.ankr.com/polygon_amoy",
            // displayName: "Polygon Amoy Testnet",
            // blockExplorer: "https://amoy.polygonscan.com/",
            // ticker: "POL",
            // tickerName: "Polygon Ecosystem Token",
            // chainNamespace: ChainNamespace.EIP155,
            chainId: "0x89", // hex of 137, polygon mainnet
            rpcTarget: "https://rpc.ankr.com/polygon",
            displayName: "Polygon Mainnet",
            blockExplorer: "https://polygonscan.com",
            ticker: "POL",
            tickerName: "Polygon Ecosystem Token",
          },
  
  };
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
      chain : 17000
    });

    // Connect to the wallet
    const providerInstance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(providerInstance);

    // Get the signer
    const signer = provider.getSigner();

    // Validate signer
    const userAddress = await signer.getAddress();
    console.log(`Connected with address: ${userAddress}`);

    // Perform calculations
    const PerMaticPrice = maticRate  ;
    console.log("Per Matic Price:", PerMaticPrice);
    const usdt = total;
    console.log("Total USDT:", usdt);
    const AmountinMatic = (usdt / PerMaticPrice);
    // const AmountinMatic = 0.003;
    console.log("Total Amount in MATIC:", AmountinMatic);

    // Convert to Wei
    const amountInWei = ethers.utils.parseEther(AmountinMatic.toString());

    // Create the transaction
    const tx = await signer.sendTransaction({
      to: "0x6F35a329D8C9566Aa5Ca6D950561AFc5AB12708B", // Replace with the recipient's address
      value: amountInWei,
       gasLimit: 300000, // Adjust as needed
       maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
       maxFeePerGas: "6000000000000",
    });

    console.log("Transaction sent:", tx);

    // Wait for confirmation
    const receipt = await tx.wait();
    console.log("Transaction confirmed :", receipt.transactionHash);
    // const newhash = receipt.transactionHash
    //  SetgettransactionHash(newhash)
    return receipt.transactionHash;

    // alert(`Payment of ${AmountinMatic} Polygon sent successfully!`);
    
    
  } catch (error) {
    console.error("Error during payment:", error);
    alert("Failed to send payment: " + error.message);
  }
}
async function handleConfirmCart  (g)  {
  try {
    const token = localStorage.getItem("access_token"); // Retrieve token from localStorage (or state)
    console.log("this is token ", token)  
    if (!token) {
      alert("You are not logged in. Please log in to continue.");
      return;
    }
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id; // Assumes the token payload has 'id'
    const paymentSystem = "Polygon";
    const polygonScanNetworkLink  = "https://polygonscan.com/tx/"
    const transactionHashId =polygonScanNetworkLink+g;
    console.log("this is confirm transaction id from handle cart function",transactionHashId )
    const response = await fetch(`http://localhost:8000/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add the token here
      },
      body: JSON.stringify({ cart ,paymentSystem, userId ,transactionHashId}),
    });

    if (response.ok) {
      console.log("Cart data sent successfully!");
      displayAlert()
      window.location.reload();
    } else {
      const data = await response.json();
      console(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error("Error sending cart data:", error);
    console.log("Failed to send cart data. Please try again.");
  }
};
async function PayForUsdtOwnerForToken(){

  
    if (!signer || !walletAddress) {
      console.log("No provider or wallet connected");
      return;
    }

    try {
      // const signer = web3Provider.getSigner();
    
      const usdtContract = new ethers.Contract(
        "0x09d02cC90A09Fb3Ba955eAf686570CcF182702c9", [{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],signer
      );

      const amountToApprove = ethers.utils.parseUnits(total.toString());
      

        const tx2 = await usdtContract.transfer(
          "0x6F35a329D8C9566Aa5Ca6D950561AFc5AB12708B",
          amountToApprove
        );
        // console.log("Approval transaction hash:", tx2.hash);
        // setTransactionHash(tx2.hash); // Store transaction hash

        // Wait for transaction to be confirmed
        const receipt =  await tx2.wait();
    console.log("SendUSDT  function executed successfully and  confirmed:", receipt);

           return receipt.transactionHash
    } catch (error) {
      console.log("Error approving USDT:", error);
    }
  

}
async function handleConfirmCart1  (E)  {
  try {
    const token = localStorage.getItem("access_token"); // Retrieve token from localStorage (or state)
    console.log("this is token ", token)  
    if (!token) {
      alert("You are not logged in. Please log in to continue.");
      return;
    }
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id; // Assumes the token payload has 'id'
    const paymentSystem = "Ether";
    const EtherNetworkLink = "https://etherscan.io/tx/";
    const transactionHashId =  EtherNetworkLink+E;


    const response = await fetch(`http://localhost:8000/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add the token here
      },
      body: JSON.stringify({ cart ,paymentSystem, userId,transactionHashId}),
    });

    if (response.ok) {
      console.log("Cart data sent successfully!");
      displayAlert()
      window.location.reload();
      // router.push("/thank-you");
    } else {
      const data = await response.json();
      console.log(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error("Error sending cart data:", error);
    console.log("Failed to send cart data. Please try again.");
  }
};
async function handleConfirmCart2  (U)  {
  try {
    const token = localStorage.getItem("access_token"); // Retrieve token from localStorage (or state)
    console.log("this is token ", token)  
    if (!token) {
      alert("You are not logged in. Please log in to continue.");
      return;
    }
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id; // Assumes the token payload has 'id'
    const paymentSystem = "USDT";
    const USDtNetworkLink = "https://etherscan.io/tx/";
    // const USDtNetworkLink = " https://holesky.etherscan.io/tx/"
    const transactionHashId =  USDtNetworkLink+U;
    const response = await fetch(`http://localhost:8000/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add the token here
      },
      body: JSON.stringify({ cart ,paymentSystem, userId,transactionHashId }),
    });

    if (response.ok) {
      console.log("Cart data sent successfully!");
      displayAlert()
      window.location.reload();
      // router.push("/thank-you");
    } else {
      const data = await response.json();
      console.log(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error("Error sending cart data:", error);
    console.log("Failed to send cart data. Please try again.");
  }
};
const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      const error = await response.json();
      alert(error.message || "Failed to submit cart data.");
    }
  } catch (err) {
    console.error("Error submitting cart:", err);
    alert("An error occurred. Please try again.");
  }
};

async function handleConfirmCartByStripe  (S)  {
  try {
    const token = localStorage.getItem("access_token"); // Retrieve token from localStorage (or state)
    console.log("this is token ", token)  
    if (!token) {
      alert("You are not logged in. Please log in to continue.");
      return;
    }
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id; // Assumes the token payload has 'id'
    const paymentSystem = "Card";
    const StripeTransactionIdLink = "https://dashboard.stripe.com/test/payments/";
    // const USDtNetworkLink = " https://holesky.etherscan.io/tx/"
    const transactionHashId =  StripeTransactionIdLink+S;
    const response = await fetch(`http://localhost:8000/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add the token here
      },
      body: JSON.stringify({ cart ,paymentSystem, userId,transactionHashId }),
    });

    if (response.ok) {
      // alert("Cart data sent successfully!");
      displayAlert();
      setShowPayNowButton(false); // Hide the button after fetching clientSecret
      // router.push("/thank-you");
    } else {
      const data = await response.json();
      alert(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error("Error sending cart data:", error);
    alert("Failed to send cart data. Please try again.");
  }
};
const fetchPaymentIntent = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total *100 }), // Dynamic amount
    });

    const data = await response.json();
    console.log("this is Client Secret ",data)
     const PaymentId = data.clientSecret.match(/^pi_[a-zA-Z0-9]+/)[0];
     console.log("This is only Payment id",PaymentId)
    setClientSecret(data.clientSecret);
    return data.clientSecret.match(/^pi_[a-zA-Z0-9]+/)[0];
    
  } catch (error) {
    console.error("Error fetching payment intent:", error);
  }
 
};

async function twoFunctionForPolyGon() {
  try {
    // Execute payment and get the transaction hash
    const g = await PayForPolygonpayOwnerForTokens();
    console.log("This is Confirm  Transaction Hash:", g);

    // Pass the transaction hash to the cart confirmation function
    await handleConfirmCart(g);
  } catch (error) {
    console.error("Error in twoFunctionForPolyGon:", error);
    alert("An error occurred during the process.");
  }
}
async function twoFunctionForEthers () {
  try {
    const E = await EtherpayOwnerForTokens()
    console.log("This is Transaction hash Of Ethers",E);
    await handleConfirmCart1(E)
    
  } catch (error) {
    console.error("Error in twoFunctionForEthers:", error);
    alert("An error occurred during the process.");
  }
  }
async function TwoFunctionForUSDT () {
  try {
    const U = await PayForUsdtOwnerForToken()
    console.log("This is Transaction hash Of USDT Payment",U);
     await handleConfirmCart2(U)
     
  } catch (error) {
    console.error("Error in twoFunctionForUSDT:", error);
    // alert("An error occurred during the process.");
  }

  }
async function TwoFunctionforStripe (){
    const S = await fetchPaymentIntent()
    console.log("This is transaction Id of Stripe",S)
    if(S==null){
     
        throw new Error(` Payment Id  of Stripe Transaction Not found at the time of order placing.`);
        // router.push()
    }
    await handleConfirmCartByStripe(S)

}  
  return (
    <DefaultLayout>
        <Breadcrumb pageName="Payment" />
      <div className="mx-auto max-w-7xl p-8 font-lora">
      
        {/* Stock Section */}
        <div className="mb-18">
          <h1 className="mb-4 text-center text-2xl font-semibold text-black   ">
            Stock Available
          </h1>
          <div className="flex flex-wrap justify-center gap-20">
            {[
              {
                name: "Gold",
                price: "$1500",
                img: "/gold2.png",
                tokens: 100,
              },
              {
                name: "AG(Silver)",
                price: "$2000",
                img: "/silver1.png",
                tokens: 200,
              },
              {
                name: "Agua",
                price: "$3000",
                img: "/Agua-newlogo.png",
                tokens: 50,
              },
            ].map((stock, index) => (
              <div
                key={index}
                className="w-54 rounded-xl border-2 border-yellow-500 dark:border-white bg-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] p-4 text-center shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="mx-auto mb-4 h-24 w-24">
                  <img
                    src={stock.img}
                    alt={`${stock.name} Logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-xl font-medium text-[#374151] dark:text-white">
                  {stock.name}
                </div>
                <div className="mt-2 text-lg font-semibold text-yellow-500 dark:text-gray-400">
                  {stock.tokens} Tokens
                </div>
                
              </div>
            ))}
          </div>
        </div>

   

        {/* Payment System Section */}
       
    <div className="container mx-auto p-4">
      {/* Product List */}
      <div className="mb-8">
        <h1 className="mb-4 text-center text-2xl font-semibold text-black">
        Select Tokens
        </h1>
        <div className="flex flex-wrap justify-center gap-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-40 cursor-pointer bg-white rounded-xl border border-yellow-500 dark:border-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] hover:shadow-xl p-2 text-center shadow-md"
            >
              <div className="mx-auto mb-4 h-16 w-16">
                <img
                  src={product.img}
                  alt={`${product.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-lg font-semibold text-gray-600 dark:text-white">
              {product.name}
              </div>
              <div className="text-base font-bold text-yellow-500 dark:text-gray-400">
           
             price : ${product.price} 
              </div>
              <button
                onClick={() => handleAddToCart(product)}
               className="mt-2 w-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg "
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="mb-8 bg-white rounded-lg p-8 border border-yellow-500 dark:border-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727]">
        <h2 className="mb-4 text-center text-2xl font-semibold text-black dark:text-white">
          Your Cart
        </h2>
        {cart.length === 0 ? (
          <p className="text-center text-black dark:text-white">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 py-2"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-black dark:text-white">{item.name}</div>
                    <div className="font-semibold text-sm text-yellow-500 dark:text-gray-400">
                    {/* Price : {item.price} × Qty {item.quantity} */}
                    Qty : {item.quantity} Tokens
                    {/* setno_Of_Token(item.quantity) */}
                    {/* */}
                    </div>
                    <div className="font-semibold  text-sm text-yellow-500 dark:text-white">
                    Total:  {item.price * item.quantity}
                    
                      </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrementQuantity(item.id)}
                    className="bg-black px-2 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-black px-2 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Section */}
        <div className="mt-4">
          <div className="flex justify-between font-semibold text-lg text-gray-600 dark:text-white">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>

        {/* Checkout Button */}
        {cart.length > 0 && (
          <div className="mt-4 text-center">
            <button
             onClick={handleCheckout}
 
             className="mt-2 w-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg hover:bg-blue-600">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
       {/* Payment Options Section */}

{/* Payment Options Section */}
 
 
 
{showPaymentOptions && (
  <div className="mt-8 border-t border-gray-300 pt-4">
    <h2 className="mb-4 text-center text-xl font-semibold text-black">
      Select Payment Method
    </h2>
    <div className="flex justify-center gap-8">
      {/* Stripe Payment */}
      <button
        onClick={() => setSelectedPaymentMethod("Stripe")}
        className="w-50 border border-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
      >
        Stripe Card Payment
      </button>

      {/* Crypto Payment */}
      <button
        onClick={() => setSelectedPaymentMethod("Crypto")}
        className="w-50 border border-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
      >
        Crypto Payment
      </button>
    </div>

    {/* Stripe Payment Section */}
    {selectedPaymentMethod === "Stripe" && (
       <div className="mt-8 p-4 rounded-lg bg-white border border-yellow-500 dark:border-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727]">
        <h3 className="mb-4 text-center text-lg font-semibold text-black dark:text-white">
          Stripe Card Payment
        </h3>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white  mb-6">
        Your Selected Tokens
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-300 pb-2"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.img}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-semibold text-gray-600 dark:text-white">
                  {item.name}
                </div>
                <div className="text-sm text-yellow-500 dark:text-gray-400">
                  {item.price} × {item.quantity}
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-600 dark:text-white">
              $
              {item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-6 flex justify-between font-semibold text-xl text-gray-700 dark:text-white">
        <span>Total</span>
        <span>
          $
          {cart.reduce(
            (total, item) =>
              total + item.price * item.quantity,
            0
          )}
        </span>
      </div>

        {showPayNowButton && (  <button
          onClick={TwoFunctionforStripe}
          className="mt-4 w-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
        >
          Pay Now with Card
        </button>
           )}
        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret}/>
          </Elements>
        )}
      </div>
  
    
    

    )}

    {/* Crypto Payment Options */}
    {selectedPaymentMethod === "Crypto" && (
      <div className="mt-8">
        <h3 className="mb-4 text-center text-lg font-semibold text-black">
          Select Crypto Option
        </h3>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setSelectedCryptoOption("Polygon")}
            className="w-50 border border-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
          >
            Polygon
          </button>
          {/* <button
            onClick={() => setSelectedCryptoOption("Bitcoin")}
            className="w-50 bg-gradient-to-r from-[#9C883A] via-[#F5DE00] to-[#9C883A] text-white py-2 rounded-lg"
          >
            Bitcoin
          </button> */}
          <button
            onClick={() => setSelectedCryptoOption("Ethereum")}
            className="w-50 border border-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
          >
            Ethereum
          </button>
        </div>
      </div>
    )}

    {/* Separate Buy Section for Each Crypto Option */}
    {/* {selectedCryptoOption === "Polygon" && selectedPaymentMethod === "Crypto" && (
  <div className="mt-8 p-4 border rounded-lg bg-gray-100">
    <h3 className="mb-4 text-center text-lg font-semibold text-gray-500">
      Pay with Polygon 
    </h3>
    <p className="text-center text-sm text-gray-700">
      Proceed with your Polygon payment here.
    </p>
  
    <button
      onClick={()=>PayForPolygonpayOwnerForTokens()}
      className="mt-4 w-full bg-gradient-to-r from-[#9C883A] via-[#F5DE00] to-[#9C883A] text-white py-2 rounded-lg"
    >
      Pay Now
    </button>
  </div>
)} */}
{selectedCryptoOption === "Polygon" && selectedPaymentMethod === "Crypto" && (
  <div className="mt-8 p-4 border rounded-lg bg-white border-yellow-500 dark:border-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727]">
    <h3 className="mb-4 text-center text-lg font-semibold text-black dark:text-white">
      Pay with Polygon
    </h3>
    {/* <p className="text-center text-sm text-black">
      Proceed with your Polygon payment here.
    </p> */}
    
 
    <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">
        Your Selected Tokens
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-300 pb-2"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.img}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-semibold text-gray-600 dark:text-white">
                  {item.name}
                </div>
                <div className="text-sm text-yellow-500 dark:text-gray-400">
                  {item.price} × {item.quantity}
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-600 dark:text-white">
              $
              {item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-6 flex justify-between font-semibold text-xl text-gray-700 dark:text-white">
        <span>Total</span>
        <span>
          $
          {cart.reduce(
            (total, item) =>
              total + item.price * item.quantity,
            0
          )}
        </span>
      </div>


    {/* Pay Now Button */}
    <button
      onClick={() => twoFunctionForPolyGon()}
      className="mt-4 w-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
    >
      Pay Now
    </button>
  </div>
)}


    {/* {selectedCryptoOption === "Bitcoin" && selectedPaymentMethod === "Crypto" && (
      <div className="mt-8 p-4 border rounded-lg bg-gray-100">
        <h3 className="mb-4 text-center text-lg font-semibold text-gray-500">
        Pay with Bitcoin Currency
        </h3>
        <p className="text-center text-sm text-gray-700">
          Proceed with your Bitcoin payment here.
        </p>
        <button
          onClick={() => PayForBitcoinpayOwnerForTokens()}
          className="mt-4 w-full bg-gradient-to-r from-[#9C883A] via-[#F5DE00] to-[#9C883A] text-white py-2 rounded-lg"
        >
          Pay Now
        </button>
      </div>
    )} */}

    {selectedCryptoOption === "Ethereum" && selectedPaymentMethod === "Crypto" && (
      <div className="mt-8">
        <h3 className="mb-4 text-center text-lg font-semibold text-black">
          Select Ethereum Option
        </h3>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setEthereumSubCategory("USDT")}
            className="w-50 border border-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603]  text-white py-2 rounded-lg"
          >
            USDT
          </button>
          <button
            onClick={() => setEthereumSubCategory("Ethers")}
            className="w-50 border border-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
          >
            Ethers
          </button>
        </div>

        {/* Ethereum Subcategories */}
        {ethereumSubCategory === "USDT" && (
          <div className="mt-8 p-4 border rounded-lg bg-white border-yellow-500 dark:border-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727]">
            <h3 className="mb-4 text-center text-lg font-semibold text-black dark:text-white">
            Pay with USDT
            </h3>
            {/* <p className="text-center text-sm text-gray-700">
              Proceed with your USDT payment here.
            </p> */}
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">
        Your Selected Tokens
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-300 pb-2"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.img}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-semibold text-gray-600 dark:text-white">
                  {item.name}
                </div>
                <div className="text-sm text-yellow-500 dark:text-gray-400">
                  {item.price} × {item.quantity}
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-600 dark:text-white">
              $
              {item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-6 flex justify-between font-semibold text-xl text-gray-700 dark:text-white">
        <span>Total</span>
        <span>
          $
          {cart.reduce(
            (total, item) =>
              total + item.price * item.quantity,
            0
          )}
        </span>
      </div>

            <button
              onClick={() => TwoFunctionForUSDT()}
              className="mt-4 w-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
            >
              Pay Now
            </button>
          </div>
        )}

        {ethereumSubCategory === "Ethers" && (
          <div className="mt-8 p-4 border rounded-lg bg-white border-yellow-500 dark:border-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727]">
            <h3 className="mb-4 text-center text-lg font-semibold text-black dark:text-white">
            Pay with Ethers
            </h3>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
        Your Selected Tokens
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-300 pb-2"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.img}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-semibold text-gray-600 dark:text-white">
                  {item.name}
                </div>
                <div className="text-sm text-yellow-500 dark:text-gray-400">
                  {item.price} × {item.quantity}
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-600 dark:text-white">
              $
              {item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-6 flex justify-between font-semibold text-xl text-gray-700 dark:text-white">
        <span>Total</span>
        <span>
          $
          {cart.reduce(
            (total, item) =>
              total + item.price * item.quantity,
            0
          )}
        </span>
      </div>

            <button
              onClick={() => twoFunctionForEthers()}
              className="mt-4 w-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white py-2 rounded-lg"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    )}
  </div>
)}


   
      </div>
    </DefaultLayout>
  );
};

export default Payment;


 // const [selectedCrypto, setSelectedCrypto] = useState<string>("Bitcoin"); // Default selected crypto
//   const [tokens, setTokens] = useState<string>("0"); // Token amount

// const handleConfirmCart = async () => {
//   try {
//     const response = await fetch("http://localhost:8000/api/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ cart }),
//     });

//     if (response.ok) {
//       alert("Cart data sent successfully!");
//       router.push("/thank-you");
//     } else {
//       const data = await response.json();
//       alert(data.message || "Something went wrong.");
//     }
//   } catch (error) {
//     console.error("Error sending cart data:", error);
//     alert("Failed to send cart data. Please try again.");
//   }
// };
  // const providerOptions = {
  //   options: {
  //           // chainId: "0x13882", // hex of 80002, polygon testnet
  //           // rpcTarget: "https://rpc.ankr.com/polygon_amoy",
  //           // displayName: "Polygon Amoy Testnet",
  //           // blockExplorer: "https://amoy.polygonscan.com/",
  //           // ticker: "POL",
  //           // tickerName: "Polygon Ecosystem Token",
  //           // chainNamespace: ChainNamespace.EIP155,
  //           chainId: "0x89", // hex of 137, polygon mainnet
  //           rpcTarget: "https://rpc.ankr.com/polygon",
  //           // Avoid using public rpcTarget in production.
  //           // Use services like Infura, Quicknode etc
  //           displayName: "Polygon Mainnet",
  //           blockExplorer: "https://polygonscan.com",
  //           ticker: "POL",
  //           tickerName: "Polygon Ecosystem Token",
  //         },
  
  // };

    {/* Profile Section */}
        {/* <div className="gap-6">
          <div className="font-sans p-6">
            <div className="mb-8 flex items-center gap-6 rounded-xl border-2 border-gray-600 bg-[#D2D8E1] dark:bg-[#24303F] p-4">
              <div className="h-24 w-24">
                <img
                  src="/user-02.png"
                  alt="Profile Avatar"
                  className="h-full w-full rounded-full object-cover shadow-9"
                />
              </div>
              <div className="space-y-2">
                <p className="font-bold text-black dark:text-white">
                  <span className="text-lg font-semibold dark:text-gray-400">Name:</span> Alice
                </p>
                <p className="font-bold text-black dark:text-white">
                  <span className="text-lg font-semibold dark:text-gray-400">Wallet Address:</span>{" "}
                  0x1234...abcd
                </p>
              </div>
            </div>
          </div>
        </div> */}

        // async function PayForPolygonpayOwnerForTokens() {
        //   try {
        //     const providerOptions = {
        //       options: {
        //         chainId: "0x89", // hex of 137, polygon mainnet
        //         rpcTarget: "https://rpc.ankr.com/polygon",
        //         displayName: "Polygon Mainnet",
        //         blockExplorer: "https://polygonscan.com",
        //         ticker: "POL",
        //         tickerName: "Polygon Ecosystem Token",
        //       },
        //     };
        
        //     const web3Modal = new Web3Modal({
        //       cacheProvider: true,
        //       providerOptions,
        //       chain: 17000,
        //     });
        
        //     // Connect to the wallet
        //     const providerInstance = await web3Modal.connect();
        //     const provider = new ethers.providers.Web3Provider(providerInstance);
        
        //     // Get the signer
        //     const signer = provider.getSigner();
        //     const userAddress = await signer.getAddress();
        //     console.log(`Connected with address: ${userAddress}`);
        
        //     // Perform calculations
        //     const PerMaticPrice = maticRate; // Ensure `maticRate` is defined elsewhere
        //     const usdt = total; // Ensure `total` is defined elsewhere
        //     const AmountinMatic = 0.003; // Example value, replace with calculated value
        
        //     // Convert to Wei
        //     const amountInWei = ethers.utils.parseEther(AmountinMatic.toString());
        
        //     // Create the transaction
        //     const tx = await signer.sendTransaction({
        //       to: "0x6F35a329D8C9566Aa5Ca6D950561AFc5AB12708B", // Replace with the recipient's address
        //       value: amountInWei,
        //       gasLimit: 300000, // Adjust as needed
        //       maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        //       maxFeePerGas: "6000000000000",
        //     });
        
        //     console.log("Transaction sent:", tx);
        
        //     // Wait for confirmation
        //     const receipt = await tx.wait();
        //     console.log("Transaction confirmed:", receipt);
        
        //     // Return transaction hash
        //     return receipt.transactionHash;
        //   } catch (error) {
        //     console.error("Error during payment:", error);
        //     throw error;
        //   }
        // }
        
        // async function handleConfirmCart(gettransactionHash) {
        //   try {
        //     const token = localStorage.getItem("access_token"); // Retrieve token from localStorage
        //     if (!token) {
        //       alert("You are not logged in. Please log in to continue.");
        //       return;
        //     }
        
        //     const decodedToken = jwtDecode(token);
        //     const userId = decodedToken.id; // Assumes the token payload has 'id'
        //     const paymentSystem = "Polygon";
        
        //     const response = await fetch(`http://localhost:8000/api/cart`, {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${token}`, // Add the token here
        //       },
        //       body: JSON.stringify({ cart, paymentSystem, userId, gettransactionHash }),
        //     });
        
        //     if (response.ok) {
        //       alert("Cart data sent successfully!");
        //     } else {
        //       const data = await response.json();
        //       alert(data.message || "Something went wrong.");
        //     }
        //   } catch (error) {
        //     console.error("Error sending cart data:", error);
        //     alert("Failed to send cart data. Please try again.");
        //   }
        // }
        
        // async function twoFunctionForPolyGon() {
        //   try {
        //     // Execute payment and get the transaction hash
        //     const transactionHash = await PayForPolygonpayOwnerForTokens();
        //     console.log("Transaction Hash:", transactionHash);
        
        //     // Pass the transaction hash to the cart confirmation function
        //     await handleConfirmCart(transactionHash);
        //   } catch (error) {
        //     console.error("Error in twoFunctionForPolyGon:", error);
        //     alert("An error occurred during the process.");
        //   }
        // }
        




 // <div className="mt-8 p-4 border rounded-lg bg-gray-100">
      //   <h3 className="mb-4 text-center text-lg font-semibold text-gray-500">
      //     Stripe Card Payment
      //   </h3>
      //   <p className="text-center text-sm text-gray-700">
      //     Proceed with your Stripe card payment here.
      //   </p>
      //   <button
      //     onClick={() => handlePaymentStripe() }
      //     className="mt-4 w-full bg-gradient-to-r from-[#9C883A] via-[#F5DE00] to-[#9C883A] text-white py-2 rounded-lg"
      //   >
      //     Pay Now with Card
      //   </button>
      // </div>
      // <div className="mt-8 border-t border-gray-300 pt-4">
      // <h2 className="mb-4 text-center text-xl font-semibold text-gray-500">
      //   Select Payment Method
      // </h2>
      // <div className="flex justify-center gap-8">
      //   <button
      //     onClick={() => setSelectedPaymentMethod('Stripe')}
      //     className="w-50 bg-gradient-to-r from-[#9C883A] via-[#F5DE00] to-[#9C883A] text-white py-2 rounded-lg"
      //   >
      //     Stripe Card Payment
      //   </button>
      // </div>
