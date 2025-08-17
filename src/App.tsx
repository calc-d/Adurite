import banner from './assets/banner-roblux.png'
import CS from './assets/CS2.png'
import discord from './assets/discord2logo.png'
import DOTA from './assets/DOTA2.png'
import ingame from './assets/ingame.png'
import limited from './assets/limiteds.png'
import logo from './assets/logo.png'
import robluxface from './assets/roblux-face.png'
import rust from './assets/rust.png'

import { useState } from 'react';
import { 
  MessageCircle, 
  User,
  Github,
  Twitter,
  Youtube,
  X,
  Search
} from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchUsername, setSearchUsername] = useState('');
  const [showError, setShowError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handleSearch = () => {
    if (searchUsername.trim()) {
      // Simulate successful search - proceed to payment step
      setCurrentStep(2);
    }
  };

  const handlePaymentSelect = (paymentType: string) => {
    setSelectedPayment(paymentType);
    setTransactionId(`hLhzZH2XsdJfgfSZ5mUUPYPiizARgBwgvDvnJc9p`);
    setCurrentStep(3);
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setSearchUsername('');
    setSelectedPayment('');
    setTransactionId('');
    setShowError(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="p-6">
            {/* Username Search */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-white mb-4 text-center">
                What is your in-game Username?
              </h4>
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search your account..."
                    value={searchUsername}
                    onChange={(e) => setSearchUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                </div>
                <button 
                  onClick={handleSearch}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium text-white transition-colors"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Account Requirements */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white mb-3 text-center">
                Account Requirements
              </h4>
              <p className="text-gray-400 text-center mb-6 text-sm">
                Please ensure your account follows our requirements to receive your limited item
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-center flex-1">
                  <div className="text-white font-medium text-sm">Account Has</div>
                  <div className="text-white font-medium text-sm">Premium</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-white font-medium text-sm">Owns Small</div>
                  <div className="text-white font-medium text-sm">(Under 1.5k)</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-white font-medium text-sm">Public Trades</div>
                  <div className="text-white font-medium text-sm">& Inventory</div>
                </div>
              </div>
              
              {/* Dotted line connecting requirements */}
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dotted border-red-500 transform -translate-y-1/2"></div>
                <div className="flex justify-between relative">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="p-6">
            {/* Item Header */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Clockwork's Shades</h3>
              <p className="text-gray-400 text-sm mb-1">RAP: 1.9M</p>
              <p className="text-gray-400 text-sm mb-6">Buyer: twizwound</p>
              
              <div className="text-4xl font-bold text-white mb-6">$10,000<span className="text-gray-400">.00</span></div>
              
              <p className="text-gray-300 text-sm mb-8">Please select a payment method:</p>
            </div>

            {/* Payment Methods */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Bitcoin */}
              <button
                onClick={() => handlePaymentSelect('bitcoin')}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 text-center transition-colors border-2 border-transparent hover:border-orange-500"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">₿</span>
                </div>
                <div className="text-white font-medium text-base mb-1">Bitcoin</div>
                <div className="text-gray-400 text-sm">BTC</div>
              </button>

              {/* Litecoin */}
              <button
                onClick={() => handlePaymentSelect('litecoin')}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 text-center transition-colors border-2 border-transparent hover:border-blue-500"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">Ł</span>
                </div>
                <div className="text-white font-medium text-base mb-1">Litecoin</div>
                <div className="text-gray-400 text-sm">LTC</div>
              </button>

              {/* Crypto */}
              <button
                onClick={() => handlePaymentSelect('crypto')}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 text-center transition-colors border-2 border-transparent hover:border-green-500"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="flex items-center space-x-0.5">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-medium text-base mb-1">Crypto</div>
                <div className="text-gray-400 text-xs">(ETH, USDC and more)</div>
              </button>
            </div>

            {/* Transaction Info */}
            <div className="text-center mb-6">
              <p className="text-gray-300 text-sm mb-4">
                The item you purchase will be sent for the smallest tradeable limited in your inventory.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Transaction ID - {transactionId}
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="p-6">
            {/* Item Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Clockwork's Shades</h3>
              <p className="text-gray-400 text-sm mb-1">RAP: 1.9M</p>
              <p className="text-gray-400 text-sm mb-6">Buyer: twizwound</p>
              
              <div className="text-4xl font-bold text-white mb-6">$10,000<span className="text-gray-400">.00</span></div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
                You should only send {selectedPayment.toUpperCase()} to this address. If you attempt to send any other 
                cryptocurrency, your funds will be lost. Payments may take up to 2 network 
                confirmations to confirm. If you have any issues, please contact support.
              </p>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 bg-white p-4 rounded-lg">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ltclQ7guhtduwg9ka74zz7x6a6dk1t2rtg7nexmwc" 
                  alt="QR Code" 
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Wallet Address */}
            <div className="mb-6 text-center">
              <div className="flex items-center justify-center space-x-3 max-w-md mx-auto">
                <span className="text-white text-sm font-mono bg-transparent flex-1 text-center">ltclQ7guhtduwg9ka74zz7x6a6dk1t2rtg7nexmwc</span>
                <button
                  onClick={() => copyToClipboard('ltclQ7guhtduwg9ka74zz7x6a6dk1t2rtg7nexmwc')}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Back Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium text-white transition-colors"
              >
                Back
              </button>
            </div>

            {/* Transaction Info */}
            <div className="text-center mb-6">
              <p className="text-gray-300 text-sm mb-4">
                The item you purchase will be sent for the smallest tradeable limited in your inventory.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Transaction ID - {transactionId}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Header */}
      <header className="bg-[#0e0e0e] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="logo" className="h-10 w-auto mr-2" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Market</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Support</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Affiliate</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Claims</a>
              </div>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-black border border-red-600 rounded-md hover:bg-red-600/20 transition-colors">
                <img 
                  src={discord}
                  alt="Discord logo"
                  className="w-4 h-4"
                />
                <span className="text-sm">Discord</span>
              </button>
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md font-medium transition-colors">
                Log in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Game Categories */}
      <div className="bg-zinc-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center space-x-4">
            
            {/* LIMITEDS */}
            <div className="w-40 h-24 rounded-lg cursor-pointer overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src={limited}
                alt="Limiteds" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* CS:2 */}
            <div className="w-40 h-24 rounded-lg cursor-pointer overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src={CS} 
                alt="CS:2" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* DOTA 2 */}
            <div className="w-40 h-24 rounded-lg cursor-pointer overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src={DOTA} 
                alt="DOTA2" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* RUST */}
            <div className="w-40 h-24 rounded-lg cursor-pointer overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src={rust} 
                alt="Rust" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* IN-GAME */}
            <div className="w-40 h-24 rounded-lg cursor-pointer overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src={ingame} 
                alt="In-Game" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trustpilot Reviews */}
      <div className="bg-[#0e0e0e] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-4 text-sm">
            
            {/* Left Text */}
            <span className="text-gray-300">Our customers say</span>

            {/* Red Star Boxes */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-red-600 w-5 h-5 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M12 2l2.39 7.26h7.63l-6.18 4.49 2.39 7.26L12 16.51l-6.18 4.5 2.39-7.26-6.18-4.49h7.63z" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Review Text */}
            <span className="text-white">4.2 out of 5 based on 531 reviews</span>

            {/* Trustpilot Green Star + Text */}
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-green-500"
              >
                <path d="M12 2l2.39 7.26h7.63l-6.18 4.49 2.39 7.26L12 16.51l-6.18 4.5 2.39-7.26-6.18-4.49h7.63z" />
              </svg>
              <span className="text-green-500 font-semibold">Trustpilot</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
      </div>

      {/* Profile Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6 -mt-16">
          <div className="relative flex items-center justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-700">
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">bro1010</h1>
          </div>
        </div>
      </div>

      {/* LIMITEDS Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">LIMITEDS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            className="group bg-[#1c1c1c] rounded-lg p-6 cursor-pointer overflow-hidden relative"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Image instead of icon */}
            <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
              <img 
                src={robluxface} 
                alt="Silver Punk Face" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold mb-2">Silver Punk Face</h3>

            {/* RAP & Price */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-red-400 text-sm font-semibold">RAP</div>
                <div className="text-white font-bold">290K</div>
              </div>
              <div>
                <div className="text-red-400 text-sm font-semibold">Price</div>
                <div className="text-white font-bold">$1,251</div>
              </div>
            </div>

            {/* Animated bottom border */}
            <span className="absolute left-0 bottom-0 h-1 bg-red-500 w-0 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo and Company Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="mb-4">
                <img 
                  src={logo} 
                  alt="Adurite Logo" 
                  className="h-10 w-auto" 
                />
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Market</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">History</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Affiliate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Claims</a></li>
              </ul>
            </div>

            {/* Contact and Social */}
            <div>
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">Socials</h3>
                <div className="flex space-x-3">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
              
              <div className="text-sm text-gray-400">
                <p className="mb-1">Email: help@adurite.com</p>
                <p className="font-semibold text-white mb-1">Main Business Address</p>
                <p className="mb-1">2024 ADURITE LIMITED</p>
                <p className="mb-1">Unit 8, 3/F, Qwomar Trading Complex,</p>
                <p className="mb-1">Blackburne Road, Port Purcell Road</p>
                <p className="mb-4">Town, Tortola, British Virgin Islands VG1110</p>
              </div>

              {/* Payment Methods */}
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-xs text-white font-bold">M</div>
                <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center text-xs text-white font-bold">M</div>
                <div className="w-8 h-5 bg-black border border-gray-600 rounded flex items-center justify-center text-xs text-white font-bold">⋯</div>
                <div className="w-8 h-5 bg-blue-800 rounded flex items-center justify-center text-xs text-white font-bold">V</div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">
              Adurite © 2024 - Not affiliated in any way with the Roblox Corporation or any of its trademarks.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
              Adurite.com's services are not the same, similar or equivalent to Roblox Corporation's products and services and we are not sponsored by, affiliated with, approved by and/or authorized by 
              ROBLOX Corporation whatsoever. Adurite.com is a community led player to player marketplace which is operated by P2P limited item trades purchased by and sold by users, not directly from 
              the platform or officially from the corporation's platform.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#141414] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative p-6 border-b border-gray-700">
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 ${currentStep >= 1 ? 'bg-red-600' : 'bg-gray-600'} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    1
                  </div>
                  <div className={`w-12 h-0.5 ${currentStep >= 2 ? 'bg-red-600' : 'bg-gray-600'}`}></div>
                  <div className={`w-8 h-8 ${currentStep >= 2 ? 'bg-red-600' : 'bg-gray-600'} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    2
                  </div>
                  <div className={`w-12 h-0.5 ${currentStep >= 3 ? 'bg-red-600' : 'bg-gray-600'}`}></div>
                  <div className={`w-8 h-8 ${currentStep >= 3 ? 'bg-red-600' : 'bg-gray-600'} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    3
                  </div>
                  <div className={`w-12 h-0.5 ${currentStep >= 4 ? 'bg-red-600' : 'bg-gray-600'}`}></div>
                  <div className={`w-8 h-8 ${currentStep >= 4 ? 'bg-red-600' : 'bg-gray-600'} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    4
                  </div>
                </div>
              </div>

              {/* Item Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">
                    {currentStep === 1 ? 'Silver Punk Face' : 'Clockwork\'s Shades'}
                  </h3>
                  <p className="text-gray-400">
                    RAP: {currentStep === 1 ? '290K' : '1.9M'}
                  </p>
                  <p className="text-gray-400">
                    {currentStep === 1 ? 'Seller: bro1010' : 'Buyer: twizwound'}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-sm">Total</div>
                  <div className="text-red-400 text-2xl font-bold">
                    ${currentStep === 1 ? '1,251' : '10,000'}.00
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Modal Content */}
            {getStepContent()}

            {/* Disclaimer */}
            <div className="px-6 pb-6">
              <div className="text-xs text-gray-400 text-center leading-relaxed">
                Adurite.com's services are not the same, similar or equivalent to Roblox Corporation's products 
                and services and we are not sponsored by, affiliated with, approved by and/or authorized by 
                ROBLOX Corporation whatsoever. This limited item purchase is facilitated via a player to player 
                trade to you, and is not directly from the platform or officially from the site/corporation.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-md w-full p-8 text-center">
            {/* Error Icon */}
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-8 h-8 text-white" />
            </div>
            
            {/* Error Title */}
            <h3 className="text-2xl font-bold text-white mb-4">Error</h3>
            
            {/* Error Message */}
            <p className="text-gray-300 mb-8 leading-relaxed">
              You need to have at least a small limited (under 1,500 R$ in RAP).
            </p>
            
            {/* Try Again Button */}
            <button
              onClick={() => setShowError(false)}
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;