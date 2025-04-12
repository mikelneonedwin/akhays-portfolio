import { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

console.log('Web3Context is being initialized');

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  console.log('Web3Provider is rendering');
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    try {
      console.log('Attempting to connect wallet...');
      if (!window.ethereum) {
        throw new Error('Please install MetaMask!');
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      
      console.log('Wallet connected successfully:', address);
      setAccount(address);
      setBalance(ethers.utils.formatEther(balance));
      setProvider(provider);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const disconnectWallet = () => {
    console.log('Disconnecting wallet...');
    setAccount(null);
    setBalance(null);
    setProvider(null);
  };

  useEffect(() => {
    console.log('Setting up ethereum event listeners');
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        console.log('Accounts changed:', accounts);
        if (accounts.length === 0) {
          disconnectWallet();
        } else {
          connectWallet();
        }
      });
    }
  }, []);

  return (
    <Web3Context.Provider value={{ account, balance, provider, connectWallet, disconnectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context); 